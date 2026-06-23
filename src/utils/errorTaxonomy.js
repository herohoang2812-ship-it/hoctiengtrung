export const ERROR_CATEGORIES = {
  CHAR_ERROR: { label: 'Sai chữ Hán', color: 'accent' },
  PINYIN_TONE: { label: 'Phiên âm/Thanh điệu', color: 'warning' },
  MEASURE_WORD: { label: 'Sai lượng từ', color: 'warning' },
  WORD_ORDER: { label: 'Sai trật tự từ', color: 'accent' },
  PARTICLE_USE: { label: 'Sai trợ từ 的/地/得', color: 'secondary' },
  SENTENCE_STRUCTURE: { label: 'Cấu trúc câu', color: 'primary' },
  REGISTER: { label: 'Văn phong', color: 'secondary' },
  COHERENCE: { label: 'Mạch lạc & liên kết', color: 'primary' },
  VOCABULARY: { label: 'Từ vựng', color: 'success' },
  TASK_COMPLETION: { label: 'Thiếu yêu cầu đề', color: 'warning' },
  SPELLING: { label: 'Chính tả', color: 'secondary' },
  OTHER: { label: 'Lỗi khác', color: 'muted' },
};

export function inferErrorCategory(error = {}) {
  const supplied = String(error.category || '').toUpperCase();
  if (ERROR_CATEGORIES[supplied]) return supplied;
  const text = `${error.reason || ''} ${error.original || error.answer || ''}`.toLowerCase();
  
  if (/chữ hán|hanzi|viết chữ|nét|sai chữ/.test(text)) return 'CHAR_ERROR';
  if (/pinyin|phiên âm|thanh điệu|dấu|thanh/.test(text)) return 'PINYIN_TONE';
  if (/lượng từ|lượng/.test(text)) return 'MEASURE_WORD';
  if (/trật tự từ|vị trí từ|word order|trật tự/.test(text)) return 'WORD_ORDER';
  if (/trợ từ|de|的|地|得/.test(text)) return 'PARTICLE_USE';
  if (/register|văn phong|lịch sự|trang trọng/.test(text)) return 'REGISTER';
  if (/kohären|liên kết|mạch lạc|logic/.test(text)) return 'COHERENCE';
  if (/wortschatz|vokab|từ vựng|dùng từ/.test(text)) return 'VOCABULARY';
  if (/aufgabe|inhaltspunkt|yêu cầu|thiếu ý/.test(text)) return 'TASK_COMPLETION';
  if (/chính tả|spelling/.test(text)) return 'SPELLING';
  if (/cấu trúc|ngữ pháp|câu/.test(text)) return 'SENTENCE_STRUCTURE';
  
  return 'OTHER';
}

export function normalizeLearningError(error = {}) {
  const category = inferErrorCategory(error);
  const original = error.original || error.answer || '';
  const correct = error.correct || error.correction || '';
  return {
    ...error,
    category,
    categoryLabel: ERROR_CATEGORIES[category].label,
    original,
    correct,
    reason: error.reason || error.explanation || '',
    skillTag: error.skillTag || category.toLowerCase(),
    drillPrompt: error.drillPrompt || `Hãy viết lại câu đúng, giữ nguyên ý: “${original}”`,
    expectedAnswer: error.expectedAnswer || correct,
  };
}