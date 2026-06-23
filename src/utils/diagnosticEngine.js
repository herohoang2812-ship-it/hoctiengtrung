const CONNECTORS = ['一方面', '另一方面', '此外', '然而', '因此', '所以', '尽管', '虽然', '不仅', '总之', '综上所述', '除了'];
const STANCE = ['在我看来', '我的看法是', '我认为', '我深信', '依我所见', '我觉得', '我想', '我相信'];
const SOLUTION = ['应该', '可以', '必须', '建议', '解决', '推荐', '有意义', '办法', '方法'];
const normalize = text => String(text || '').toLocaleLowerCase();
const countChineseCharsAndWords = (text) => {
  const t = String(text || '');
  const chineseChars = t.match(/[\u4e00-\u9fa5]/g) || [];
  const englishWords = t.replace(/[\u4e00-\u9fa5]/g, ' ').trim().split(/\s+/).filter(Boolean);
  return chineseChars.length + englishWords.length;
};
const clamp = value => Math.max(0, Math.min(100, Math.round(value)));

export function scoreObjective(questions, answers) {
  const evaluated = questions.map(question => ({
    id: question.id,
    question: question.question,
    skill: question.skill,
    correct: answers[question.id] === question.correct,
    selectedAnswer: answers[question.id] === undefined ? 'Chưa trả lời' : question.options[answers[question.id]],
    correctAnswer: question.options[question.correct],
  }));
  const correct = evaluated.filter(item => item.correct).length;
  return { score: clamp(correct / questions.length * 100), correct, total: questions.length, mistakes: evaluated.filter(item => !item.correct) };
}

export function scoreWriting(text) {
  const wordCount = countChineseCharsAndWords(text);
  const length = wordCount >= 80 ? 30 : wordCount >= 65 ? 24 : wordCount >= 50 ? 17 : wordCount >= 30 ? 8 : 0;
  const connectors = Math.min(25, CONNECTORS.filter(pattern => normalize(text).includes(pattern)).length * 7);
  const stance = Math.min(15, STANCE.filter(pattern => normalize(text).includes(pattern)).length * 15);
  const solution = Math.min(15, SOLUTION.filter(pattern => normalize(text).includes(pattern)).length * 8);
  const paragraphs = String(text || '').split(/\n\s*\n|\n/).filter(part => part.trim()).length;
  const structure = paragraphs >= 3 ? 15 : paragraphs === 2 ? 10 : 5;
  return { score: clamp(length + connectors + stance + solution + structure), wordCount, details: { length, connectors, stance, solution, structure } };
}

export function scoreSpeaking(text) {
  const wordCount = countChineseCharsAndWords(text);
  const length = wordCount >= 80 ? 35 : wordCount >= 55 ? 28 : wordCount >= 35 ? 20 : wordCount >= 18 ? 10 : 0;
  const connectors = Math.min(25, CONNECTORS.filter(pattern => normalize(text).includes(pattern)).length * 7);
  const stance = Math.min(20, STANCE.filter(pattern => normalize(text).includes(pattern)).length * 10);
  const example = /例如|比如|比方说/.test(normalize(text)) ? 10 : 0;
  const conclusion = /总之|最后|由此可见|综上所述/.test(normalize(text)) ? 10 : 0;
  return { score: clamp(length + connectors + stance + example + conclusion), wordCount, details: { length, connectors, stance, example, conclusion } };
}

export function buildDiagnosticResult({ lesen, hoeren, schreiben, sprechen }) {
  const skills = { 'Đọc': lesen.score, 'Nghe': hoeren.score, 'Viết': schreiben.score, 'Nói': sprechen.score };
  const overall = clamp(Object.values(skills).reduce((sum, value) => sum + value, 0) / 4);
  const sorted = Object.entries(skills).sort((a, b) => a[1] - b[1]);
  return { id: Date.now(), date: new Date().toISOString(), overall, skills, weakest: sorted.slice(0, 2).map(([skill, score]) => ({ skill, score })), details: { lesen, hoeren, schreiben, sprechen } };
}

