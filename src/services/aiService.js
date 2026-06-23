// ─────────────────────────────────────────────────────────────────────────────
// AI Service — Tích hợp API AI cho HSK AI-Prep
// Mọi yêu cầu đi qua proxy cùng origin để khóa API không xuất hiện trong bundle.
// ─────────────────────────────────────────────────────────────────────────────

import { normalizeLearningError } from '../utils/errorTaxonomy';
import { auth } from './firebase';
import { deductAiCreditOnDb } from './dbService';

const AI_PROXY_URL = import.meta.env.VITE_AI_PROXY_URL || '/api/ai';

/**
 * Làm sạch và phân tích cú pháp chuỗi JSON trả về từ AI một cách bền bỉ,
 * xử lý các lỗi phổ biến như dấu phẩy thừa hoặc xuống dòng thực tế trong chuỗi.
 * @param {string} rawText
 * @returns {object}
 */
function cleanAndParseJSON(rawText) {
  if (!rawText) throw new Error('Dữ liệu phản hồi từ dịch vụ chấm đang trống.');

  const firstBrace = rawText.indexOf('{');
  const lastBrace = rawText.lastIndexOf('}');

  if (firstBrace === -1 || lastBrace === -1 || lastBrace < firstBrace) {
    console.error('[cleanAndParseJSON] Không tìm thấy JSON. Phản hồi thực tế từ AI:', rawText);
    const excerpt = rawText.trim().slice(0, 300);
    throw new Error(`Không tìm thấy dữ liệu chấm hợp lệ trong phản hồi. Nội dung nhận được: "${excerpt}${rawText.length > 300 ? '...' : ''}"`);
  }

  let jsonString = rawText.substring(firstBrace, lastBrace + 1);

  // 1. Loại bỏ các dòng chú thích nếu AI lỡ viết vào
  jsonString = jsonString
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(?:^|[^:])\/\/.*$/gm, '');

  // 2. Loại bỏ dấu phẩy thừa (trailing commas) trước ngoặc đóng
  jsonString = jsonString.replace(/,\s*([\]}])/g, '$1');

  // 3. Sửa ký tự xuống dòng và tab thực tế nằm bên trong chuỗi ngoặc kép
  jsonString = jsonString.replace(/"(?:[^"\\]|\\.)*"/g, (match) => {
    return match.replace(/[\r\n\t]/g, (char) => {
      if (char === '\n') return '\\n';
      if (char === '\r') return '\\r';
      if (char === '\t') return '\\t';
      return char;
    });
  });

  try {
    return JSON.parse(jsonString);
  } catch (err) {
    console.warn('[cleanAndParseJSON] Parse lần đầu thất bại, đang thử dọn dẹp ký tự điều khiển...', err);
    // Thử làm sạch triệt để các ký tự điều khiển không hợp lệ (control characters)
    // eslint-disable-next-line no-control-regex
    const cleanStr = jsonString.replace(/[\u0000-\u001f]/g, '');
    try {
      return JSON.parse(cleanStr);
    } catch (err2) {
      console.error('[cleanAndParseJSON] Thất bại hoàn toàn. Nội dung chuỗi JSON sau khi làm sạch:', jsonString);
      const excerpt = jsonString.trim().slice(0, 300);
      throw new Error(`Dữ liệu chấm trả về không hợp lệ: ${err2.message}. Nội dung nhận được: "${excerpt}${jsonString.length > 300 ? '...' : ''}"`);
    }
  }
}

/**
 * Gọi API AI với một mảng messages (OpenAI-compatible format)
 * @param {Array<{role: string, content: string}>} messages
 * @param {number} maxTokens
 * @returns {Promise<string>} - nội dung phản hồi từ AI
 */
