import { useEffect, useState } from 'react';
import { Award, BookOpen, Check, Clock, Headphones, RefreshCw, X } from 'lucide-react';
import { HOREN_EXAMS } from '../data/horenExams';
import { recordAttempt } from '../utils/learningStore';
import { speak, stop } from '../services/ttsService';

const HSK_LEVELS = ['Tất cả', 'HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6'];

export default function HorenView({ showToast, onActivityComplete }) {
  const [selectedLevel, setSelectedLevel] = useState('Tất cả');
  const [selectedExamId, setSelectedExamId] = useState(1);
  const [answers, setAnswers] = useState({});
  const [plays, setPlays] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [mode, setMode] = useState('learn'); // 'exam' | 'learn'
  const [speechRate, setSpeechRate] = useState(0.9);
  const [showTranscript, setShowTranscript] = useState(true);

  // Filter exams based on HSK level selection
  const filteredExams = HOREN_EXAMS.filter(exam => {
    if (selectedLevel === 'Tất cả') return true;
    return exam.level === selectedLevel;
  });

  // Current selected exam object
  const currentExam = HOREN_EXAMS.find(e => e.id === selectedExamId) || HOREN_EXAMS[0];
  const learningMode = mode === 'learn';

  const stopAudio = () => {
    stop();
    setIsPlaying(false);
  };

  useEffect(() => {
    return () => {
      stop();
    };
  }, []);

  // Auto-switch selectedExamId to the first item of the new level when filter changes
  useEffect(() => {
    if (filteredExams.length > 0) {
      const exists = filteredExams.some(e => e.id === selectedExamId);
      if (!exists) {
        stopAudio();
        setSelectedExamId(filteredExams[0].id);
        setAnswers({});
        setSubmitted(false);
        setScore(0);
      }
    }
  }, [selectedLevel, filteredExams, selectedExamId]);

  const handlePlayAudio = () => {
    const used = plays[currentExam.id] || 0;
    if (!learningMode && used >= 2) {
      return showToast?.('Bạn đã dùng hết 2 lượt nghe cho phần thi này.', 'warning');
    }

    stop();
    if (!learningMode) {
      setPlays(prev => ({ ...prev, [currentExam.id]: used + 1 }));
    }
    setIsPlaying(true);

    speak(currentExam.audioText, {
      rate: learningMode ? speechRate : 0.95,
      onEnd: () => {
        setIsPlaying(false);
      }
    });
  };

  const selectAnswer = (questionId, optionIndex) => {
    if (submitted && !learningMode) return;
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmitExam = () => {
    if (submitted) return;
    stopAudio();
    
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
          skillTag: 'horen-detail',
          category: 'VOCABULARY'
        });
      }
    });

    const percent = Math.round((correct / currentExam.questions.length) * 100);
    setScore(percent);
    setSubmitted(true);
    
    recordAttempt({
      module: 'Hören',
      part: currentExam.title,
      correct,
      total: currentExam.questions.length,
      errors
    });

    if (onActivityComplete) {
      onActivityComplete();
    }

    showToast?.(`Đã nộp bài luyện nghe: Đúng ${correct}/${currentExam.questions.length} câu (${percent}%)`, percent >= 60 ? 'success' : 'warning');
  };

  const handleTopicChange = (id) => {
    stopAudio();
    setSelectedExamId(id);
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  const reset = () => {
    stopAudio();
    setAnswers({});
    setPlays({});
    setSubmitted(false);
    setScore(0);
  };

  function switchMode(newMode) {
    stopAudio();
    setMode(newMode);
    if (newMode === 'learn') {
      setShowTranscript(true);
    }
  }

  return (
    <div className="page-section">
      <div className="content-header">
        <div>
          <h1 className="content-title">Luyện Nghe HSK</h1>
          <p className="content-subtitle">Luyện tập nghe hiểu tiếng Trung với hội thoại chân thực kèm transcript song ngữ và giải thích chi tiết.</p>
        </div>
      </div>

      {/* Mode Switcher */}
      <div className="glass-panel panel listening-mode-bar" style={{ marginBottom: 20 }}>
        <div className="mode-switch" role="tablist" aria-label="Chế độ luyện nghe">
          <button className={`mode-button ${!learningMode ? 'active' : ''}`} onClick={() => { switchMode('exam'); }} style={{ padding: '8px 16px', borderRadius: '8px' }}>
            <Clock size={14} /> Chế độ thi thử (Exam Mode)
          </button>
          <button className={`mode-button ${learningMode ? 'active' : ''}`} onClick={() => { switchMode('learn'); }} style={{ padding: '8px 16px', borderRadius: '8px' }}>
            <BookOpen size={14} /> Chế độ học tập (Learn Mode)
          </button>
        </div>
        <p className="text-muted" style={{ fontSize: '13px', marginTop: '10px' }}>
          {learningMode 
            ? 'Chế độ Học tập: Nghe không giới hạn, hỗ trợ chỉnh tốc độ và xem văn bản hội thoại.' 
            : 'Chế độ Thi thử: Mỗi bài nghe tối đa 2 lần, ẩn văn bản hội thoại cho đến khi nộp bài.'}
        </p>
      </div>

      <div className="dashboard-grid">
        {/* Left Column: Exam List */}
        <div className="col-4 flex-col gap-sm">
          <div className="glass-panel panel">
            <h3 style={{ fontSize: '15px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Headphones size={16} />
              Đề luyện nghe
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

        {/* Right Column: Audio & Questions */}
        <div className="col-8 dashboard-grid">
          <div className="col-6 flex-col gap-md">
            {/* Audio Controller */}
            <div className="glass-panel panel">
              <span className="badge badge-secondary">
                {learningMode ? 'Lượt nghe: Không giới hạn' : `Đã nghe: ${plays[currentExam.id] || 0}/2 lần`}
              </span>
              <h2 style={{ fontSize: '18px', marginTop: '12px', marginBottom: '8px' }}>{currentExam.title}</h2>
              
              {learningMode && (
                <div className="learning-audio-controls" style={{ display: 'flex', gap: '6px', alignItems: 'center', margin: '12px 0', fontSize: '13px' }}>
                  <span className="text-muted">Tốc độ:</span>
                  {[0.8, 0.95, 1.1].map(rate => (
                    <button 
                      key={rate} 
                      className={`speed-button ${speechRate === rate ? 'active' : ''}`}
                      onClick={() => setSpeechRate(rate)}
                      style={{ padding: '2px 8px', borderRadius: '4px', fontSize: '12px', border: '1px solid var(--border-color)', background: 'transparent', cursor: 'pointer', color: 'var(--text-main)' }}
                    >
                      {rate}x
                    </button>
                  ))}
                </div>
              )}

              <div className="audio-player-card" style={{ marginTop: '14px', padding: '16px', background: 'var(--bg-elevated)', borderRadius: '12px', textAlign: 'center' }}>
                <div className={`audio-visualizer-disc ${isPlaying ? 'disc-spinning' : ''}`} style={{ width: '60px', height: '60px', borderRadius: '50%', border: '4px solid var(--border-color)', background: 'var(--primary-soft)', margin: '0 auto 12px auto' }}></div>
                <p className="font-semibold" style={{ fontSize: '14px' }}>{isPlaying ? 'Đang phát âm thanh...' : 'Sẵn sàng phát'}</p>
                <div className="flex-row gap-md" style={{ justifyContent: 'center', marginTop: '12px' }}>
                  {isPlaying ? (
                    <button className="btn btn-danger btn-sm" onClick={stopAudio}>Dừng</button>
                  ) : (
                    <button 
                      className="btn btn-primary btn-sm" 
                      onClick={handlePlayAudio}
                      disabled={!learningMode && (plays[currentExam.id] || 0) >= 2}
                    >
                      Phát âm thanh
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Transcript Panel */}
            {(learningMode || submitted) && (
              <div className="glass-panel panel" style={{ border: '1px solid var(--border-color)' }}>
                <div className="flex-between" style={{ marginBottom: '12px' }}>
                  <h3 style={{ fontSize: '14px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <BookOpen size={15} />
                    Văn bản hội thoại
                  </h3>
                  {learningMode && (
                    <button 
                      className="btn-text-primary" 
                      onClick={() => setShowTranscript(!showTranscript)} 
                      style={{ 
                        fontSize: '12px', 
                        background: 'transparent', 
                        border: 'none', 
                        cursor: 'pointer',
                        color: 'var(--primary)',
                        fontWeight: '600'
                      }}
                    >
                      {showTranscript ? 'Ẩn' : 'Hiện'}
                    </button>
                  )}
                </div>
                {showTranscript && (
                  <div 
                    className="speaker-transcript" 
                    style={{ 
                      maxHeight: '350px', 
                      overflowY: 'auto', 
                      paddingRight: '6px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px'
                    }}
                  >
                    {currentExam.dialogue && currentExam.dialogue.map((turn, idx) => {
                      const isA = turn.speaker === 'A';
                      return (
                        <div key={idx} style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: isA ? 'flex-start' : 'flex-end',
                          width: '100%'
                        }}>
                          <div style={{
                            fontSize: '10px',
                            fontWeight: '700',
                            color: isA ? 'var(--primary)' : '#10b981',
                            marginBottom: '2px',
                            padding: '0 4px'
                          }}>
                            {isA ? 'Người nói A' : 'Người nói B'}
                          </div>
                          <div style={{
                            maxWidth: '90%',
                            background: isA ? 'rgba(197, 160, 89, 0.08)' : 'rgba(16, 185, 129, 0.08)',
                            border: isA ? '1px solid rgba(197, 160, 89, 0.15)' : '1px solid rgba(16, 185, 129, 0.15)',
                            borderRadius: '12px',
                            padding: '8px 12px',
                            borderTopLeftRadius: isA ? '0' : '12px',
                            borderTopRightRadius: isA ? '12px' : '0',
                          }}>
                            <div style={{ fontSize: '14px', fontWeight: '500', color: '#ffffff', marginBottom: '2px' }}>
                              {turn.cn}
                            </div>
                            <div style={{ fontSize: '12px', color: 'var(--primary)', fontStyle: 'italic', marginBottom: '2px' }}>
                              {turn.py}
                            </div>
                            <div style={{ 
                              fontSize: '12px', 
                              color: 'var(--text-muted)', 
                              borderTop: '1px solid rgba(255,255,255,0.05)', 
                              paddingTop: '3px', 
                              marginTop: '3px' 
                            }}>
                              {turn.vi}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="col-6 flex-col gap-md">
            {/* Questions Panel */}
            <div className="glass-panel panel-lg flex-col gap-md" style={{ maxHeight: '650px', overflowY: 'auto' }}>
              <div className="flex-between">
                <h3 style={{ fontSize: '16px' }}>Câu hỏi trắc nghiệm</h3>
                {submitted && <span className="badge badge-success"><Award size={13} /> {score}/100</span>}
              </div>

              {currentExam.questions.map((question, qIdx) => {
                const selected = answers[question.id];
                const reveal = submitted || learningMode;
                return (
                  <div key={question.id} className="inner-card exam-question-card" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '14px' }}>
                    <p className="font-semibold" style={{ fontSize: '13.5px', marginBottom: '10px' }}>
                      {qIdx + 1}. {question.question}
                    </p>
                    <div className="flex-col gap-xs" role="radiogroup">
                      {question.options.map((option, optIdx) => {
                        const isSelected = selected === optIdx;
                        const isCorrect = question.correct === optIdx;
                        const showCorrect = reveal && selected !== undefined && isCorrect;
                        const showWrong = reveal && selected !== undefined && isSelected && !isCorrect;

                        let btnClass = 'exam-option';
                        if (isSelected) btnClass += ' selected';
                        if (showCorrect) btnClass += ' correct';
                        if (showWrong) btnClass += ' wrong';

                        return (
                          <button
                            key={option}
                            className={btnClass}
                            onClick={() => selectAnswer(question.id, optIdx)}
                            disabled={submitted && !learningMode}
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
                        <p style={{ margin: 0 }}><strong>Giải thích:</strong> {question.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="flex-between" style={{ marginTop: '10px' }}>
                {submitted ? (
                  <button className="btn btn-secondary btn-sm" onClick={reset}>Làm lại</button>
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