const levelForScore = score => score >= 80 ? { label: 'Vững', tone: 'success' } : score >= 60 ? { label: 'Đang hình thành', tone: 'warning' } : { label: 'Cần ưu tiên', tone: 'accent' };

export function getDiagnosticFeedback(result) {
  if (!result) return null;
  const details = result.details || {};
  const objectiveFeedback = (name, key, high, middle, low, action) => {
    const score = result.skills[name] || 0;
    const detail = details[key] || {};
    const gaps = [...new Set((detail.mistakes || []).map(item => item.skill).filter(Boolean))];
    return {
      score,
      ...levelForScore(score),
      summary: score >= 80 ? high : score >= 60 ? middle : low,
      evidence: detail.total ? `Đúng ${detail.correct}/${detail.total} câu${gaps.length ? `; còn vướng: ${gaps.join(', ')}` : '; chưa thấy lỗ hổng rõ trong bài ngắn này'}.` : 'Chưa có dữ liệu chi tiết từ lần làm cũ.',
      action,
      mistakes: detail.mistakes || [],
    };
  };

  const writingDetails = details.schreiben?.details || {};
  const speakingDetails = details.sprechen?.details || {};
  const skills = {
    'Đọc': objectiveFeedback('Đọc', 'lesen', 'Bạn nhận diện ý chính và paraphrase khá chắc.', 'Bạn hiểu phần lớn văn bản nhưng độ ổn định giữa các dạng chưa cao.', 'Bạn dễ mất điểm khi đáp án được diễn đạt khác từ trong bài.', 'Mỗi ngày làm 1 đoạn ngắn và ghi lại cặp câu hỏi ↔ bằng chứng trong bài.'),
    'Nghe': objectiveFeedback('Nghe', 'hoeren', 'Bạn bắt được ý chính và thông tin cụ thể ở tốc độ chuẩn.', 'Bạn nghe được nội dung chung nhưng có thể bỏ sót điều kiện hoặc thay đổi chi tiết.', 'Bạn đang phụ thuộc vào từ nghe giống đáp án và dễ rơi vào distractor.', 'Luyện tập tập trung: nghe lần một lấy ý, lần hai ghi keyword và câu paraphrase.'),
    'Viết': {
      score: result.skills['Viết'] || 0,
      ...levelForScore(result.skills['Viết'] || 0),
      summary: (result.skills['Viết'] || 0) >= 80 ? 'Bài có đủ tín hiệu HSK cơ bản: quan điểm, liên kết và giải pháp.' : (result.skills['Viết'] || 0) >= 60 ? 'Bài đã truyền đạt được ý nhưng cấu trúc hoặc các từ chức năng còn mỏng.' : 'Bài chưa tạo được một lập luận HSK hoàn chỉnh và dễ bị trừ ở việc thực hiện yêu cầu đề bài.',
      evidence: `Bài dài ${details.schreiben?.wordCount || 0} chữ. Xem các tiêu chí bên dưới để biết điểm bị mất ở đâu.`,
      action: 'Viết lại cùng đề, giữ 3 đoạn và dùng ít nhất 3 từ liên kết cùng một đề xuất cụ thể.',
      criteria: [
        ['Độ dài', writingDetails.length || 0, 30, 'Đủ dung lượng để phát triển ý'],
        ['Từ nối', writingDetails.connectors || 0, 25, 'Kết nối lập luận thay vì liệt kê'],
        ['Quan điểm', writingDetails.stance || 0, 15, 'Nêu lập trường rõ ràng'],
        ['Giải pháp', writingDetails.solution || 0, 15, 'Đưa đề xuất đúng chức năng giao tiếp'],
        ['Bố cục', writingDetails.structure || 0, 15, 'Mở–thân–kết và chia đoạn'],
      ],
    },
    'Nói': {
      score: result.skills['Nói'] || 0,
      ...levelForScore(result.skills['Nói'] || 0),
      summary: (result.skills['Nói'] || 0) >= 80 ? 'Phần trình bày có lập trường, ví dụ và hướng kết luận rõ.' : (result.skills['Nói'] || 0) >= 60 ? 'Bạn diễn đạt được quan điểm nhưng bài nói chưa đều về liên kết hoặc ví dụ.' : 'Bài nói còn ngắn hoặc thiếu khung thuyết trình nên người nghe khó theo dõi.',
      evidence: `Transcript có ${details.sprechen?.wordCount || 0} chữ. Diagnostic này chưa chấm phát âm và ngữ điệu.`,
      action: 'Ghi âm lại 60–90 giây theo khung Phát triển ý → Quan điểm → Ví dụ → Kết luận.',
      criteria: [
        ['Phát triển ý', speakingDetails.length || 0, 35, 'Đủ nội dung cho một bài thuyết trình ngắn'],
        ['Từ nối', speakingDetails.connectors || 0, 25, 'Dẫn dắt người nghe qua các ý'],
        ['Quan điểm', speakingDetails.stance || 0, 20, 'Lập trường cá nhân rõ'],
        ['Ví dụ', speakingDetails.example || 0, 10, 'Minh họa bằng tình huống cụ thể'],
        ['Kết luận', speakingDetails.conclusion || 0, 10, 'Khép lại câu trả lời có chủ đích'],
      ],
    },
  };
  const overall = result.overall >= 80
    ? 'Nền tảng hiện tại khá vững. Việc cần làm không phải học lại từ đầu mà là tăng độ ổn định trong điều kiện bấm giờ.'
    : result.overall >= 60
      ? 'Bạn đã có nền HSK ban đầu, nhưng điểm giữa các kỹ năng chưa đều. Nếu thi ngay, kỹ năng yếu có thể kéo kết quả xuống.'
      : 'Nền tảng chưa ổn định để làm full test liên tục. Nên sửa kỹ năng yếu theo bài ngắn trước, rồi mới tăng áp lực thời gian.';
  const nextActions = result.weakest.map((item, index) => ({
    number: index + 1,
    title: `${index === 0 ? 'Ưu tiên' : 'Củng cố'} ${item.skill}`,
    text: skills[item.skill].action,
  }));
  nextActions.push({ number: 3, title: 'Đo lại sau 14 ngày', text: 'Làm lại Diagnostic hoặc một module bấm giờ để kiểm tra điểm yếu có thực sự giảm hay không.' });
  return { overall, skills, nextActions };
}

