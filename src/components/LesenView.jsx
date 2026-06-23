import { useState, useEffect } from 'react';
import { Award, Check, BookOpen, RefreshCw, X } from 'lucide-react';
import { LESEN_EXAMS } from '../data/lesenExams';
import { recordAttempt } from '../utils/learningStore';

const HSK_LEVELS = ['Tất cả', 'HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6'];

export default function LesenView({ showToast, onActivityComplete }) {
  const [selectedLevel, setSelectedLevel] = useState('Tất cả');
  const [selectedExamId, setSelectedExamId] = useState(1);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showPinyin, setShowPinyin] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);

  // Filter exams based on HSK level selection
  const filteredExams = LESEN_EXAMS.filter(exam => {
    if (selectedLevel === 'Tất cả') return true;
    return exam.level === selectedLevel;
  });

  // Current selected exam object
  const currentExam = LESEN_EXAMS.find(e => e.id === selectedExamId) || LESEN_EXAMS[0];

  // Auto-switch selectedExamId to the first item of the new level when filter changes
  useEffect(() => {
    if (filteredExams.length > 0) {
      const exists = filteredExams.some(e => e.id === selectedExamId);
      if (!exists) {
        setSelectedExamId(filteredExams[0].id);
        setAnswers({});
        setSubmitted(false);
        setScore(0);
      }
    }
  }, [selectedLevel, filteredExams, selectedExamId]);

  const selectAnswer = (questionId, optionIndex) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmitExam = () => {
    if (submitted) return;
    
    let correct = 0;
    const errors = [];
    currentExam.questions.forEach(q => {
      const selected = answers[q.id];
      if (selected === q.correct) {
        correct++;
      } else {
        errors.push({
          question: q.question,
          answer: selected === undefined ? 'Chưa trả lời' : q.options[selected],
          correction: q.options[q.correct],
          explanation: q.explanation,
          skillTag: 'lesen-comprehension',
          category: 'VOCABULARY'
        });
      }
    });

    const percent = Math.round((correct / currentExam.questions.length) * 100);
    setScore(percent);
    setSubmitted(true);
    
    recordAttempt({
      module: 'Lesen',
      part: currentExam.title,
      correct,
      total: currentExam.questions.length,
      errors
    });

    if (onActivityComplete) {
      onActivityComplete();
    }

    showToast?.(`Đã nộp bài luyện đọc: Đúng ${correct}/${currentExam.questions.length} câu (${percent}%)`, percent >= 60 ? 'success' : 'warning');
  };

  const handleTopicChange = (id) => {
    setSelectedExamId(id);
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  const reset = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  return (
    <div className="page-section">
      <div className="content-header">
        <div>
          <h1 className="content-title">Luyện Đọc HSK</h1>
          <p className="content-subtitle">Đọc hiểu các đoạn văn bản tiếng Trung, trả lời trắc nghiệm và xem phân tích dịch chi tiết.</p>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Left Column: Exam List */}
        <div className="col-4 flex-col gap-sm">
          <div className="glass-panel panel">
            <h3 style={{ fontSize: '15px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen size={16} />
              Đề luyện đọc
            </h3>
            
            {/* Level Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
              {HSK_LEVELS.map(level => {
                const isSelected = selectedLevel === level;
                return (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: '600',
                      border: isSelected ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.05)',
                      background: isSelected ? 'var(--primary-soft)' : 'rgba(255,255,255,0.02)',
                      color: isSelected ? 'var(--primary)' : 'var(--text-muted)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {level}
                  </button>
                );
              })}
            </div>

            {/* Scrollable list of filtered exams */}
            <div className="flex-col gap-xs" style={{ maxHeight: '580px', overflowY: 'auto', paddingRight: '4px' }}>
              {filteredExams.map((exam) => {
                const isActive = exam.id === selectedExamId;
                return (
                  <div
                    key={exam.id}
                    className={`redemittel-card ${isActive ? 'active-history-card' : ''}`}
                    onClick={() => handleTopicChange(exam.id)}
                    style={{
                      cursor: 'pointer',
                      padding: '12px',
                      borderLeft: isActive ? '3px solid var(--primary)' : '3px solid transparent',
                      background: isActive ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.02)'
                    }}
                  >
                    <div className="flex-between" style={{ marginBottom: '4px' }}>
                      <span className="badge badge-secondary" style={{ fontSize: '9px' }}>{exam.level}</span>
                      <span style={{ fontSize: '10px', color: 'var(--text-dark)' }}>Đề số {exam.id}</span>
                    </div>
                    <div className="font-semibold" style={{ fontSize: '13px', lineHeight: '1.4' }}>
                      {exam.title}
                    </div>
                  </div>
                );
              })}
              {filteredExams.length === 0 && (
                <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px' }}>
                  Không có đề nào phù hợp.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Passage & Questions */}
        <div className="col-8 dashboard-grid">
          {/* Passage Panel */}
          <div className="col-6 flex-col gap-md">
            <div className="glass-panel panel flex-col gap-md" style={{ minHeight: '450px' }}>
              <div>
                <span className="badge badge-secondary">{currentExam.level}</span>
                <h2 style={{ fontSize: '18px', marginTop: '10px' }}>{currentExam.title}</h2>
              </div>
              
              {/* Toolbar for Show/Hide Pinyin & Translation */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '4px' }}>
                <button
                  onClick={() => setShowPinyin(!showPinyin)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: '600',
                    border: '1px solid var(--border-color)',
                    background: showPinyin ? 'var(--primary-soft)' : 'transparent',
                    color: showPinyin ? 'var(--primary)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {showPinyin ? 'Ẩn Pinyin' : 'Hiện Pinyin'}
                </button>
                <button
                  onClick={() => setShowTranslation(!showTranslation)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: '600',
                    border: '1px solid var(--border-color)',
                    background: showTranslation ? 'var(--primary-soft)' : 'transparent',
                    color: showTranslation ? 'var(--primary)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {showTranslation ? 'Ẩn Bản dịch' : 'Hiện Bản dịch'}
                </button>
              </div>

              {/* Text Container */}
              <div 
                className="rewrite-block exam-passage" 
                style={{ 
                  fontSize: '16px', 
                  lineHeight: '1.8', 
                  color: 'var(--text-main)',
                  padding: '16px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '10px',
                  border: '1px solid var(--border-color)',
                  maxHeight: '480px',
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                {/* Chinese Text */}
                <div style={{ fontFamily: 'var(--font-title)', fontSize: '18px', fontWeight: '500', color: '#ffffff', letterSpacing: '0.5px', whiteSpace: 'pre-wrap' }}>
                  {currentExam.text}
                </div>

                {/* Pinyin Text */}
                {showPinyin && (
                  <div style={{ 
                    fontSize: '14.5px', 
                    lineHeight: '1.6', 
                    color: 'var(--primary)', 
                    fontStyle: 'italic', 
                    borderLeft: '2px solid rgba(197, 160, 89, 0.3)', 
                    paddingLeft: '12px',
                    whiteSpace: 'pre-wrap'
                  }}>
                    {currentExam.pinyin}
                  </div>
                )}

                {/* Translation Text */}
                {showTranslation && (
                  <div style={{ 
                    fontSize: '13.5px', 
                    lineHeight: '1.6', 
                    color: 'var(--text-muted)', 
                    background: 'rgba(255, 255, 255, 0.01)', 
                    padding: '12px', 
                    borderRadius: '8px', 
                    border: '1px dashed rgba(255,255,255,0.06)',
                    whiteSpace: 'pre-wrap'
                  }}>
                    <div style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      🇻🇳 Bản dịch tiếng Việt
                    </div>
                    {currentExam.translation}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Questions Panel */}
          <div className="col-6 flex-col gap-md">
            <div className="glass-panel panel-lg flex-col gap-md" style={{ maxHeight: '650px', overflowY: 'auto' }}>
              <div className="flex-between">
                <h3 style={{ fontSize: '16px' }}>Câu hỏi đọc hiểu</h3>
                {submitted && <span className="badge badge-success"><Award size={13} /> {score}/100</span>}
              </div>

              {currentExam.questions.map((question, qIdx) => {
                const selected = answers[question.id];
                const reveal = submitted;
                return (
                  <div key={question.id} className="inner-card exam-question-card" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '14px' }}>
                    <p className="font-semibold" style={{ fontSize: '13.5px', marginBottom: '10px' }}>
                      {qIdx + 1}. {question.question}
                    </p>
                    <div className="flex-col gap-xs" role="radiogroup">
                      {question.options.map((option, optIdx) => {
                        const isSelected = selected === optIdx;
                        const isCorrect = question.correct === optIdx;
                        const showCorrect = reveal && isCorrect;
                        const showWrong = reveal && isSelected && !isCorrect;

                        let btnClass = 'exam-option';
                        if (isSelected) btnClass += ' selected';
                        if (showCorrect) btnClass += ' correct';
                        if (showWrong) btnClass += ' wrong';

                        return (
                          <button
                            key={option}
                            className={btnClass}
                            onClick={() => selectAnswer(question.id, optIdx)}
                            disabled={submitted}
                            style={{ padding: '8px 12px', fontSize: '12.5px' }}
                          >
                            <span>{option}</span>
                            {showCorrect && <Check size={14} className="text-success" />}
                            {showWrong && <X size={14} className="text-accent" />}
                          </button>
                        );
                      })}
                    </div>

                    {reveal && selected !== undefined && (
                      <div className="listening-analysis" style={{ marginTop: '10px', background: 'rgba(255,255,255,0.02)', padding: '10px', borderRadius: '6px', fontSize: '12px', lineHeight: '1.5' }}>
                        <p style={{ margin: 0 }}><strong>Giải thích đáp án:</strong> {question.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="flex-between" style={{ marginTop: '10px' }}>
                {submitted ? (
                  <button className="btn btn-secondary btn-sm" onClick={reset}><RefreshCw size={14} /> Làm lại</button>
                ) : (
                  <button 
                    className="btn btn-primary btn-sm" 
                    onClick={handleSubmitExam}
                    disabled={Object.keys(answers).length < currentExam.questions.length}
                  >
                    Nộp bài
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}