async function callAI(messages, maxTokens = 1024) {
  const response = await fetch(AI_PROXY_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      messages,
      max_tokens: maxTokens,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Dịch vụ chấm lỗi ${response.status}: ${errText}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. CHẤM ĐIỂM BÀI VIẾT (Schreiben)
// ─────────────────────────────────────────────────────────────────────────────
/**
 * Chấm điểm bài viết tiếng Trung của người học
 * @param {string} userText  - bài viết của người học
 * @param {string} topicTitle - tên đề bài
 * @param {string} topicType  - loại bài viết (HSK 1-5)
 * @param {string[]} requirements - danh sách yêu cầu cần đáp ứng
 * @returns {Promise<object>} - kết quả chấm điểm
 */
export async function gradeWriting(userText, topicTitle, topicType, requirements) {
  if (auth.currentUser) {
    await deductAiCreditOnDb(auth.currentUser.uid);
  }
  const requirementsText = requirements.map((r, i) => `${i+1}. ${r}`).join('\n');

  const systemPrompt = `Bạn là giám khảo kỳ thi HSK chuyên nghiệp. 
Hãy chấm bài viết tiếng Trung của người học Việt Nam theo thang điểm HSK.
Phản hồi BẮT BUỘC theo đúng định dạng JSON sau, không thêm bất kỳ text nào ngoài khối JSON:
{
  "score": 82,
  "grade": "HSK Đạt",
  "critCompletion": "18/20",
  "critCoherence": "16/20",
  "critVocabulary": "16/20",
  "critGrammar": "16/20",
  "critRegister": "16/20",
  "errors": [
    {"original":"câu sai","correct":"câu sửa","category":"CHAR_ERROR","skillTag":"ba_sentence","reason":"giải thích tiếng Việt","drillPrompt":"yêu cầu viết lại một câu tương tự","expectedAnswer":"đáp án mẫu"}
  ],
  "strengths": "Điểm mạnh của bài viết bằng tiếng Việt",
  "rewrite": "Bài viết hoàn chỉnh mẫu bằng tiếng Trung"
}
Yêu cầu:
- errors: nêu tối đa 8 lỗi quan trọng và bắt buộc gắn category thuộc một trong: CHAR_ERROR (lỗi chữ Hán), PINYIN_TONE (lỗi phiên âm/thanh điệu), MEASURE_WORD (lỗi lượng từ), WORD_ORDER (lỗi trật tự từ), PARTICLE_USE (lỗi trợ từ 的/地/得), SENTENCE_STRUCTURE (cấu trúc câu), REGISTER (ngữ cảnh), COHERENCE (liên kết), VOCABULARY (từ vựng), TASK_COMPLETION (hoàn thành yêu cầu), SPELLING (chính tả), OTHER (lỗi khác).
- Mỗi error phải có drillPrompt và expectedAnswer bằng tiếng Trung để học viên tự sửa lại.
- rewrite: viết lại hoàn chỉnh, tự nhiên, đúng chuẩn tiếng Trung HSK.
- Điểm score là số nguyên từ 0 đến 100.
- Năm tiêu chí đều chấm trên 20 điểm và score là tổng của năm tiêu chí.
- Hãy chú ý đánh giá xem người học có viết đúng chữ Hán và ngữ pháp tiếng Trung hay không.

QUAN TRỌNG: Toàn bộ phản hồi phải là một đối tượng JSON hợp lệ duy nhất. KHÔNG sử dụng ký tự xuống dòng thực tế (literal newline) bên trong các giá trị chuỗi, hãy dùng ký tự "\\n" thay thế nếu muốn xuống dòng. KHÔNG sử dụng dấu ngoặc kép lồng nhau bên trong các chuỗi trừ khi được trốn dưới dạng \\".`;

  const userMessage = `ĐỀ BÀI: ${topicTitle} (${topicType})
YÊU CẦU ĐỀ BÀI:
${requirementsText}

BÀI VIẾT CỦA NGƯỜI HỌC:
${userText}

Hãy chấm điểm bài viết này.`;

  try {
    const rawResponse = await callAI(
      [
        { role: 'system', content: systemPrompt },
        { role: 'user',   content: userMessage },
      ],
      1200
    );

    if (!rawResponse || rawResponse.trim() === '') {
      throw new Error('Dịch vụ chấm bài chưa trả về kết quả. Vui lòng thử lại sau.');
    }

    const parsed = cleanAndParseJSON(rawResponse);

    return {
      score:           parsed.score          ?? 60,
      maxScore:        100,
      grade:           parsed.grade          ?? 'Đạt',
      critCompletion:  parsed.critCompletion ?? '15/20',
      critCoherence:   parsed.critCoherence  ?? '15/20',
      critVocabulary:  parsed.critVocabulary ?? '12/20',
      critGrammar:     parsed.critGrammar    ?? '12/20',
      critRegister:    parsed.critRegister   ?? '12/20',
      errors:          Array.isArray(parsed.errors) ? parsed.errors.map(normalizeLearningError) : [],
      strengths:       parsed.strengths      ?? '',
      rewrite:         parsed.rewrite        ?? userText,
    };
  } catch (err) {
    console.error('[aiService] gradeWriting error:', err);
    throw new Error(`Không thể kết nối dịch vụ chấm: ${err.message}`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. CHẤM ĐIỂM BÀI NÓI (Sprechen)
// ─────────────────────────────────────────────────────────────────────────────
/**
 * Chấm điểm bài nói của người học dựa trên transcript cuộc hội thoại
 * @param {string} topicTitle  - tên đề nói
 * @param {string} topicType   - loại bài (HSK 1-5)
 * @param {string[]} prompts   - các gợi ý thảo luận
 * @param {Array}  chatHistory - lịch sử chat [{sender, text}]
 * @returns {Promise<object>}
 */
export async function gradeSpeaking(topicTitle, topicType, prompts, chatHistory) {
  if (auth.currentUser) {
    await deductAiCreditOnDb(auth.currentUser.uid);
  }
  const userTurns = chatHistory
    .filter(m => m.sender === 'user')
    .map(m => m.text)
    .join('\n---\n');

  const promptsText = prompts.map((p, i) => `${i+1}. ${p}`).join('\n');

  const systemPrompt = `Bạn là giám khảo kỳ thi HSK / HSKK chuyên nghiệp.
Hãy đánh giá nội dung diễn đạt dựa trên transcript. Không được chấm phát âm vì không có dữ liệu âm thanh.
Phản hồi BẮT BUỘC theo đúng định dạng JSON sau, không thêm text ngoài JSON:
{
  "fluency": 78,
  "vocabulary": 75,
  "grammar": 80,
  "overall": "Đạt",
  "feedback": "Nhận xét tổng thể bằng tiếng Việt",
  "grammaticalFixes": [
    {"wrong":"cụm từ sai","right":"cụm từ đúng","category":"WORD_ORDER","skillTag":"ba_sentence","reason":"giải thích tiếng Việt","drillPrompt":"yêu cầu viết lại","expectedAnswer":"đáp án mẫu"}
  ],
  "improvements": "Lời khuyên cải thiện bằng tiếng Việt"
}
Lưu ý: Transcript là văn bản nhận dạng từ giọng nói (STT), có thể có lỗi nhận diện nhỏ của máy. Hãy đánh giá linh hoạt về nội dung và ngữ pháp. Các chỉ số điểm là số từ 0 đến 100. Mỗi grammaticalFix phải có category thuộc một trong các loại lỗi tiếng Trung (CHAR_ERROR, WORD_ORDER, PARTICLE_USE, MEASURE_WORD v.v.).

QUAN TRỌNG: Toàn bộ phản hồi phải là một đối tượng JSON hợp lệ duy nhất. KHÔNG sử dụng ký tự xuống dòng thực tế bên trong các giá trị chuỗi, hãy dùng ký tự "\\n" thay thế nếu muốn xuống dòng. KHÔNG sử dụng dấu ngoặc kép lồng nhau bên trong các chuỗi trừ khi được trốn dưới dạng \\".`;

  const userMessage = `ĐỀ NÓI: ${topicTitle} (${topicType})
GỢI Ý THẢO LUẬN:
${promptsText}

TRANSCRIPT PHẦN NÓI CỦA NGƯỜI HỌC:
${userTurns || '(Người học chưa nói hoặc transcript trống)'}

Hãy đánh giá phần nói này.`;

  try {
    const rawResponse = await callAI(
      [
        { role: 'system', content: systemPrompt },
        { role: 'user',   content: userMessage },
      ],
      800
    );

    if (!rawResponse || rawResponse.trim() === '') {
      throw new Error('Dịch vụ đánh giá bài nói chưa trả về kết quả.');
    }

    const parsed = cleanAndParseJSON(rawResponse);

    return {
      fluency:          parsed.fluency          ?? 60,
      grammar:          parsed.grammar          ?? 60,
      vocabulary:       parsed.vocabulary       ?? 60,
      overall:          parsed.overall          ?? 'Đạt',
      feedback:         parsed.feedback         ?? '',
      grammaticalFixes: Array.isArray(parsed.grammaticalFixes) ? parsed.grammaticalFixes.map(item => ({ ...item, ...normalizeLearningError({ ...item, original: item.wrong, correct: item.right }) })) : [],
      improvements:     parsed.improvements     ?? '',
    };
  } catch (err) {
    console.error('[aiService] gradeSpeaking error:', err);
    throw new Error(`Không thể kết nối dịch vụ chấm: ${err.message}`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. HỘI THOẠI VỚI GIÁM KHẢO AI (Sprechen)
// ─────────────────────────────────────────────────────────────────────────────
/**
 * Giám khảo AI phản hồi người học trong phần Sprechen
 * @param {string} topicTitle   - tên đề nói
 * @param {string} scenario     - mô tả tình huống
 * @param {string[]} prompts    - gợi ý thảo luận
 * @param {Array}  chatHistory  - [{sender: 'ai'|'user', text: '...'}]
 * @param {string} userMessage  - tin nhắn mới nhất của người học
 * @returns {Promise<string>}   - phản hồi của AI bằng tiếng Trung
 */
export async function chatWithExaminer(topicTitle, scenario, prompts, chatHistory, userMessage) {
  if (auth.currentUser) {
    await deductAiCreditOnDb(auth.currentUser.uid);
  }
  const promptsText = prompts.map((p) => `- ${p}`).join('\n');

  const systemPrompt = `你是一名 HSK 口语考试的考官。
任务："${topicTitle}"
情景：${scenario}
讨论要点：
${promptsText}

规则：
- 必须始终使用中文进行回复（适应 HSK 1-5 级别，根据说话人的水平调整用词难度）
- 回复保持简短（1-3句话），自然且口语化
- 提出跟进问题以引导对话继续
- 如果学生犯了语言错误，不需要直接纠正，而是通过正常对话引导
- 态度友好且专业
- 仅用中文回复，不包含翻译。`;

  const messages = [{ role: 'system', content: systemPrompt }];
  for (const msg of chatHistory.slice(-8)) {
    messages.push({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.text,
    });
  }
  messages.push({ role: 'user', content: userMessage });

  try {
    const response = await callAI(messages, 200);
    if (!response || response.trim() === '') {
      return '对不起，AI 考官服务暂时没有收到回复。请您再试一次。';
    }
    return response.trim() || '请问，您可以再解释一遍吗？';
  } catch (err) {
    console.error('[aiService] chatWithExaminer error:', err);
    return '对不起，AI 考官服务连接超时。请稍后再试。';
  }
}