export function buildRoadmap(result) {
  if (!result) return [];
  const [first, second] = result.weakest;
  return [
    { phase: '30 ngày', title: 'Sửa nền & tạo thói quen', focus: first.skill, target: Math.min(85, Math.max(60, first.score + 12)), tasks: [`3 buổi/tuần tập trung ${first.skill}`, '2 Repair Sessions/tuần', 'SRS 15 phút mỗi ngày', '1 mini-test cuối tuần'] },
    { phase: '60 ngày', title: 'Tăng tốc theo dạng thi', focus: second.skill, target: Math.min(90, Math.max(65, second.score + 12)), tasks: [`Luân phiên ${first.skill} và ${second.skill}`, '2 module có bấm giờ/tuần', 'Ghi paraphrase và Redemittel vào SRS', 'Phân tích lỗi sau mỗi 10 bài'] },
    { phase: '90 ngày', title: 'Ổn định điểm thi', focus: 'Đủ 4 kỹ năng', target: Math.min(90, Math.max(70, result.overall + 8)), tasks: ['1 đề mô phỏng đầy đủ/tuần', 'Ôn lỗi lặp lại trước khi làm đề mới', 'Giữ từng kỹ năng ≥ 60%', 'Tuần cuối giảm tải và luyện chiến thuật'] },
  ];
}

export function saveDiagnosticResult(result) {
  localStorage.setItem('hsk_diagnostic_v1', JSON.stringify(result));
  window.dispatchEvent(new Event('hsk-progress-updated'));
}
export function getDiagnosticResult() {
  try { return JSON.parse(localStorage.getItem('hsk_diagnostic_v1') || 'null'); } catch { return null; }
}