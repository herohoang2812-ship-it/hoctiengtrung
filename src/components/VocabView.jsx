import { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Compass, 
  TrendingUp, 
  User, 
  ChevronLeft,
  ChevronRight, 
  Search,
  BookOpen,
  Volume2,
  Activity,
  Home,
  Leaf,
  CheckCircle,
  Circle,
  Check,
  X,
  Trophy
} from 'lucide-react';
import { VOCAB_CATEGORIES, VOCAB_LIST } from '../data/vocabList';
import { getSrsRecords, isDue, recordAttempt, reviewSrs } from '../utils/learningStore';
import { speak } from '../services/ttsService';

// Helper to render icon dynamically
const CategoryIcon = ({ iconName, size = 18 }) => {
  switch (iconName) {
    case 'GraduationCap':
      return <GraduationCap size={size} />;
    case 'Compass':
      return <Compass size={size} />;
    case 'TrendingUp':
      return <TrendingUp size={size} />;
    case 'User':
      return <User size={size} />;
    case 'Activity':
      return <Activity size={size} />;
    case 'Home':
      return <Home size={size} />;
    case 'Leaf':
      return <Leaf size={size} />;
    default:
      return <Compass size={size} />;
  }
};

export default function VocabView({ showToast, onActivityComplete, userProfile }) {
  const [selectedLevel, setSelectedLevel] = useState(userProfile?.level || 'All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'flashcard' | 'quiz'
  const [vocabIndex, setVocabIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // SRS state
  const [knownWords, setKnownWords] = useState([]);
  const [srsRecords, setSrsRecords] = useState(() => getSrsRecords());
  const [filterMode, setFilterMode] = useState('all'); // 'all' | 'unknown' | 'known' | 'due'

  // Quiz state
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [showQuizFeedback, setShowQuizFeedback] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizUserAnswers, setQuizUserAnswers] = useState([]);

  // Load known words from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('hsk_known_vocab');
    if (saved) {
      setKnownWords(JSON.parse(saved));
    }
  }, []);

  // Filter vocabulary by selected level and category
  const filteredVocab = VOCAB_LIST.filter(v => {
    const levelMatch = selectedLevel === 'All' || v.level === selectedLevel;
    const catMatch = selectedCategory === 'All' || v.category === selectedCategory;
    return levelMatch && catMatch;
  });

  // Apply SRS filter mode
  const srsFilteredVocab = filteredVocab.filter(v => {
    const record = srsRecords[v.zh];
    const isKnown = knownWords.includes(v.zh) || (record?.repetitions || 0) >= 2;
    if (filterMode === 'known') return isKnown;
    if (filterMode === 'unknown') return !isKnown;
    if (filterMode === 'due') return isDue(record);
    return true;
  });

  // Search filter (handles Chinese, Pinyin, or Vietnamese)
  const searchedVocab = srsFilteredVocab.filter(v => 
    v.zh.includes(searchQuery) || 
    v.pinyin.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.vi.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Reset states when category, level or filters change
  useEffect(() => {
    setVocabIndex(0);
    setIsFlipped(false);
  }, [selectedCategory, selectedLevel, filterMode]);

  // Voice synthesis function for vocabulary pronunciation
  const speakWord = (text, e) => {
    if (e) {
      e.stopPropagation(); // Prevent card flipping when clicking pronunciation button
    }
    speak(text);
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setIsFlipped(false);
    if (searchedVocab.length > 0) {
      setVocabIndex((vocabIndex + 1) % searchedVocab.length);
    }
  };

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setIsFlipped(false);
    if (searchedVocab.length > 0) {
      setVocabIndex((vocabIndex - 1 + searchedVocab.length) % searchedVocab.length);
    }
  };

  const handleFlipKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  // Toggle SRS known/unknown word status
  const toggleKnownStatus = (wordZh, e) => {
    if (e) e.stopPropagation();
    let updated;
    const isAlreadyKnown = knownWords.includes(wordZh);
    if (isAlreadyKnown) {
      updated = knownWords.filter(w => w !== wordZh);
      if (showToast) showToast('Đã chuyển từ vào danh sách cần ôn tập!', 'warning');
    } else {
      updated = [...knownWords, wordZh];
      if (showToast) showToast('Đã đánh dấu thuộc từ này!', 'success');
    }
    setKnownWords(updated);
    localStorage.setItem('hsk_known_vocab', JSON.stringify(updated));
  };


  const handleSrsRating = (rating, event) => {
    event?.stopPropagation();
    const updated = reviewSrs(currentWord.zh, rating);
    setSrsRecords(getSrsRecords());
    const dueDate = new Date(updated.due).toLocaleDateString('vi-VN');
    if (showToast) showToast(`Đã lên lịch ôn lại vào ${dueDate}.`, rating === 'again' ? 'warning' : 'success');
    setTimeout(() => handleNext(), 180);
  };

  // Generate Vocab Quiz questions (10 random non-repeating questions from current filter)
  const generateQuiz = () => {
    if (filteredVocab.length < 10) {
      if (showToast) showToast('Cần tối thiểu 10 từ vựng để tạo bài trắc nghiệm!', 'error');
      return;
    }
    
    // Load quizzed history from localStorage to prevent repeats
    let quizzedHistory = [];
    try {
      quizzedHistory = JSON.parse(localStorage.getItem('hsk_vocab_quizzed_history') || '[]');
    } catch (e) {
      quizzedHistory = [];
    }

    // Filter out recently quizzed words
    let pool = filteredVocab.filter(w => !quizzedHistory.includes(w.zh));

    // If pool has less than 10 words, reset history for this specific subset
    if (pool.length < 10) {
      pool = [...filteredVocab];
      const wordSet = new Set(filteredVocab.map(w => w.zh));
      quizzedHistory = quizzedHistory.filter(zh => !wordSet.has(zh));
    }

    // Pick 10 random words from pool
    const selectedWords = [];
    const poolCopy = [...pool];
    for (let i = 0; i < 10 && poolCopy.length > 0; i++) {
      const randomIndex = Math.floor(Math.random() * poolCopy.length);
      selectedWords.push(poolCopy.splice(randomIndex, 1)[0]);
    }

    // Update history in localStorage
    const newHistory = [...quizzedHistory, ...selectedWords.map(w => w.zh)];
    if (newHistory.length > 200) {
      newHistory.splice(0, newHistory.length - 200);
    }
    localStorage.setItem('hsk_vocab_quizzed_history', JSON.stringify(newHistory));

    const questions = selectedWords.map(word => {
      // Pick 3 random wrong options
      const otherWords = filteredVocab.filter(w => w.zh !== word.zh);
      const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random());
      const wrongOptions = shuffledOthers.slice(0, 3).map(w => w.vi);
      
      // Combine correct and wrong options, then shuffle
      const options = [word.vi, ...wrongOptions].sort(() => 0.5 - Math.random());
      const correctIndex = options.indexOf(word.vi);

      return {
        word: word.zh,
        pinyin: word.pinyin,
        type: word.type,
        level: word.level,
        options,
        correct: correctIndex,
        example: word.ex,
        exampleVi: word.exVi
      };
    });

    setQuizQuestions(questions);
    setQuizIndex(0);
    setSelectedQuizOption(null);
    setShowQuizFeedback(false);
    setQuizScore(0);
    setQuizUserAnswers([]);
    setQuizFinished(false);
  };

  // Start quiz on tab change to quiz
  useEffect(() => {
    if (viewMode === 'quiz') {
      generateQuiz();
    }
  }, [viewMode, selectedCategory, selectedLevel]);

  const handleSelectQuizOption = (optionIdx) => {
    if (showQuizFeedback) return;
    setSelectedQuizOption(optionIdx);
    setShowQuizFeedback(true);
    
    // Save selection
    setQuizUserAnswers(prev => {
      const next = [...prev];
      next[quizIndex] = optionIdx;
      return next;
    });

    const currentQ = quizQuestions[quizIndex];
    speakWord(currentQ.word);

    if (optionIdx === currentQ.correct) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuizQuestion = () => {
    if (quizIndex < quizQuestions.length - 1) {
      setQuizIndex(prev => prev + 1);
      setSelectedQuizOption(null);
      setShowQuizFeedback(false);
    } else {
      // Finished quiz
      setQuizFinished(true);
      const finalQuizScore = quizScore;
      if (showToast) {
        showToast('Bạn đã hoàn thành trắc nghiệm từ vựng! Điểm: ' + finalQuizScore + '/10', 'success');
      }
      recordAttempt({ 
        module: 'Từ vựng', 
        part: selectedCategory === 'All' ? 'Tất cả' : selectedCategory, 
        correct: finalQuizScore, 
        total: 10 
      });
      if (onActivityComplete) {
        onActivityComplete();
      }
    }
  };

  const currentWord = searchedVocab[vocabIndex] || { zh: '', pinyin: '', type: 'Từ vựng', vi: '', ex: '', exVi: '' };
  
  // Calculate category stats
  const totalInCategory = filteredVocab.length;
  const knownInCategory = filteredVocab.filter(w => knownWords.includes(w.zh) || (srsRecords[w.zh]?.repetitions || 0) >= 2).length;
  const dueInCategory = filteredVocab.filter(w => isDue(srsRecords[w.zh])).length;
  const percentMastered = totalInCategory > 0 ? Math.round((knownInCategory / totalInCategory) * 100) : 0;

  return (
    <div className="page-section">
      <div className="content-header">
        <div>
          <h1 className="content-title">Từ vựng HSK & Chuyên đề</h1>
          <p className="content-subtitle">Tra cứu và ôn luyện từ vựng tiếng Trung theo chủ đề với hệ thống lặp lại ngắt quãng SRS.</p>
        </div>
      </div>

      {/* Mastery Progress Card */}
      <div className="glass-panel panel anim-fade-in-up" style={{ marginBottom: '24px', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
        <div>
          <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>
            Tiến trình ghi nhớ chuyên đề
          </h3>
          <p className="text-muted" style={{ fontSize: '13px' }}>
            Bạn đã thuộc <strong>{knownInCategory}</strong>/{totalInCategory} từ · <strong>{dueInCategory}</strong> thẻ đến hạn hôm nay.
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '120px', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: `${percentMastered}%`, height: '100%', background: 'var(--success)' }}></div>
          </div>
          <span className="font-semibold text-success" style={{ fontSize: '14px' }}>{percentMastered}% thuộc</span>
        </div>
      </div>

      {/* HSK Level filter pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
        {['All', 'HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6'].map(lvl => (
          <button
            key={lvl}
            className={`badge ${selectedLevel === lvl ? 'badge-primary' : 'badge-secondary'}`}
            onClick={() => {
              setSelectedLevel(lvl);
              setVocabIndex(0);
            }}
            style={{ 
              cursor: 'pointer', 
              border: 'none', 
              padding: '6px 10px', 
              fontSize: '11px',
              fontWeight: selectedLevel === lvl ? '600' : 'normal',
              background: selectedLevel === lvl ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
              color: selectedLevel === lvl ? '#fff' : 'var(--text-muted)'
            }}
          >
            {lvl === 'All' ? 'Tất cả cấp độ HSK' : lvl}
          </button>
        ))}
      </div>

      {/* Control panel: Category selector & View mode selector */}
      <div className="flex-between" style={{ marginBottom: '24px', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
        {/* Category Dropdown Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <label htmlFor="vocab-category-select" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-muted)' }}>Chủ đề:</label>
          <select
            id="vocab-category-select"
            className="form-control"
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setVocabIndex(0);
            }}
            style={{ minWidth: '240px', borderRadius: '12px', background: 'var(--bg-elevated)', border: '1px solid var(--border-color)', color: 'var(--text-main)', padding: '6px 12px' }}
          >
            <option value="All">Tất cả chủ đề</option>
            {VOCAB_CATEGORIES.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </div>

        {/* View Mode Toggle */}
        <div 
          className="btn-group" 
          style={{ 
            display: 'flex', 
            background: 'rgba(255, 255, 255, 0.03)', 
            padding: '4px', 
            borderRadius: '12px', 
            border: '1px solid rgba(255, 255, 255, 0.08)' 
          }}
        >
          <button 
            className={`btn btn-sm ${viewMode === 'list' ? 'btn-primary' : ''}`} 
            onClick={() => setViewMode('list')}
            style={{ borderRadius: '8px', padding: '6px 16px', fontSize: '13px' }}
          >
            Danh sách
          </button>
          <button 
            className={`btn btn-sm ${viewMode === 'flashcard' ? 'btn-primary' : ''}`} 
            onClick={() => setViewMode('flashcard')}
            style={{ borderRadius: '8px', padding: '6px 16px', fontSize: '13px' }}
          >
            Flashcard
          </button>
          <button 
            className={`btn btn-sm ${viewMode === 'quiz' ? 'btn-primary' : ''}`} 
            onClick={() => setViewMode('quiz')}
            style={{ borderRadius: '8px', padding: '6px 16px', fontSize: '13px' }}
          >
            Trắc nghiệm
          </button>
        </div>
      </div>

      {viewMode !== 'quiz' && (
        <div className="dashboard-grid" style={{ marginBottom: '20px', gap: '12px' }}>
          {/* Search Input */}
          <div className="col-8 form-group" style={{ position: 'relative', margin: 0 }}>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Tìm kiếm nhanh từ vựng (Chữ Hán, Pinyin hoặc nghĩa tiếng Việt...)"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVocabIndex(0);
              }}
              style={{ width: '100%', paddingLeft: '40px' }}
            />
            <Search 
              size={18} 
              style={{ 
                position: 'absolute', 
                left: '14px', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                color: 'var(--text-muted)' 
              }} 
            />
          </div>

          {/* SRS Filter Select */}
          <div className="col-4 form-group" style={{ margin: 0 }}>
            <select
              className="form-control"
              value={filterMode}
              onChange={(e) => setFilterMode(e.target.value)}
              aria-label="Lọc theo trạng thái SRS"
            >
              <option value="all">Tất cả từ vựng</option>
              <option value="unknown">Từ chưa thuộc (Cần học)</option>
              <option value="known">Từ đã thuộc (Đã nhớ)</option>
              <option value="due">Đến hạn ôn theo SRS</option>
            </select>
          </div>
        </div>
      )}

      {/* VIEW MODE: QUIZ */}
      {viewMode === 'quiz' && quizQuestions.length > 0 && (
        <div className="flashcard-container anim-fade-in-up" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {!quizFinished ? (
            <>
              <div className="flashcard-progress" style={{ width: '100%', maxWidth: '480px' }}>
                <span>Câu {quizIndex + 1} / 10</span>
                <div className="flashcard-progress-bar">
                  <div 
                    className="flashcard-progress-fill" 
                    style={{ width: `${((quizIndex + 1) / 10) * 100}%`, background: 'var(--secondary)' }}
                  ></div>
                </div>
              </div>

              <div className="glass-panel panel flex-col" style={{ width: '100%', maxWidth: '480px', padding: '24px' }}>
                <div className="flex-between" style={{ marginBottom: '14px', alignItems: 'center' }}>
                  <div className="flex-row gap-sm" style={{ alignItems: 'center' }}>
                    <span className="badge badge-secondary">{quizQuestions[quizIndex].type}</span>
                    <span className="badge badge-primary">{quizQuestions[quizIndex].level}</span>
                  </div>
                  <button 
                    className="btn-text-primary" 
                    onClick={() => speakWord(quizQuestions[quizIndex].word)}
                    title="Đọc từ"
                  >
                    <Volume2 size={18} />
                  </button>
                </div>

                <h2 className="text-center" style={{ fontSize: '32px', fontWeight: 'bold', marginTop: '16px', marginBottom: '2px', color: 'var(--text-main)' }}>
                  {quizQuestions[quizIndex].word}
                </h2>
                <p className="text-center text-primary font-semibold" style={{ fontSize: '15px', marginBottom: '24px' }}>
                  [ {quizQuestions[quizIndex].pinyin} ]
                </p>
                <p className="text-muted text-center" style={{ fontSize: '13px', marginBottom: '24px' }}>
                  Chọn nghĩa tiếng Việt đúng của từ trên:
                </p>

                <div className="flex-col gap-sm">
                  {quizQuestions[quizIndex].options.map((opt, optIdx) => {
                    const isSelected = selectedQuizOption === optIdx;
                    const isCorrect = optIdx === quizQuestions[quizIndex].correct;
                    
                    let optionStyle = {};
                    if (showQuizFeedback) {
                      if (isCorrect) {
                        optionStyle = { background: 'rgba(16, 185, 129, 0.15)', borderColor: 'var(--success)', color: 'var(--success)' };
                      } else if (isSelected) {
                        optionStyle = { background: 'rgba(244, 63, 94, 0.15)', borderColor: 'var(--accent)', color: 'var(--accent)' };
                      } else {
                        optionStyle = { opacity: 0.6 };
                      }
                    } else if (isSelected) {
                      optionStyle = { borderColor: 'var(--primary)', background: 'rgba(139, 92, 246, 0.1)' };
                    }

                    return (
                      <div
                        key={optIdx}
                        className="quiz-option"
                        style={{
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1px solid var(--border-color)',
                          fontSize: '14px',
                          cursor: showQuizFeedback ? 'default' : 'pointer',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          transition: 'all 0.15s ease',
                          ...optionStyle
                        }}
                        role="radio"
                        aria-checked={isSelected}
                        tabIndex={showQuizFeedback ? -1 : 0}
                        onKeyDown={(event) => { if (!showQuizFeedback && (event.key === 'Enter' || event.key === ' ')) handleSelectQuizOption(optIdx); }}
                        onClick={() => handleSelectQuizOption(optIdx)}
                      >
                        <span>{opt}</span>
                        {showQuizFeedback && isCorrect && <Check size={16} className="text-success" />}
                        {showQuizFeedback && isSelected && !isCorrect && <X size={16} className="text-accent" />}
                      </div>
                    );
                  })}
                </div>

                {showQuizFeedback && (
                  <div className="anim-fade-in" style={{ marginTop: '20px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                    {quizQuestions[quizIndex].example && (
                      <>
                        <p className="font-semibold" style={{ fontSize: '13px', color: 'var(--secondary)', marginBottom: '4px' }}>
                          Câu ví dụ:
                        </p>
                        <p style={{ fontSize: '15px', fontWeight: '500', margin: 0 }}>
                          "{quizQuestions[quizIndex].example}"
                        </p>
                        {quizQuestions[quizIndex].exampleVi && (
                          <p className="text-muted" style={{ fontSize: '12.5px', marginTop: '4px', margin: 0 }}>
                            ({quizQuestions[quizIndex].exampleVi})
                          </p>
                        )}
                      </>
                    )}

                    <div className="flex-between" style={{ marginTop: '20px', alignItems: 'center' }}>
                      <div style={{ fontSize: '13.5px', fontWeight: '600', color: selectedQuizOption === quizQuestions[quizIndex].correct ? 'var(--success)' : 'var(--accent)' }}>
                        {selectedQuizOption === quizQuestions[quizIndex].correct ? 'Chính xác! 🎉' : 'Chưa đúng! 😢'}
                      </div>
                      <button className="btn btn-primary btn-sm flex-row gap-xs" onClick={handleNextQuizQuestion}>
                        {quizIndex < 9 ? 'Câu tiếp theo' : 'Xem kết quả'}
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="glass-panel panel flex-col" style={{ width: '100%', maxWidth: '520px', padding: '30px' }}>
              <div className="text-center" style={{ marginBottom: '20px' }}>
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  borderRadius: '50%', 
                  background: quizScore >= 8 ? 'rgba(16,185,129,0.1)' : quizScore >= 5 ? 'rgba(245,158,11,0.1)' : 'rgba(244,63,94,0.1)', 
                  color: quizScore >= 8 ? 'var(--success)' : quizScore >= 5 ? 'var(--warning)' : 'var(--accent)',
                  display: 'grid', 
                  placeItems: 'center', 
                  margin: '0 auto 16px auto' 
                }}>
                  <Trophy size={36} />
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>Kết quả trắc nghiệm</h2>
                <p className="text-muted" style={{ fontSize: '13px', marginBottom: '8px' }}>
                  {selectedCategory === 'All' ? 'Tất cả chủ đề' : selectedCategory} · {selectedLevel}
                </p>
                <div style={{ fontSize: '36px', fontWeight: '800', color: 'var(--primary)', margin: '14px 0' }}>
                  {quizScore}<span style={{ fontSize: '18px', color: 'var(--text-muted)', fontWeight: '500' }}>/10</span>
                </div>
                <p className="font-semibold" style={{ fontSize: '15px', color: 'var(--text-main)' }}>
                  {quizScore === 10 ? 'Tuyệt vời! Bạn đã trả lời đúng tất cả các câu hỏi. 🏆' :
                   quizScore >= 8 ? 'Rất tốt! Bạn có trí nhớ từ vựng rất tuyệt vời. 🌟' :
                   quizScore >= 5 ? 'Khá tốt! Hãy ôn tập lại các từ chưa đúng để nhớ lâu hơn nhé. 👍' :
                   'Cố gắng lên nhé! Luyện tập nhiều hơn sẽ giúp bạn cải thiện. 💪'}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: 'var(--text-main)' }}>Chi tiết bài làm:</h3>
                <div style={{ maxHeight: '220px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', paddingRight: '4px' }}>
                  {quizQuestions.map((q, idx) => {
                    const userAnsIdx = quizUserAnswers[idx];
                    const isCorrect = userAnsIdx === q.correct;
                    return (
                      <div key={idx} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        padding: '10px 12px',
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        fontSize: '13px'
                      }}>
                        <div>
                          <strong style={{ color: 'var(--text-main)' }}>{q.word}</strong> 
                          <span style={{ color: 'var(--text-muted)', marginLeft: '6px' }}>[{q.pinyin}]</span>
                          <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', marginTop: '2px' }}>
                            Nghĩa đúng: {q.options[q.correct]}
                          </div>
                          {!isCorrect && userAnsIdx !== undefined && (
                            <div style={{ fontSize: '11px', color: 'var(--accent)', marginTop: '1px' }}>
                              Bạn chọn: {q.options[userAnsIdx]}
                            </div>
                          )}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          {isCorrect ? (
                            <span className="badge badge-success" style={{ fontSize: '10px', padding: '2px 6px' }}>Đúng</span>
                          ) : (
                            <span className="badge badge-secondary" style={{ fontSize: '10px', padding: '2px 6px', background: 'var(--accent-soft)', color: 'var(--accent)' }}>Sai</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button className="btn btn-secondary" style={{ flex: 1, padding: '10px', borderRadius: '8px' }} onClick={() => { setViewMode('list'); setQuizFinished(false); }}>
                  Quay lại danh sách
                </button>
                <button className="btn btn-primary" style={{ flex: 1, padding: '10px', borderRadius: '8px' }} onClick={generateQuiz}>
                  Làm đề mới
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {viewMode !== 'quiz' && searchedVocab.length > 0 ? (
        <>
          {/* VIEW MODE: FLASHCARD */}
          {viewMode === 'flashcard' && (
            <div className="flashcard-container">
              <div className="flashcard-progress" style={{ width: '100%', maxWidth: '780px' }}>
                <span>{vocabIndex + 1} / {searchedVocab.length}</span>
                <div className="flashcard-progress-bar">
                  <div 
                    className="flashcard-progress-fill" 
                    style={{ width: `${((vocabIndex + 1) / searchedVocab.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* 3-Card Deck Carousel */}
              <div className="flashcard-deck">
                {/* 1. PREVIOUS SIBLING CARD */}
                {searchedVocab.length > 1 && (
                  <div 
                    className="flashcard-sibling prev-card" 
                    onClick={handlePrev}
                    title="Từ trước đó"
                  >
                    <span className="badge badge-secondary" style={{ fontSize: '9px', marginBottom: '8px' }}>
                      {searchedVocab[(vocabIndex - 1 + searchedVocab.length) % searchedVocab.length].type}
                    </span>
                    <div className="flashcard-sibling-word" style={{ fontSize: '20px' }}>
                      {searchedVocab[(vocabIndex - 1 + searchedVocab.length) % searchedVocab.length].zh}
                    </div>
                    <span className="text-muted" style={{ fontSize: '11px', marginTop: '10px', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <ChevronLeft size={12} />
                      Lùi lại
                    </span>
                  </div>
                )}

                {/* 2. ACTIVE CENTER CARD */}
                <div style={{ position: 'relative', width: '100%', maxWidth: '440px' }}>
                  <div 
                    className={`glass-panel glass-card-accent flashcard ${isFlipped ? 'flipped' : ''}`}
                    onClick={() => setIsFlipped(!isFlipped)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Thẻ từ vựng: ${currentWord.zh}. Nhấn để lật thẻ.`}
                    onKeyDown={handleFlipKeyDown}
                    style={{ minHeight: '260px' }}
                  >
                    <div className="flex-between" style={{ width: '100%', position: 'absolute', top: '16px', left: '0', padding: '0 20px', pointerEvents: 'none' }}>
                      <div style={{ display: 'flex', gap: '8px', pointerEvents: 'auto', alignItems: 'center' }}>
                        <span className="badge badge-secondary flashcard-type">{currentWord.type}</span>
                        <span className="badge badge-primary flashcard-type">{currentWord.level}</span>
                        <button
                          className="btn-text-primary"
                          onClick={(e) => toggleKnownStatus(currentWord.zh, e)}
                          title={knownWords.includes(currentWord.zh) ? "Đánh dấu chưa thuộc" : "Đánh dấu đã thuộc"}
                          style={{ display: 'inline-flex', padding: 0, border: 'none', background: 'none', cursor: 'pointer' }}
                        >
                          {knownWords.includes(currentWord.zh) ? (
                            <CheckCircle size={18} className="text-success" />
                          ) : (
                            <Circle size={18} className="text-muted" />
                          )}
                        </button>
                      </div>

                      <button 
                        className="btn-text-primary" 
                        onClick={(e) => speakWord(currentWord.zh, e)} 
                        title="Phát âm từ vựng"
                        style={{ 
                          pointerEvents: 'auto',
                          display: 'inline-flex', 
                          padding: '6px', 
                          borderRadius: '50%',
                          background: 'var(--bg-elevated)',
                          border: '1px solid var(--border-color)', 
                          cursor: 'pointer', 
                          color: 'var(--text-main)' 
                        }}
                      >
                        <Volume2 size={16} className="hover-pulse" />
                      </button>
                    </div>
                    
                    <h2 className="flashcard-word" style={{ marginTop: '24px', fontSize: '32px' }}>
                      {currentWord.zh}
                    </h2>

                    {isFlipped ? (
                      <div className="anim-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 10px' }}>
                        <p className="text-primary font-semibold" style={{ fontSize: '15px', marginBottom: '6px' }}>
                          [ {currentWord.pinyin} ]
                        </p>
                        <p className="flashcard-translation" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                          {currentWord.vi}
                        </p>
                        {currentWord.ex && (
                          <div className="flashcard-example-container" style={{ marginTop: '14px' }}>
                            <p className="flashcard-example" style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-main)' }}>
                              Ví dụ: "{currentWord.ex}"
                            </p>
                            {currentWord.exVi && (
                              <p className="flashcard-example-translation" style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                                ({currentWord.exVi})
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="flashcard-hint">Nhấn vào thẻ để xem phiên âm, nghĩa và ví dụ</p>
                    )}
                  </div>
                  {isFlipped && (
                    <div className="srs-rating-row" onClick={(event) => event.stopPropagation()}>
                      <button onClick={(event) => handleSrsRating('again', event)} className="srs-again">Lại · 1 ngày</button>
                      <button onClick={(event) => handleSrsRating('hard', event)}>Khó</button>
                      <button onClick={(event) => handleSrsRating('good', event)} className="srs-good">Tốt</button>
                      <button onClick={(event) => handleSrsRating('easy', event)} className="srs-easy">Dễ</button>
                    </div>
                  )}
                </div>

                {/* 3. NEXT SIBLING CARD */}
                {searchedVocab.length > 2 && (
                  <div 
                    className="flashcard-sibling next-card" 
                    onClick={handleNext}
                    title="Từ tiếp theo"
                  >
                    <span className="badge badge-secondary" style={{ fontSize: '9px', marginBottom: '8px' }}>
                      {searchedVocab[(vocabIndex + 1) % searchedVocab.length].type}
                    </span>
                    <div className="flashcard-sibling-word" style={{ fontSize: '20px' }}>
                      {searchedVocab[(vocabIndex + 1) % searchedVocab.length].zh}
                    </div>
                    <span className="text-muted" style={{ fontSize: '11px', marginTop: '10px', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      Kế tiếp
                      <ChevronRight size={12} />
                    </span>
                  </div>
                )}
              </div>

              <div className="flashcard-actions" style={{ marginTop: '10px' }}>
                <button 
                  className="btn btn-secondary"
                  onClick={handlePrev}
                  aria-label="Từ trước đó"
                >
                  <ChevronLeft size={16} />
                  Từ trước đó
                </button>

                <button 
                  className="btn btn-primary"
                  onClick={handleNext}
                  aria-label="Từ tiếp theo"
                >
                  Tiếp theo
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* VIEW MODE: LIST VIEW */}
          {viewMode === 'list' && (
            <div 
              className="vocab-list-view" 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '14px', 
                maxHeight: '620px', 
                overflowY: 'auto', 
                paddingRight: '8px'
              }}
            >
              {searchedVocab.map((word, idx) => {
                const isKnown = knownWords.includes(word.zh);
                return (
                  <div 
                    key={idx} 
                    className="glass-panel inner-card anim-fade-in-up" 
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      padding: '18px', 
                      gap: '10px',
                      animationDelay: `${Math.min(idx * 0.03, 0.5)}s`,
                      borderLeft: isKnown ? '3px solid var(--success)' : '3px solid var(--border-color)'
                    }}
                  >
                    <div className="flex-between" style={{ flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                      <div className="flex-row gap-sm" style={{ alignItems: 'center' }}>
                        <button
                          className="btn-text-primary"
                          onClick={(e) => toggleKnownStatus(word.zh, e)}
                          title={isKnown ? "Đánh dấu chưa thuộc" : "Đánh dấu đã thuộc"}
                          style={{ display: 'inline-flex', padding: 0, border: 'none', background: 'none', cursor: 'pointer' }}
                        >
                          {isKnown ? (
                            <CheckCircle size={18} className="text-success" />
                          ) : (
                            <Circle size={18} className="text-muted" />
                          )}
                        </button>

                        <span style={{ fontSize: '20px', fontWeight: '600', color: 'var(--text-main)' }}>{word.zh}</span>
                        <span style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginLeft: '4px' }}>[{word.pinyin}]</span>
                        <span className="badge badge-secondary" style={{ fontSize: '11px', padding: '2px 8px', marginLeft: '6px' }}>{word.type}</span>
                        <span className="badge badge-primary" style={{ fontSize: '11px', padding: '2px 8px', marginLeft: '6px' }}>{word.level}</span>
                        <button 
                          className="btn-text-primary" 
                          onClick={() => speakWord(word.zh)} 
                          title="Đọc phát âm"
                          style={{ 
                            display: 'inline-flex', 
                            padding: '4px', 
                            borderRadius: '50%',
                            background: 'var(--bg-elevated)',
                            border: 'none', 
                            cursor: 'pointer', 
                            color: 'var(--text-muted)',
                            marginLeft: '4px'
                          }}
                        >
                          <Volume2 size={14} className="hover-pulse" />
                        </button>
                      </div>
                      <span style={{ fontSize: '15px', fontWeight: '500', color: '#a78bfa' }}>{word.vi}</span>
                    </div>
                    
                    {word.ex && (
                      <div 
                        style={{ 
                          fontSize: '13px', 
                          borderTop: '1px solid var(--border-color)', 
                          paddingTop: '10px',
                          lineHeight: '1.5'
                        }}
                      >
                        <p className="text-muted" style={{ fontSize: '13.5px', fontWeight: '500', color: 'var(--text-main)', marginBottom: '4px' }}>
                          <strong>Bối cảnh:</strong> "{word.ex}"
                        </p>
                        {word.exVi && (
                          <p className="text-muted">
                            ({word.exVi})
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </>
      ) : (
        viewMode !== 'quiz' && (
          <div className="glass-panel panel text-center anim-fade-in-up" style={{ padding: '40px' }}>
            <BookOpen size={36} className="text-muted" style={{ marginBottom: '12px', opacity: 0.5 }} />
            <p className="text-muted">Không tìm thấy từ vựng nào khớp với bộ lọc của bạn.</p>
          </div>
        )
      )}
    </div>
  );
}
