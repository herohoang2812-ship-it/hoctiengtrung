import { useState, useEffect } from 'react';
import { 
  Sparkles, 
  TrendingUp, 
  PenTool, 
  Mic, 
  CheckCircle2, 
  Play, 
  AlertCircle, 
  ChevronRight,
  User,
  Settings,
  X,
  ClipboardCheck,
  BookOpen,
  Flame,
  Award,
  Book,
  Bookmark,
  Headphones,
  Trophy,
  Calendar,
  ClipboardList,
  FileText,
  Check,
  Lock,
  ArrowRight
} from 'lucide-react';
import { getDiagnosticResult } from '../utils/diagnosticEngine';
import { updateUserProfileOnDb } from '../services/dbService';
import { DECISION_QUOTES } from '../data/decisionQuotes';

// Chinese traditional cloud decoration icon
const CloudIcon = () => (
  <svg className="cloud-decor" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
    <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-3.64-3.5-3.64-3.5C16.8 9.5 13.8 8 10.5 8c-3.8 0-6.5 2.5-6.5 6.5 0 2.21 1.79 4 4 4" />
    <path d="M12 19h5.5" />
    <path d="M8 19h4" />
  </svg>
);

export default function DashboardView({ setActiveTab, userStreak, userProfile, setUserProfile, currentUser, onAuthClick }) {
  const [stats, setStats] = useState({
    predictedScore: '0/100',
    essaysCount: '0 bài',
    speakingFluency: '0%',
    streak: '0 ngày'
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [diagnostic, setDiagnostic] = useState(() => getDiagnosticResult());
  const [editForm, setEditForm] = useState({
    name: userProfile?.name || 'Nguyễn Văn Minh',
    level: userProfile?.level || 'HSK 1',
    specialty: userProfile?.specialty || 'allgemein'
  });

  const [ttsProvider, setTtsProvider] = useState(() => localStorage.getItem('hsk_tts_provider') || 'google');

  // Dynamic values loaded from localStorage (starting at 0 for new users)
  const [dynamicVocabCount, setDynamicVocabCount] = useState(0);
  const [dynamicGrammarCount, setDynamicGrammarCount] = useState(0);
  const [dynamicWritingCount, setDynamicWritingCount] = useState(0);
  const [dynamicSpeakingCount, setDynamicSpeakingCount] = useState(0);
  const [dynamicListeningCount, setDynamicListeningCount] = useState(0);
  const [progressTrigger, setProgressTrigger] = useState(0);
  const [randomQuote, setRandomQuote] = useState('');

  useEffect(() => {
    const update = () => {
      setDiagnostic(getDiagnosticResult());
      setProgressTrigger(prev => prev + 1);
    };
    window.addEventListener('hsk-progress-updated', update);
    
    // Choose a random quote on mount (runs on reload)
    if (DECISION_QUOTES && DECISION_QUOTES.length > 0) {
      const idx = Math.floor(Math.random() * DECISION_QUOTES.length);
      setRandomQuote(DECISION_QUOTES[idx]);
    }
    
    return () => window.removeEventListener('hsk-progress-updated', update);
  }, []);

  const handleTtsProviderChange = (val) => {
    setTtsProvider(val);
    localStorage.setItem('hsk_tts_provider', val);
  };

  // Map specialty ID to display name in Vietnamese
  const getSpecialtyName = (id) => {
    const map = {
      allgemein: 'Giao tiếp đời sống (Life)',
      business: 'Thương mại (Business)',
      tourism: 'Du lịch (Tourism)',
      it: 'Công nghệ & IT (IT)',
      medical: 'Y tế & Bệnh viện (Medical)'
    };
    return map[id] || id;
  };

  // Target values based on selected level
  const getTargetVocabCount = (level) => {
    const map = {
      'HSK 1': 150,
      'HSK 2': 300,
      'HSK 3': 600,
      'HSK 4': 1200,
      'HSK 5': 2500,
      'HSK 6': 5000
    };
    return map[level] || 150;
  };

  const getTargetGrammarCount = (level) => {
    const map = {
      'HSK 1': 10,
      'HSK 2': 12,
      'HSK 3': 15,
      'HSK 4': 20,
      'HSK 5': 25,
      'HSK 6': 30
    };
    return map[level] || 10;
  };

  useEffect(() => {
    // Load attempts history
    const attemptsRaw = localStorage.getItem('hsk_learning_attempts_v2');
    const attempts = attemptsRaw ? JSON.parse(attemptsRaw) : [];

    // 1. Calculate dynamic writing count
    const uniqueWriting = new Set(attempts.filter(a => a.module === 'Schreiben').map(a => a.part));
    const writingHistoryRaw = localStorage.getItem('hsk_schreiben_history');
    const writingHistory = writingHistoryRaw ? JSON.parse(writingHistoryRaw) : [];
    const writingCount = Math.max(uniqueWriting.size, writingHistory.length);
    setDynamicWritingCount(writingCount);
    
    // 2. Calculate dynamic speaking count
    const uniqueSpeaking = new Set(attempts.filter(a => a.module === 'Sprechen' || a.module === 'HSK Language Lab').map(a => a.part));
    const speakingHistoryRaw = localStorage.getItem('hsk_sprechen_history');
    const speakingHistory = speakingHistoryRaw ? JSON.parse(speakingHistoryRaw) : [];
    const speakingCount = Math.max(uniqueSpeaking.size, speakingHistory.length);
    setDynamicSpeakingCount(speakingCount);

    // 3. Calculate dynamic grammar count
    const uniqueGrammar = new Set(attempts.filter(a => a.module === 'Ngữ pháp' && a.score >= 60).map(a => a.part));
    setDynamicGrammarCount(uniqueGrammar.size);

    // 4. Calculate dynamic listening count
    const uniqueListening = new Set(attempts.filter(a => a.module === 'Hören' && a.score >= 60).map(a => a.part));
    setDynamicListeningCount(uniqueListening.size);

    // Calculate dynamic vocab count from known words list and SRS database
    let vocabCount = 0;
    const knownVocabRaw = localStorage.getItem('hsk_known_vocab');
    if (knownVocabRaw) {
      try {
        const known = JSON.parse(knownVocabRaw);
        if (Array.isArray(known)) {
          vocabCount = known.length;
        }
      } catch (e) {}
    }

    const vocabRaw = localStorage.getItem('hsk_vocab_srs');
    if (vocabRaw) {
      try {
        const srs = JSON.parse(vocabRaw);
        if (srs && srs.learnedWordsCount && srs.learnedWordsCount > vocabCount) {
          vocabCount = srs.learnedWordsCount;
        }
      } catch (e) {}
    }
    setDynamicVocabCount(vocabCount);

    // Calculate average writing score
    let avgWriting = 0;
    if (writingHistory.length > 0) {
      const sum = writingHistory.reduce((acc, curr) => acc + Number(curr.result?.score ?? curr.score ?? 0), 0);
      avgWriting = sum / writingHistory.length;
    }

    // Calculate average speaking score and fluency
    let avgSpeaking = 0;
    let avgFluency = 0;
    if (speakingHistory.length > 0) {
      const sumSpeaking = speakingHistory.reduce((acc, curr) => {
        const itemAvg = (curr.fluency + curr.grammar + curr.vocabulary) / 3;
        return acc + itemAvg;
      }, 0);
      avgSpeaking = sumSpeaking / speakingHistory.length;

      const sumFluency = speakingHistory.reduce((acc, curr) => acc + curr.fluency, 0);
      avgFluency = sumFluency / speakingHistory.length;
    }

    // Calculate overall predicted score
    let predicted = 0;
    if (avgWriting > 0 && avgSpeaking > 0) {
      predicted = Math.round((avgWriting + avgSpeaking) / 2);
    } else if (avgWriting > 0) {
      predicted = Math.round(avgWriting);
    } else if (avgSpeaking > 0) {
      predicted = Math.round(avgSpeaking);
    }

    setStats({
      predictedScore: diagnostic ? `${diagnostic.overall}/100` : predicted > 0 ? `${predicted}/100` : '0/100',
      essaysCount: `${writingHistory.length} bài`,
      speakingFluency: avgFluency > 0 ? `${Math.round(avgFluency)}%` : '0%', 
      streak: `${userStreak || 0} ngày`
    });
  }, [userStreak, diagnostic, progressTrigger]);

  const handleOpenModal = () => {
    setEditForm({
      name: userProfile.name,
      level: userProfile.level,
      specialty: userProfile.specialty
    });
    setIsEditModalOpen(true);
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    if (!editForm.name.trim()) {
      alert('Vui lòng điền tên hợp lệ!');
      return;
    }
    const updatedProfile = { 
      ...userProfile,
      name: editForm.name,
      level: editForm.level,
      specialty: editForm.specialty
    };
    setUserProfile(updatedProfile);
    localStorage.setItem('hsk_user_profile', JSON.stringify(updatedProfile));
    
    if (currentUser) {
      try {
        await updateUserProfileOnDb(currentUser.uid, {
          name: editForm.name,
          level: editForm.level,
          specialty: editForm.specialty
        });
      } catch (err) {
        console.error('[DashboardView] Lỗi cập nhật hồ sơ trên Firestore:', err);
      }
    }
    setIsEditModalOpen(false);
  };

  // Convert diagnostic overall to 1000 point HSK scale prediction
  const getPredictedHskScore = () => {
    if (diagnostic && diagnostic.overall) {
      return Math.round(diagnostic.overall * 7.5 + 150); // scales to HSK score range
    }
    return 0; // starts at 0 for new users
  };

  // Define dynamic steps based on user progress and HSK level
  const vocabTarget = getTargetVocabCount(userProfile.level);
  const grammarTarget = getTargetGrammarCount(userProfile.level);

  const step1Status = dynamicVocabCount >= vocabTarget ? 'completed' : 'active';
  const step2Status = step1Status === 'completed' ? (dynamicGrammarCount >= grammarTarget ? 'completed' : 'active') : 'locked';
  const step3Status = step2Status === 'completed' ? (dynamicWritingCount >= 10 ? 'completed' : 'active') : 'locked';
  const step4Status = step2Status === 'completed' ? (dynamicListeningCount >= 10 ? 'completed' : 'active') : 'locked'; // Wait, let step 4 also depend on grammar completion
  const step5Status = (step3Status === 'completed' && step4Status === 'completed') ? 'active' : 'locked';

  return (
    <div className="page-section">
      <div className="dashboard-redesign-container">
        
        {/* =========================================================
            LEFT COLUMN (75% Wide on Desktop)
            ========================================================= */}
        <div className="dashboard-left-panel">
          
          {/* Mockup Header Row */}
          <div className="mockup-header-container">
            <div>
              <div className="mockup-welcome-text">
                Nǐ hǎo! 👋 Chào mừng bạn trở lại ✨
              </div>
              <h1 className="mockup-main-title">
                Trung tâm học <span className="red-highlight">tiếng Trung HSK</span>
                <span className="hsk-badge-pill">{userProfile.level || 'HSK 1'}</span>
              </h1>
              <p className="mockup-sub-title">
                Học 汉语 mỗi ngày – Giao tiếp tự tin, chinh phục HSK 🌟
              </p>
            </div>
            
            <div className="mockup-header-right-buttons">
              <button 
                className="btn btn-secondary flex-row gap-xs" 
                onClick={handleOpenModal}
                style={{ borderRadius: '12px', padding: '9px 16px', fontSize: '13px', border: '1px solid rgba(197, 160, 89, 0.4)', background: 'rgba(0,0,0,0.2)' }}
              >
                <Settings size={14} className="text-primary" />
                <span style={{ color: 'var(--primary)' }}>Hồ sơ của tôi</span>
              </button>
              
              <button 
                className="btn btn-primary flex-row gap-xs" 
                onClick={() => setActiveTab('progress')}
                style={{ 
                  borderRadius: '12px', 
                  padding: '9px 16px', 
                  fontSize: '13px',
                  background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.25)',
                  border: '0'
                }}
              >
                <TrendingUp size={14} style={{ color: '#ffffff' }} />
                <span style={{ color: '#ffffff', fontWeight: '600' }}>Phân tích Chi tiết</span>
              </button>
            </div>
          </div>

          {/* Stats Cards Row (4 cards) */}
          <div className="stats-grid-mockup">
            {/* Card 1: TỪ ĐÃ HỌC */}
            <div className="premium-panel stat-card-mockup hover-effect">
              <div className="stat-card-icon-container">
                <BookOpen size={20} className="text-primary" />
              </div>
              <div className="stat-card-content">
                <div className="stat-card-title-lbl">TỪ ĐÃ HỌC</div>
                <div className="stat-card-val-text">
                  {dynamicVocabCount.toLocaleString('vi-VN')} từ
                </div>
                <div className="stat-card-trend up">
                  {dynamicVocabCount > 0 && <TrendingUp size={12} />}
                  <span>{dynamicVocabCount > 0 ? '↑ 128 từ tuần này' : 'Chưa học từ mới'}</span>
                </div>
              </div>
            </div>

            {/* Card 2: ĐIỂM HSK DỰ PHỎNG */}
            <div className="premium-panel stat-card-mockup hover-effect">
              <div className="stat-card-icon-container">
                <Award size={20} className="text-primary" />
              </div>
              <div className="stat-card-content">
                <div className="stat-card-title-lbl">ĐIỂM HSK DỰ PHỎNG</div>
                <div className="stat-card-val-text">
                  {getPredictedHskScore()} / 1000
                </div>
                <div className="stat-card-trend up">
                  {diagnostic && <TrendingUp size={12} />}
                  <span>{diagnostic ? '↑ 52 điểm so với tuần trước' : 'Chưa làm chẩn đoán'}</span>
                </div>
                <div className="stat-card-progress-bar">
                  <div className="stat-card-progress-fill" style={{ width: `${(getPredictedHskScore()/1000)*100}%`, background: '#10b981' }}></div>
                </div>
              </div>
            </div>

            {/* Card 3: PHÁT ÂM */}
            <div className="premium-panel stat-card-mockup hover-effect">
              <div className="stat-card-icon-container">
                <Mic size={20} className="text-primary" />
              </div>
              <div className="stat-card-content">
                <div className="stat-card-title-lbl">PHÁT ÂM</div>
                <div className="stat-card-val-text">
                  {stats.speakingFluency}
                </div>
                <div className="stat-card-trend neutral" style={{ color: 'var(--primary)' }}>
                  <span>{stats.speakingFluency === '0%' ? 'Chưa luyện nói' : 'Phát âm khá tốt'}</span>
                </div>
                <div className="stat-card-progress-bar">
                  <div className="stat-card-progress-fill" style={{ width: stats.speakingFluency, background: '#c5a059' }}></div>
                </div>
              </div>
            </div>

            {/* Card 4: CHUỖI HỌC TẬP */}
            <div className="premium-panel stat-card-mockup hover-effect">
              <div className="stat-card-icon-container">
                <Flame size={20} className="text-primary" />
              </div>
              <div className="stat-card-content">
                <div className="stat-card-title-lbl">CHUỖI HỌC TẬP</div>
                <div className="stat-card-val-text">
                  {userStreak || 0} ngày
                </div>
                <div className="stat-card-trend down" style={{ color: (userStreak || 0) > 0 ? '#ef4444' : 'var(--text-muted)' }}>
                  <span>{(userStreak || 0) > 0 ? 'Giữ vững phong độ!' : 'Bắt đầu học ngay!'}</span>
                </div>
                <div className="stat-card-progress-bar">
                  <div className="stat-card-progress-fill" style={{ width: `${Math.min(100, ((userStreak || 0) / 30) * 100)}%`, background: '#ef4444' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* HSK Roadmap Panel */}
          <div className="premium-panel roadmap-section-mockup">
            <div className="roadmap-header-row">
              <CloudIcon />
              <h3>LỘ TRÌNH HỌC {userProfile.level || 'HSK 1'} CỦA BẠN</h3>
            </div>

            <div className="roadmap-timeline-mockup">
              {/* Step 1: Từ vựng */}
              <div className={`roadmap-card-mockup ${step1Status}`}>
                <div className="roadmap-step-badge">1</div>
                <BookOpen className="roadmap-step-icon" size={18} />
                <div className="roadmap-step-title">Từ vựng</div>
                <div className="roadmap-step-sub">chủ đề {userProfile.level || 'HSK 1'}</div>
                <div className="roadmap-step-prog-bar">
                  <div className="roadmap-step-prog-fill" style={{ width: `${Math.min(100, Math.round((dynamicVocabCount / vocabTarget) * 100))}%`, background: step1Status === 'completed' ? '#10b981' : 'var(--primary)' }}></div>
                </div>
                <div style={{ fontSize: '11px', color: step1Status === 'completed' ? '#10b981' : 'var(--primary)', marginTop: '6px', fontWeight: '600' }}>
                  {dynamicVocabCount} / {vocabTarget} từ
                </div>
              </div>

              <div className="roadmap-step-connector-line">•••</div>

              {/* Step 2: Ngữ pháp */}
              <div className={`roadmap-card-mockup ${step2Status}`}>
                <div className="roadmap-step-badge">2</div>
                <Bookmark className="roadmap-step-icon" size={18} />
                <div className="roadmap-step-title">Ngữ pháp</div>
                <div className="roadmap-step-sub">{userProfile.level || 'HSK 1'}</div>
                <div className="roadmap-step-prog-bar">
                  <div className="roadmap-step-prog-fill" style={{ width: `${Math.min(100, Math.round((dynamicGrammarCount / grammarTarget) * 100))}%`, background: step2Status === 'completed' ? '#10b981' : 'var(--primary)' }}></div>
                </div>
                <div style={{ fontSize: '11px', color: step2Status === 'completed' ? '#10b981' : step2Status === 'active' ? 'var(--primary)' : '#9ca3af', marginTop: '6px', fontWeight: '600' }}>
                  {dynamicGrammarCount} / {grammarTarget} bài
                </div>
              </div>

              <div className="roadmap-step-connector-line">•••</div>

              {/* Step 3: Luyện viết */}
              <div className={`roadmap-card-mockup ${step3Status}`}>
                <div className="roadmap-step-badge">3</div>
                <PenTool className="roadmap-step-icon" size={18} />
                <div className="roadmap-step-title">Luyện viết</div>
                <div className="roadmap-step-sub">đoạn văn</div>
                <div className="roadmap-step-prog-bar">
                  <div className="roadmap-step-prog-fill" style={{ width: `${Math.min(100, Math.round((dynamicWritingCount / 10) * 100))}%`, background: step3Status === 'completed' ? '#10b981' : 'var(--primary)' }}></div>
                </div>
                <div style={{ fontSize: '11px', color: step3Status === 'completed' ? '#10b981' : step3Status === 'active' ? 'var(--primary)' : '#9ca3af', marginTop: '6px', fontWeight: '600' }}>
                  {dynamicWritingCount} / 10 bài
                </div>
              </div>

              <div className="roadmap-step-connector-line">•••</div>

              {/* Step 4: Luyện nghe */}
              <div className={`roadmap-card-mockup ${step4Status}`}>
                <div className="roadmap-step-badge">4</div>
                <Headphones className="roadmap-step-icon" size={18} />
                <div className="roadmap-step-title">Luyện nghe</div>
                <div className="roadmap-step-sub">đề hội thoại</div>
                <div className="roadmap-step-prog-bar">
                  <div className="roadmap-step-prog-fill" style={{ width: `${Math.min(100, Math.round((dynamicListeningCount / 10) * 100))}%`, background: step4Status === 'completed' ? '#10b981' : 'var(--primary)' }}></div>
                </div>
                <div style={{ fontSize: '11px', color: step4Status === 'completed' ? '#10b981' : step4Status === 'active' ? 'var(--primary)' : '#9ca3af', marginTop: '6px', fontWeight: '600' }}>
                  {dynamicListeningCount} / 10 đề
                </div>
              </div>

              <div className="roadmap-step-connector-line">•••</div>

              {/* Step 5: Thi thử */}
              <div className={`roadmap-card-mockup ${step5Status}`}>
                <div className="roadmap-step-badge">5</div>
                <Trophy className="roadmap-step-icon" size={18} />
                <div className="roadmap-step-title">Thi thử mini</div>
                <div className="roadmap-step-sub">{userProfile.level || 'HSK 1'}</div>
                <div style={{ fontSize: '11.5px', color: step5Status === 'active' ? 'var(--primary)' : '#9ca3af', marginTop: '16px', fontWeight: '600' }}>
                  {step5Status === 'active' ? 'Sẵn sàng' : 'Chưa bắt đầu'}
                </div>
              </div>
            </div>

            {/* View timeline detail link */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <button 
                onClick={() => setActiveTab('diagnostic')}
                className="btn" 
                style={{ 
                  borderRadius: '10px', 
                  padding: '7px 20px', 
                  fontSize: '12.5px', 
                  border: '1px solid rgba(197, 160, 89, 0.4)', 
                  background: 'transparent',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <ClipboardList size={13} />
                <span>Xem chi tiết lộ trình</span>
              </button>
            </div>
          </div>

          {/* Suggestions panel */}
          <div className="premium-panel" style={{ marginTop: '24px' }}>
            <div className="roadmap-header-row" style={{ marginBottom: '14px' }}>
              <CloudIcon />
              <h3>GỢI Ý HỌC HÔM NAY</h3>
            </div>
            
            <div className="suggestions-list-mockup">
              {/* Vocab Row */}
              <div className="suggestion-row-mockup">
                <div className="suggestion-left-info">
                  <div className="suggestion-icon-circle vocab-type">词</div>
                  <div className="suggestion-desc-text" title="Học từ vựng chủ đề: 购物 (Mua sắm)">
                    Học từ vựng: <strong>购物 (Mua sắm)</strong> – 15 từ mới
                  </div>
                </div>
                <div className="suggestion-meta-text">15 từ</div>
                <button className="btn-start-small" onClick={() => setActiveTab('vocab')}>
                  Bắt đầu
                </button>
              </div>

              {/* Grammar Row */}
              <div className="suggestion-row-mockup">
                <div className="suggestion-left-info">
                  <div className="suggestion-icon-circle grammar-type">语</div>
                  <div className="suggestion-desc-text" title="Ngữ pháp: 把字句 (Câu chữ 把)">
                    Ngữ pháp: <strong>把字句 (Câu chữ 把)</strong> – Lý thuyết & bài tập
                  </div>
                </div>
                <div className="suggestion-meta-text">10 phút</div>
                <button className="btn-start-small" onClick={() => setActiveTab('grammar')}>
                  Bắt đầu
                </button>
              </div>

              {/* Listening Row */}
              <div className="suggestion-row-mockup">
                <div className="suggestion-left-info">
                  <div className="suggestion-icon-circle listening-type">听</div>
                  <div className="suggestion-desc-text" title="Luyện nghe: Hội thoại đời sống">
                    Luyện nghe: <strong>Hội thoại đời sống</strong> – Nghe & chọn đáp án
                  </div>
                </div>
                <div className="suggestion-meta-text">8 phút</div>
                <button className="btn-start-small" onClick={() => setActiveTab('horen')}>
                  Bắt đầu
                </button>
              </div>
            </div>

            {/* Show all suggestions trigger */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
              <button 
                onClick={() => setActiveTab('vocab')}
                style={{ 
                  border: 'none', 
                  background: 'none', 
                  color: 'var(--text-muted)', 
                  fontSize: '12px', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>Xem tất cả gợi ý học</span>
                <span style={{ fontSize: '10px' }}>▼</span>
              </button>
            </div>
          </div>

        </div>

        {/* =========================================================
            RIGHT COLUMN (25% Wide on Desktop)
            ========================================================= */}
        <div className="dashboard-right-panel">
          
          {/* Card 0: VỊ THẦN QUYẾT ĐỊNH */}
          <div className="premium-panel" style={{ 
            background: 'linear-gradient(135deg, rgba(185, 28, 28, 0.15) 0%, rgba(8, 9, 13, 0.95) 100%)',
            borderColor: 'rgba(185, 28, 28, 0.3)',
            boxShadow: '0 4px 20px rgba(185, 28, 28, 0.05)',
            marginBottom: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Sparkles size={16} className="text-accent" style={{ color: 'var(--accent)' }} />
              <h3 style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.5px', color: '#fca5a5', textTransform: 'uppercase', margin: 0 }}>
                Vị thần quyết định
              </h3>
            </div>
            <div style={{ 
              fontSize: '13.5px', 
              lineHeight: '1.6', 
              color: '#f3f4f6', 
              fontStyle: 'italic',
              fontFamily: 'var(--font-title)',
              padding: '12px',
              background: 'rgba(0, 0, 0, 0.25)',
              borderRadius: '8px',
              borderLeft: '3px solid var(--accent)'
            }}>
              "{randomQuote}"
            </div>
          </div>

          {/* Card 1: THAO TÁC NHANH */}
          <div className="premium-panel">
            <h3 style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.5px', color: '#9ca3af', textTransform: 'uppercase' }}>
              THAO TÁC NHANH
            </h3>
            
            <div className="quick-actions-grid">
              {/* Action 1: Flashcard */}
              <div className="quick-action-item" onClick={() => setActiveTab('vocab')}>
                <div className="quick-action-btn-circle">
                  <BookOpen size={16} />
                </div>
                <span className="quick-action-lbl">Thẻ từ</span>
                <span className="quick-action-lbl" style={{ marginTop: '-4px' }}>(Flashcard)</span>
              </div>

              {/* Action 2: Sổ lỗi */}
              <div className="quick-action-item" onClick={() => setActiveTab('progress')}>
                <div className="quick-action-btn-circle">
                  <ClipboardList size={16} />
                </div>
                <span className="quick-action-lbl">Sổ lỗi</span>
                <span className="quick-action-lbl" style={{ marginTop: '-4px' }}>của tôi</span>
              </div>

              {/* Action 3: Ghi chú nhanh */}
              <div className="quick-action-item" onClick={() => setActiveTab('schreiben')}>
                <div className="quick-action-btn-circle">
                  <FileText size={16} />
                </div>
                <span className="quick-action-lbl">Ghi chú</span>
                <span className="quick-action-lbl" style={{ marginTop: '-4px' }}>nhanh</span>
              </div>

              {/* Action 4: Lịch học */}
              <div className="quick-action-item" onClick={() => setActiveTab('progress')}>
                <div className="quick-action-btn-circle">
                  <Calendar size={16} />
                </div>
                <span className="quick-action-lbl">Lịch</span>
                <span className="quick-action-lbl" style={{ marginTop: '-4px' }}>học</span>
              </div>
            </div>
          </div>

          {/* Card 2: CHUỖI HỌC TẬP */}
          <div className="premium-panel">
            <h3 style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.5px', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '12px' }}>
              CHUỖI HỌC TẬP
            </h3>
            
            <div className="streak-header">
              <Flame size={32} fill="#ef4444" stroke="none" style={{ filter: 'drop-shadow(0 0 6px rgba(239, 68, 68, 0.4))' }} />
              <div>
                <div className="streak-count-large">{userStreak || 0} ngày</div>
                <div style={{ fontSize: '12px', color: '#10b981', fontWeight: '600' }}>Cố gắng đạt 30 ngày!</div>
              </div>
            </div>

            {/* Weekdays Row */}
            <div className="streak-days-row">
              {[
                { day: 'T2', checked: (userStreak || 0) >= 1 },
                { day: 'T3', checked: (userStreak || 0) >= 2 },
                { day: 'T4', checked: (userStreak || 0) >= 3 },
                { day: 'T5', checked: (userStreak || 0) >= 4 },
                { day: 'T6', today: true },
                { day: 'T7' },
                { day: 'CN' }
              ].map((item, idx) => (
                <div key={idx} className="streak-day-item">
                  <span className="streak-day-lbl">{item.day}</span>
                  <div className={`streak-day-circle-box ${item.checked ? 'checked' : ''} ${item.today ? 'active-today' : ''}`}>
                    {item.checked ? (
                      <Check size={12} strokeWidth={3} />
                    ) : item.today ? (
                      <Flame size={12} fill={(userStreak || 0) > 4 ? '#ef4444' : 'none'} stroke={(userStreak || 0) > 4 ? 'none' : 'currentColor'} />
                    ) : (
                      <span>{idx + 2 > 7 ? 'C' : idx + 2}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: KỲ THI HSK SẮP TỚI */}
          <div className="premium-panel upcoming-exam-panel">
            <div className="upcoming-exam-header">
              <div className="upcoming-exam-icon-box">
                <Calendar size={18} />
              </div>
              <div className="upcoming-exam-info">
                <div className="upcoming-exam-title">Kỳ thi {userProfile.level || 'HSK 1'}</div>
                <div className="upcoming-exam-date" style={{ color: 'var(--primary)', fontWeight: '600' }}>
                  Còn thiếu {Math.max(0, 650 - getPredictedHskScore())} điểm
                </div>
              </div>
            </div>

            <div className="upcoming-exam-progress-container">
              <div className="upcoming-exam-progress-lbl">
                <span>Mục tiêu: 650+ điểm</span>
                <span style={{ fontWeight: '700', color: '#ff3b3b' }}>
                  {Math.min(100, Math.round((getPredictedHskScore() / 650) * 100))}%
                </span>
              </div>
              <div className="upcoming-exam-progress-bar">
                <div className="upcoming-exam-progress-fill" style={{ width: `${Math.min(100, Math.round((getPredictedHskScore() / 650) * 100))}%` }}></div>
              </div>
            </div>

            <button className="btn-upcoming-exam-start" onClick={() => setActiveTab('diagnostic')}>
              <span>Ôn luyện ngay</span>
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Card 4: MỤC TIÊU TUẦN NÀY */}
          <div className="premium-panel weekly-goals-panel">
            <h3 style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.5px', color: '#9ca3af', textTransform: 'uppercase', marginBottom: '4px' }}>
              MỤC TIÊU TUẦN NÀY
            </h3>
            
            {/* Goal 1: Từ vựng */}
            <div className="weekly-goal-row">
              <div className="weekly-goal-meta">
                <div className="weekly-goal-name-box">
                  <span className="weekly-goal-icon-badge">词</span>
                  <span>Học 100 từ mới</span>
                </div>
                <span className="weekly-goal-val">
                  {Math.min(100, dynamicVocabCount)} / 100
                </span>
              </div>
              <div className="weekly-goal-prog-bar">
                <div 
                  className="weekly-goal-prog-fill teal" 
                  style={{ width: `${Math.min(100, dynamicVocabCount)}%` }}
                ></div>
              </div>
            </div>

            {/* Goal 2: Ngữ pháp */}
            <div className="weekly-goal-row">
              <div className="weekly-goal-meta">
                <div className="weekly-goal-name-box">
                  <span className="weekly-goal-icon-badge">语</span>
                  <span>Hoàn thành 5 bài ngữ pháp</span>
                </div>
                <span className="weekly-goal-val">
                  {Math.min(5, dynamicGrammarCount)} / 5
                </span>
              </div>
              <div className="weekly-goal-prog-bar">
                <div 
                  className="weekly-goal-prog-fill gold" 
                  style={{ width: `${(Math.min(5, dynamicGrammarCount)/5)*100}%` }}
                ></div>
              </div>
            </div>

            {/* Goal 3: Luyện nghe */}
            <div className="weekly-goal-row">
              <div className="weekly-goal-meta">
                <div className="weekly-goal-name-box">
                  <span className="weekly-goal-icon-badge" style={{ color: '#10b981', background: 'rgba(16, 185, 129, 0.12)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>听</span>
                  <span>Luyện nghe 3 bài</span>
                </div>
                <span className="weekly-goal-val">
                  {Math.min(3, dynamicListeningCount)} / 3
                </span>
              </div>
              <div className="weekly-goal-prog-bar">
                <div 
                  className="weekly-goal-prog-fill" 
                  style={{ width: `${(Math.min(3, dynamicListeningCount)/3)*100}%`, background: '#10b981' }}
                ></div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div 
          className="modal-overlay"
          onClick={() => setIsEditModalOpen(false)}
        >
          <div 
            className="glass-panel panel flex-col anim-fade-in-up"
            style={{
              width: '90%',
              maxWidth: '440px',
              border: '1px solid var(--border-color)',
              position: 'relative',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
              background: 'var(--bg-main)'
            }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-dialog-title"
          >
            <button 
              className="btn-text-primary"
              onClick={() => setIsEditModalOpen(false)}
              style={{
                position: 'absolute',
                right: '20px',
                top: '20px',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                color: 'var(--text-muted)'
              }}
              aria-label="Đóng"
            >
              <X size={18} />
            </button>

            <h3 style={{ fontSize: '18px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-title)' }}>
              <User size={18} className="text-primary" />
              Thiết lập hồ sơ cá nhân
            </h3>

            <form onSubmit={handleSaveProfile} className="flex-col gap-md" style={{ fontFamily: 'var(--font-sans)' }}>
              <div className="form-group" style={{ marginBottom: '14px' }}>
                <label className="form-label" htmlFor="profile-name">Họ và Tên</label>
                <input 
                  type="text" 
                  id="profile-name"
                  className="form-control"
                  value={editForm.name}
                  onChange={(e) => setEditForm(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>

              <div className="form-group" style={{ marginBottom: '14px' }}>
                <label className="form-label">Cấp độ mục tiêu</label>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5'].map(lvl => (
                    <label 
                      key={lvl} 
                      style={{ 
                        flex: '1 0 calc(33.33% - 8px)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        padding: '10px', 
                        borderRadius: '8px', 
                        border: editForm.level === lvl ? '2px solid var(--primary)' : '1px solid var(--border-color)',
                        background: editForm.level === lvl ? 'rgba(197, 160, 89, 0.1)' : 'transparent',
                        cursor: 'pointer',
                        fontWeight: '600',
                        fontSize: '12px'
                      }}
                    >
                      <input 
                        type="radio" 
                        name="profile-level" 
                        value={lvl} 
                        checked={editForm.level === lvl}
                        onChange={() => setEditForm(prev => ({ ...prev, level: lvl }))}
                        style={{ display: 'none' }}
                      />
                      {lvl}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '14px' }}>
                <label className="form-label" htmlFor="profile-specialty">Chuyên đề học tập</label>
                <select 
                  id="profile-specialty"
                  className="form-control"
                  value={editForm.specialty}
                  onChange={(e) => setEditForm(prev => ({ ...prev, specialty: e.target.value }))}
                >
                  <option value="allgemein">Giao tiếp đời sống (Life)</option>
                  <option value="business">Thương mại (Business)</option>
                  <option value="tourism">Du lịch (Tourism)</option>
                  <option value="it">Công nghệ & IT (IT)</option>
                  <option value="medical">Y tế & Bệnh viện (Medical)</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: '14px' }}>
                <label className="form-label">Giọng đọc phát âm (TTS)</label>
                <select 
                  className="form-control"
                  value={ttsProvider}
                  onChange={(e) => handleTtsProviderChange(e.target.value)}
                >
                  <option value="google">Giọng chuẩn Google (Online - Khuyên dùng)</option>
                  <option value="system">Giọng hệ thống mặc định (Offline)</option>
                </select>
              </div>

              <div className="flex-end gap-md" style={{ marginTop: '10px' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setIsEditModalOpen(false)}>
                  Hủy
                </button>
                <button type="submit" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #b91c1c 100%)', border: '0' }}>
                  Lưu thay đổi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
