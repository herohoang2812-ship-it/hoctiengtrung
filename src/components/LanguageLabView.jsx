import { useState, useEffect, useRef } from 'react';
import { 
  Award, 
  Check, 
  CheckCircle2,
  ChevronRight, 
  Clock,
  Eye, 
  HeartPulse, 
  Hotel, 
  Languages, 
  MessageSquareText, 
  Mic, 
  Plane, 
  Play, 
  RefreshCw, 
  Repeat2, 
  ShoppingBag, 
  Sparkles, 
  Square, 
  Train, 
  Trees, 
  Utensils, 
  Volume2, 
  VolumeX,
  X,
  XCircle
} from 'lucide-react';
import { HSK_CONVERSATION_CATEGORIES, HSK_CONVERSATION_PHRASES } from '../data/hskLanguageData';
import { recordAttempt } from '../utils/learningStore';
import { speak, stop } from '../services/ttsService';
import { chatWithExaminer, gradeSpeaking } from '../services/aiService';
import TypingIndicator from './TypingIndicator';
import GradingOverlay from './GradingOverlay';

const ROLEPLAY_CONFIGS = {
  cat1: {
    role: 'Phục vụ bàn (Waiter)',
    scenario: 'Bạn là phục vụ bàn tại một nhà hàng Trung Quốc. Hãy chào hỏi, hỗ trợ khách chọn món ăn, giới thiệu đặc sản và hỗ trợ thanh toán.',
    prompts: ['Gọi món ăn (Order food)', 'Khẩu vị cay/ngọt (Taste)', 'Thanh toán hóa đơn (Pay bill)'],
    greeting: '您好！欢迎光临。请问几位？这里是菜单，您看看想点些什么？'
  },
  cat2: {
    role: 'Nhân viên thủ tục (Check-in Staff)',
    scenario: 'Bạn là nhân viên tại quầy làm thủ tục sân bay. Hãy yêu cầu hộ chiếu, kiểm tra hành lý quá cân và chọn chỗ ngồi kề cửa sổ.',
    prompts: ['Kiểm tra hộ chiếu (Check passport)', 'Hành lý ký gửi (Luggage)', 'Chọn chỗ ngồi (Choose seat)'],
    greeting: '您好！请出示您的护照和机票。请问您有需要托运的行李吗？'
  },
  cat3: {
    role: 'Nhân viên bán vé (Ticket Agent)',
    scenario: 'Bạn là nhân viên bán vé tàu hỏa. Hãy hỏi điểm đến, loại vé (hỏa xa hay tàu cao tốc), giờ đi và xử lý đổi trả vé.',
    prompts: ['Mua vé tàu (Buy ticket)', 'Hỏi giờ chạy (Check train time)', 'Trả/Đổi vé (Refund ticket)'],
    greeting: '您好！请问您想买去哪里的火车票？今天下午去北京 of 动车还有票，您需要吗？'
  },
  cat4: {
    role: 'Người bản xứ đi dạo (Local resident)',
    scenario: 'Bạn là một người dân bản địa đang đi dạo trong công viên. Hãy chuyện trò về cảnh sắc thiên nhiên, không khí, chạy bộ và thư giãn.',
    prompts: ['Khen phong cảnh (Praise scenery)', 'Chạy bộ/Đi dạo (Jogging/Walking)', 'Thư giãn (Relaxation)'],
    greeting: '你好！今天公园的风景真漂亮，空气也很新鲜。你是来这里散步还是跑步的？'
  },
  cat5: {
    role: 'Lễ tân khách sạn (Receptionist)',
    scenario: 'Bạn là lễ tân khách sạn. Hãy làm thủ tục nhận phòng đơn, báo giờ ăn sáng, nhận yêu cầu khăn tắm sạch và sửa điều hòa hỏng.',
    prompts: ['Nhận phòng (Check-in)', 'Dịch vụ phòng/Khăn tắm (Room service)', 'Báo hỏng điều hòa (AC breakdown)'],
    greeting: '您好！欢迎来到北京大饭店。请问您有预订吗？我帮您办理入住手续。'
  },
  cat6: {
    role: 'Nhân viên bán hàng (Sales assistant)',
    scenario: 'Bạn là nhân viên bán hàng tại siêu thị/trung tâm mua sắm. Hãy giới thiệu khuyến mãi, giúp thử quần áo và thanh toán quét mã.',
    prompts: ['Hỏi giá cả (Ask price)', 'Thử quần áo (Try clothes)', 'Thanh toán (Payment)'],
    greeting: '您好！今天我们商场有打折促销活动，这件衣服款式和质量都很好，您想试一下吗？'
  },
  cat7: {
    role: 'Bác sĩ khám bệnh (Doctor)',
    scenario: 'Bạn là bác sĩ khám bệnh. Hãy hỏi triệu chứng cảm lạnh, khuyên đo nhiệt độ, hướng dẫn uống thuốc và nhắc nhở nghỉ ngơi dưỡng sức.',
    prompts: ['Hỏi triệu chứng (Check symptoms)', 'Kê đơn thuốc (Prescribe medicine)', 'Khuyên nghỉ ngơi (Advice rest)'],
    greeting: '你好！请坐。请问你身体哪里不舒服？发烧了吗？'
  }
};

const CategoryIcon = ({ iconName, size = 18 }) => {
  switch (iconName) {
    case 'Utensils':
      return <Utensils size={size} />;
    case 'Plane':
      return <Plane size={size} />;
    case 'Train':
      return <Train size={size} />;
    case 'Trees':
      return <Trees size={size} />;
    case 'Hotel':
      return <Hotel size={size} />;
    case 'ShoppingBag':
      return <ShoppingBag size={size} />;
    case 'HeartPulse':
      return <HeartPulse size={size} />;
    default:
      return <MessageSquareText size={size} />;
  }
};

export default function LanguageLabView({ showToast, onActivityComplete, userProfile, currentUser, onAuthClick }) {
  const [activeSubTab, setActiveSubTab] = useState('explore'); // 'explore' | 'reflex' | 'roleplay'
  const [selectedLevel, setSelectedLevel] = useState(userProfile?.level || 'All');
  const [selectedCategory, setSelectedCategory] = useState('cat1');

  // Shadowing state
  const [shadowingPhrase, setShadowingPhrase] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const [shadowingScore, setShadowingScore] = useState(null);

  // Reflex state
  const [reflexQuestions, setReflexQuestions] = useState([]);
  const [reflexIndex, setReflexIndex] = useState(0);
  const [selectedReflexOption, setSelectedReflexOption] = useState(null);
  const [reflexScore, setReflexScore] = useState(0);
  const [showReflexFeedback, setShowReflexFeedback] = useState(false);

  // Roleplay state
  const [rpContext, setRpContext] = useState('cat1');
  const [rpChat, setRpChat] = useState([]);
  const [rpText, setRpText] = useState('');
  const [isRpRecording, setIsRpRecording] = useState(false);
  const [isRpTyping, setIsRpTyping] = useState(false);
  const [rpGrading, setRpGrading] = useState(false);
  const [rpResult, setRpResult] = useState(null);
  const [showRpHints, setShowRpHints] = useState(false);

  const recognitionRef = useRef(null);
  const rpChatEndRef = useRef(null);

  // Auto-scroll roleplay chat
  useEffect(() => {
    rpChatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [rpChat, isRpTyping]);

  // Clean speaking text
  const cleanText = (text) => {
    return text.toLowerCase().replace(/[\s.,/#!$%^&*;:{}=\-_`~()，。？！、：；“”*]/g, '');
  };

  const playTTS = (text) => {
    stop();
    speak(text);
  };

  useEffect(() => {
    return () => {
      stop();
    };
  }, []);

  // Filter phrases
  const filteredPhrases = HSK_CONVERSATION_PHRASES.filter(p => {
    const levelMatch = selectedLevel === 'All' || p.level === selectedLevel;
    const catMatch = p.category === selectedCategory;
    return levelMatch && catMatch;
  });

  // ─────────────────────────────────────────────────────────────────────────────
  // 1. SHADOWING PRACTICE
  // ─────────────────────────────────────────────────────────────────────────────
  const startShadowing = (phrase) => {
    setShadowingPhrase(phrase);
    setRecognizedText('');
    setShadowingScore(null);
    playTTS(phrase.zh);

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      return showToast?.('Trình duyệt của bạn không hỗ trợ nhận dạng Web Speech. Hãy sử dụng Google Chrome!', 'error');
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'zh-CN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognitionRef.current = recognition;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setRecognizedText(result);
      
      const cleanTarget = cleanText(phrase.zh);
      const cleanUser = cleanText(result);

      // Simple character overlap matching
      let matchCount = 0;
      for (const char of cleanTarget) {
        if (cleanUser.includes(char)) {
          matchCount++;
        }
      }
      const score = cleanTarget.length > 0 ? Math.round((matchCount / cleanTarget.length) * 100) : 0;
      setShadowingScore(score);

      const success = score >= 75;
      recordAttempt({
        module: 'HSK Language Lab',
        part: `Shadowing · ${phrase.level}`,
        correct: success ? 1 : 0,
        total: 1,
        errors: success ? [] : [{
          question: phrase.zh,
          answer: result || 'Chưa nói rõ',
          correction: phrase.zh,
          explanation: `Luyện đọc chính tả câu: [${phrase.pinyin}]`
        }]
      });

      if (success) {
        showToast?.(`Tuyệt vời! Phát âm giống ${score}%`, 'success');
      } else {
        showToast?.(`Cố lên! Phát âm giống ${score}%. Hãy nghe lại và thử lại.`, 'warning');
      }
    };

    recognition.onerror = (e) => {
      console.error(e);
      if (e.error === 'not-allowed') {
        showToast?.('Vui lòng cấp quyền Microphone cho trình duyệt để luyện nói!', 'error');
      } else {
        showToast?.(`Lỗi nhận dạng: ${e.error}`, 'warning');
      }
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    // Delay start slightly to let the TTS finish speaking the template phrase
    setTimeout(() => {
      try {
        recognition.start();
      } catch (err) {
        console.error(err);
      }
    }, 1800);
  };

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. REFLEX PRACTICE QUIZ
  // ─────────────────────────────────────────────────────────────────────────────
  const generateReflexQuiz = () => {
    // Pick from all phrases at active HSK level (or current category if needed)
    const pool = selectedLevel === 'All' 
      ? HSK_CONVERSATION_PHRASES 
      : HSK_CONVERSATION_PHRASES.filter(p => p.level === selectedLevel);

    if (pool.length < 3) {
      showToast?.('Không đủ câu giao tiếp ở cấp độ này để tạo trắc nghiệm!', 'error');
      return;
    }

    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    const questions = selected.map(phrase => {
      const distractors = pool.filter(p => p.zh !== phrase.zh);
      const shuffledDistractors = distractors.sort(() => 0.5 - Math.random());
      const wrongChoices = shuffledDistractors.slice(0, 2).map(p => p.zh);

      const options = [phrase.zh, ...wrongChoices].sort(() => 0.5 - Math.random());
      const correctIdx = options.indexOf(phrase.zh);

      return {
        id: phrase.id,
        vi: phrase.vi,
        correctText: phrase.zh,
        pinyin: phrase.pinyin,
        options,
        correct: correctIdx
      };
    });

    setReflexQuestions(questions);
    setReflexIndex(0);
    setSelectedReflexOption(null);
    setShowReflexFeedback(false);
    setReflexScore(0);
  };

  const handleSelectReflexOption = (idx) => {
    if (showReflexFeedback) return;
    setSelectedReflexOption(idx);
    setShowReflexFeedback(true);

    const currentQ = reflexQuestions[reflexIndex];
    playTTS(currentQ.correctText);

    if (idx === currentQ.correct) {
      setReflexScore(prev => prev + 1);
    }
  };

  const handleNextReflexQuestion = () => {
    if (reflexIndex < reflexQuestions.length - 1) {
      setReflexIndex(prev => prev + 1);
      setSelectedReflexOption(null);
      setShowReflexFeedback(false);
    } else {
      const finalScore = reflexScore + (selectedReflexOption === reflexQuestions[reflexIndex].correct ? 1 : 0);
      showToast?.(`Kết quả trắc nghiệm phản xạ: ${finalScore}/5`, 'success');
      
      recordAttempt({
        module: 'HSK Language Lab',
        part: 'Reflex Quiz',
        correct: finalScore,
        total: 5
      });
      onActivityComplete?.();
    }
  };

  useEffect(() => {
    if (activeSubTab === 'reflex') {
      generateReflexQuiz();
    }
  }, [activeSubTab, selectedLevel]);

  // ─────────────────────────────────────────────────────────────────────────────
  // 3. AI ROLEPLAY SIMULATOR
  // ─────────────────────────────────────────────────────────────────────────────
  const startRoleplay = (catId) => {
    setRpContext(catId);
    setRpResult(null);
    setRpGrading(false);
    setRpText('');
    setShowRpHints(false);
    
    const config = ROLEPLAY_CONFIGS[catId] || ROLEPLAY_CONFIGS.cat1;
    setRpChat([
      { sender: 'ai', text: config.greeting, id: Date.now() }
    ]);
    playTTS(config.greeting);
  };

  useEffect(() => {
    if (activeSubTab === 'roleplay') {
      startRoleplay(rpContext);
    }
  }, [activeSubTab]);

  const sendRpMessage = async (textToSend) => {
    const message = textToSend || rpText;
    if (!message.trim()) return;

    if (!currentUser) {
      showToast?.('Đóng vai hội thoại AI là tính năng Premium. Vui lòng đăng nhập để trải nghiệm!', 'warning');
      onAuthClick?.();
      return;
    }

    const updatedChat = [...rpChat, { sender: 'user', text: message, id: Date.now() }];
    setRpChat(updatedChat);
    setRpText('');
    setIsRpTyping(true);

    const config = ROLEPLAY_CONFIGS[rpContext];
    
    try {
      const response = await chatWithExaminer(
        `Ngữ cảnh: ${HSK_CONVERSATION_CATEGORIES.find(c => c.id === rpContext)?.name || 'Giao tiếp'}`,
        config.scenario,
        config.prompts,
        updatedChat,
        message
      );
      
      setIsRpTyping(false);
      setRpChat(prev => [...prev, { sender: 'ai', text: response, id: Date.now() }]);
      playTTS(response);
    } catch (err) {
      console.error(err);
      setIsRpTyping(false);
      showToast?.('Lỗi kết nối AI. Vui lòng thử lại!', 'error');
    }
  };

  const startRpRecording = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      return showToast?.('Trình duyệt không hỗ trợ Web Speech nhận giọng nói. Hãy dùng Google Chrome!', 'error');
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'zh-CN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    
    recognition.onstart = () => {
      setIsRpRecording(true);
    };

    recognition.onresult = (event) => {
      const speech = event.results[0][0].transcript;
      sendRpMessage(speech);
    };

    recognition.onerror = (e) => {
      console.error(e);
      setIsRpRecording(false);
      showToast?.('Nhận dạng giọng nói thất bại. Hãy nói lại rõ hơn!', 'warning');
    };

    recognition.onend = () => {
      setIsRpRecording(false);
    };

    recognition.start();
  };

  const handleGradeRoleplay = async () => {
    if (rpChat.length < 3) {
      return showToast?.('Hãy đối thoại ít nhất 2 lượt trước khi yêu cầu chấm điểm.', 'warning');
    }
    
    setRpGrading(true);
    const config = ROLEPLAY_CONFIGS[rpContext];
    const catName = HSK_CONVERSATION_CATEGORIES.find(c => c.id === rpContext)?.name || 'Giao tiếp';

    try {
      const result = await gradeSpeaking(catName, 'Đàm thoại giao tiếp', config.prompts, rpChat);
      setRpResult(result);
      setRpGrading(false);
      
      recordAttempt({
        module: 'HSK Language Lab',
        part: `Roleplay · ${catName}`,
        correct: result.overall === 'Đạt' || result.overall.includes('Đạt') ? 1 : 0,
        total: 1,
        errors: result.grammaticalFixes.map(fix => ({
          question: fix.original,
          answer: fix.wrong || fix.original,
          correction: fix.right,
          explanation: fix.reason
        }))
      });
      onActivityComplete?.();
    } catch (err) {
      console.error(err);
      setRpGrading(false);
      showToast?.(`Chấm điểm thất bại: ${err.message}`, 'error');
    }
  };

  return (
    <div className="page-section">
      <div className="content-header">
        <div>
          <h1 className="content-title">HSK Language Lab</h1>
          <p className="content-subtitle">Luyện nói phản xạ, rèn luyện shadowing phát âm và mô phỏng giao tiếp AI theo 100 câu đàm thoại HSK thực tế.</p>
        </div>
      </div>

      {/* Main Tab Controls */}
      <div className="glass-panel panel" style={{ marginBottom: 20 }}>
        <div className="exam-part-tabs language-tabs">
          <button 
            className={`exam-part-tab ${activeSubTab === 'explore' ? 'active' : ''}`} 
            onClick={() => { stop(); setActiveSubTab('explore'); }}
          >
            <Languages size={15} />
            <span>Khám phá (Shadowing)</span>
          </button>
          <button 
            className={`exam-part-tab ${activeSubTab === 'reflex' ? 'active' : ''}`} 
            onClick={() => { stop(); setActiveSubTab('reflex'); }}
          >
            <Repeat2 size={15} />
            <span>Phản xạ giao tiếp</span>
          </button>
          <button 
            className={`exam-part-tab ${activeSubTab === 'roleplay' ? 'active' : ''}`} 
            onClick={() => { stop(); setActiveSubTab('roleplay'); }}
          >
            <MessageSquareText size={15} />
            <span>Đóng vai AI Roleplay</span>
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      
      {/* 1. EXPLORE & SHADOWING */}
      {activeSubTab === 'explore' && (
        <div className="dashboard-grid">
          {/* Left Side: Context Categories */}
          <div className="col-4 flex-col gap-sm">
            <div className="glass-panel panel">
              <h3 style={{ fontSize: '15px', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MessageSquareText size={16} /> Ngữ cảnh giao tiếp
              </h3>
              
              <div className="flex-col gap-xs">
                {HSK_CONVERSATION_CATEGORIES.map(cat => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <div
                      key={cat.id}
                      className={`redemittel-card ${isActive ? 'active-history-card' : ''}`}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setShadowingPhrase(null);
                        setShadowingScore(null);
                      }}
                      style={{
                        cursor: 'pointer',
                        padding: '12px 14px',
                        borderLeft: isActive ? '3px solid var(--primary)' : '3px solid transparent',
                        background: isActive ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.02)',
                        borderRadius: '8px'
                      }}
                    >
                      <div className="flex-row gap-sm" style={{ alignItems: 'center' }}>
                        <CategoryIcon iconName={cat.icon} size={15} />
                        <span className="font-semibold" style={{ fontSize: '13px' }}>{cat.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side: Conversation Phrases and Shadowing Card */}
          <div className="col-8 flex-col gap-md">
            {/* Level Selector */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['All', 'HSK 1', 'HSK 2', 'HSK 3', 'HSK 4', 'HSK 5', 'HSK 6'].map(lvl => (
                <button
                  key={lvl}
                  className={`badge ${selectedLevel === lvl ? 'badge-primary' : 'badge-secondary'}`}
                  onClick={() => {
                    setSelectedLevel(lvl);
                    setShadowingPhrase(null);
                    setShadowingScore(null);
                  }}
                  style={{ 
                    cursor: 'pointer', 
                    border: 'none', 
                    padding: '6px 10px', 
                    fontSize: '11px',
                    background: selectedLevel === lvl ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                    color: selectedLevel === lvl ? '#fff' : 'var(--text-muted)'
                  }}
                >
                  {lvl === 'All' ? 'Tất cả cấp độ' : lvl}
                </button>
              ))}
            </div>

            {/* Active Shadowing Practice Card */}
            {shadowingPhrase && (
              <div className="glass-panel panel-lg flex-col gap-md anim-fade-in-up" style={{ background: 'rgba(139, 92, 246, 0.04)', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                <div className="flex-between">
                  <span className="badge badge-primary">Shadowing Luyện Nói</span>
                  <button className="btn-text-primary" onClick={() => setShadowingPhrase(null)}><X size={16} /></button>
                </div>
                
                <div style={{ textAlign: 'center', padding: '10px 0' }}>
                  <h3 style={{ fontSize: '26px', color: 'var(--text-main)', fontWeight: 'bold' }}>{shadowingPhrase.zh}</h3>
                  <p className="text-primary" style={{ fontStyle: 'italic', fontSize: '14.5px', marginTop: '4px' }}>[{shadowingPhrase.pinyin}]</p>
                  <p className="text-muted" style={{ fontSize: '13.5px', marginTop: '6px' }}>{shadowingPhrase.vi}</p>
                </div>

                <div className="flex-row gap-md" style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <button 
                    className="btn btn-secondary flex-row gap-xs" 
                    onClick={() => playTTS(shadowingPhrase.zh)}
                    style={{ borderRadius: '24px' }}
                  >
                    <Volume2 size={15} /> Phát âm mẫu
                  </button>
                  
                  <button 
                    className={`btn ${isListening ? 'btn-danger animate-pulse' : 'btn-primary'} flex-row gap-xs`}
                    onClick={() => startShadowing(shadowingPhrase)}
                    disabled={isListening}
                    style={{ borderRadius: '24px', padding: '10px 24px' }}
                  >
                    <Mic size={15} /> {isListening ? 'Đang nghe nói...' : 'Nhấn để nói (Repeat)'}
                  </button>
                </div>

                {recognizedText && (
                  <div style={{ background: 'rgba(255,255,255,0.02)', padding: '14px', borderRadius: '10px', fontSize: '13px', border: '1px solid var(--border-color)', marginTop: '8px' }}>
                    <p style={{ margin: '0 0 6px 0' }}>Từ nhận diện: <strong style={{ color: 'var(--primary)' }}>{recognizedText}</strong></p>
                    {shadowingScore !== null && (
                      <div className="flex-row gap-xs" style={{ alignItems: 'center' }}>
                        <span>Độ trùng khớp: </span>
                        <strong className={shadowingScore >= 75 ? 'text-success' : 'text-warning'} style={{ fontSize: '15px' }}>{shadowingScore}%</strong>
                        {shadowingScore >= 75 ? <CheckCircle2 size={16} className="text-success" /> : <XCircle size={16} className="text-warning" />}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Conversation Phrases List */}
            <div className="flex-col gap-sm" style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: '4px' }}>
              {filteredPhrases.length > 0 ? (
                filteredPhrases.map(phrase => (
                  <div 
                    key={phrase.id} 
                    className="glass-panel inner-card flex-between"
                    style={{ padding: '14px 18px', background: 'rgba(255, 255, 255, 0.02)' }}
                  >
                    <div style={{ maxWidth: '80%' }}>
                      <div className="flex-row gap-sm" style={{ alignItems: 'center', marginBottom: '6px' }}>
                        <span className="badge badge-secondary" style={{ fontSize: '9px' }}>STT: {phrase.id}</span>
                        <span className="badge badge-primary" style={{ fontSize: '9px' }}>{phrase.level}</span>
                      </div>
                      <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--text-main)' }}>{phrase.zh}</h4>
                      <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', fontStyle: 'italic', margin: '2px 0' }}>{phrase.pinyin}</p>
                      <p style={{ fontSize: '13px', color: 'var(--primary-soft)', marginTop: '4px' }}>{phrase.vi}</p>
                    </div>
                    
                    <div className="flex-row gap-xs">
                      <button 
                        className="btn btn-secondary btn-sm" 
                        onClick={() => playTTS(phrase.zh)}
                        style={{ borderRadius: '50%', width: '36px', height: '36px', padding: 0, display: 'grid', placeItems: 'center' }}
                        title="Phát âm"
                      >
                        <Volume2 size={14} />
                      </button>
                      <button 
                        className="btn btn-primary btn-sm flex-row gap-xs"
                        onClick={() => startShadowing(phrase)}
                        style={{ borderRadius: '18px', padding: '0 12px', height: '36px' }}
                        title="Tập phát âm Shadowing"
                      >
                        <Mic size={13} /> Shadow
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="glass-panel inner-card text-center" style={{ padding: '30px' }}>
                  <p className="text-muted">Không tìm thấy câu giao tiếp nào ở cấp độ HSK này trong ngữ cảnh này.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 2. REFLEX PRACTICE */}
      {activeSubTab === 'reflex' && reflexQuestions.length > 0 && (
        <div className="flashcard-container anim-fade-in-up">
          <div className="flashcard-progress" style={{ maxWidth: '520px' }}>
            <span>Câu {reflexIndex + 1} / 5</span>
            <div className="flashcard-progress-bar">
              <div 
                className="flashcard-progress-fill" 
                style={{ width: `${((reflexIndex + 1) / 5) * 100}%`, background: 'var(--secondary)' }}
              ></div>
            </div>
          </div>

          <div className="glass-panel panel flex-col" style={{ width: '100%', maxWidth: '520px', padding: '24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '18px' }}>
              <span className="badge badge-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                <Repeat2 size={12} /> Phản xạ giao tiếp
              </span>
              <h3 style={{ fontSize: '18px', marginTop: '10px', color: 'var(--primary-soft)' }}>
                Dịch câu sau sang tiếng Trung:
              </h3>
              <p style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-main)', marginTop: '8px' }}>
                "{reflexQuestions[reflexIndex].vi}"
              </p>
            </div>

            <div className="flex-col gap-sm">
              {reflexQuestions[reflexIndex].options.map((opt, idx) => {
                const isSelected = selectedReflexOption === idx;
                const isCorrect = idx === reflexQuestions[reflexIndex].correct;

                let optionStyle = {};
                if (showReflexFeedback) {
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
                    key={idx}
                    className="quiz-option"
                    style={{
                      padding: '12px 16px',
                      borderRadius: '10px',
                      border: '1px solid var(--border-color)',
                      fontSize: '14.5px',
                      fontWeight: '500',
                      cursor: showReflexFeedback ? 'default' : 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'all 0.15s ease',
                      ...optionStyle
                    }}
                    onClick={() => handleSelectReflexOption(idx)}
                  >
                    <span>{opt}</span>
                    {showReflexFeedback && isCorrect && <Check size={16} className="text-success" />}
                    {showReflexFeedback && isSelected && !isCorrect && <X size={16} className="text-accent" />}
                  </div>
                );
              })}
            </div>

            {showReflexFeedback && (
              <div className="anim-fade-in" style={{ marginTop: '20px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                <p className="font-semibold" style={{ fontSize: '13px', color: 'var(--secondary)', marginBottom: '4px' }}>
                  Phiên âm Pinyin:
                </p>
                <p style={{ fontSize: '14.5px', fontWeight: '500', margin: 0, fontStyle: 'italic' }}>
                  {reflexQuestions[reflexIndex].pinyin}
                </p>
                
                <div className="flex-end" style={{ marginTop: '16px' }}>
                  <button className="btn btn-primary btn-sm flex-row gap-xs" onClick={handleNextReflexQuestion}>
                    {reflexIndex < 4 ? 'Câu tiếp theo' : 'Hoàn thành'}
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 3. AI ROLEPLAY SIMULATOR */}
      {activeSubTab === 'roleplay' && (
        <div className="dashboard-grid">
          {/* Left Panel: Category selection & model card */}
          <div className="col-4 flex-col gap-sm">
            <div className="glass-panel panel">
              <h3 style={{ fontSize: '15px', marginBottom: '14px' }}>Chọn Tình Huống AI</h3>
              <div className="flex-col gap-xs">
                {HSK_CONVERSATION_CATEGORIES.map(cat => {
                  const isActive = rpContext === cat.id;
                  return (
                    <div
                      key={cat.id}
                      className={`redemittel-card ${isActive ? 'active-history-card' : ''}`}
                      onClick={() => startRoleplay(cat.id)}
                      style={{
                        cursor: 'pointer',
                        padding: '12px 14px',
                        borderLeft: isActive ? '3px solid var(--primary)' : '3px solid transparent',
                        background: isActive ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.02)',
                        borderRadius: '8px'
                      }}
                    >
                      <div className="flex-row gap-sm" style={{ alignItems: 'center' }}>
                        <CategoryIcon iconName={cat.icon} size={15} />
                        <span style={{ fontSize: '13px', fontWeight: '500' }}>{cat.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Conversation Grading Results */}
            {rpResult && (
              <div className="glass-panel panel flex-col gap-xs anim-fade-in-up" style={{ border: '1px solid var(--success)', background: 'rgba(16, 185, 129, 0.02)' }}>
                <h4 style={{ fontSize: '14px', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
                  <Award size={15} /> Kết quả hội thoại AI
                </h4>
                <div style={{ fontSize: '12.5px', marginTop: '6px' }} className="flex-col gap-xs">
                  <p>Lưu loát: <strong>{rpResult.fluency}/100</strong></p>
                  <p>Ngữ pháp: <strong>{rpResult.grammar}/100</strong></p>
                  <p>Từ vựng: <strong>{rpResult.vocabulary}/100</strong></p>
                  <p>Đánh giá: <strong className="text-success">{rpResult.overall}</strong></p>
                  <p className="text-muted" style={{ fontStyle: 'italic', borderTop: '1px solid var(--border-color)', paddingTop: '6px', marginTop: '4px' }}>
                    "{rpResult.feedback}"
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Panel: Roleplay Chat Simulator */}
          <div className="col-8 flex-col gap-sm">
            <div className="glass-panel panel-lg flex-col" style={{ minHeight: '460px', maxHeight: '520px', position: 'relative' }}>
              {/* Scenario details */}
              <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '10px', marginBottom: '14px' }}>
                <div className="flex-between">
                  <h3 style={{ fontSize: '16px', fontWeight: '600' }}>
                    Đối vai: {ROLEPLAY_CONFIGS[rpContext]?.role || 'Giám khảo'}
                  </h3>
                  <button 
                    className="btn btn-secondary btn-xs flex-row gap-xs"
                    onClick={() => setShowRpHints(prev => !prev)}
                    style={{ borderRadius: '6px' }}
                  >
                    <Sparkles size={12} /> {showRpHints ? 'Ẩn gợi ý' : 'Xem gợi ý câu'}
                  </button>
                </div>
                <p className="text-muted" style={{ fontSize: '12.5px', marginTop: '4px' }}>
                  {ROLEPLAY_CONFIGS[rpContext]?.scenario}
                </p>
              </div>

              {/* Chat Window */}
              <div 
                style={{ 
                  flexGrow: 1, 
                  overflowY: 'auto', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '12px',
                  paddingRight: '6px',
                  marginBottom: '16px',
                  maxHeight: '300px'
                }}
              >
                {rpChat.map(msg => {
                  const isAi = msg.sender === 'ai';
                  return (
                    <div 
                      key={msg.id}
                      style={{ 
                        alignSelf: isAi ? 'flex-start' : 'flex-end',
                        maxWidth: '80%',
                        background: isAi ? 'var(--bg-elevated)' : 'var(--primary-soft)',
                        border: isAi ? '1px solid var(--border-color)' : '1px solid var(--primary)',
                        padding: '10px 14px',
                        borderRadius: isAi ? '12px 12px 12px 2px' : '12px 12px 2px 12px',
                        fontSize: '14px',
                        lineHeight: '1.5'
                      }}
                      className="anim-fade-in"
                    >
                      <p style={{ margin: 0, fontWeight: '500', color: isAi ? 'var(--text-main)' : '#ffffff' }}>
                        {msg.text}
                      </p>
                      {isAi && (
                        <button 
                          className="btn-text-primary" 
                          onClick={() => playTTS(msg.text)}
                          style={{ fontSize: '11px', display: 'flex', alignItems: 'center', gap: '3px', marginTop: '4px', opacity: 0.7 }}
                        >
                          <Volume2 size={11} /> Nghe phát âm
                        </button>
                      )}
                    </div>
                  );
                })}

                {isRpTyping && (
                  <div style={{ alignSelf: 'flex-start' }}>
                    <TypingIndicator />
                  </div>
                )}
                
                <div ref={rpChatEndRef} />
              </div>

              {/* Suggested phrases (hints) */}
              {showRpHints && (
                <div 
                  className="anim-slide-up"
                  style={{ 
                    background: 'rgba(139, 92, 246, 0.05)', 
                    border: '1px solid rgba(139, 92, 246, 0.2)', 
                    padding: '12px', 
                    borderRadius: '8px', 
                    fontSize: '12px',
                    marginBottom: '10px',
                    maxHeight: '120px',
                    overflowY: 'auto'
                  }}
                >
                  <p style={{ margin: '0 0 6px 0', fontWeight: 'bold', color: 'var(--primary-soft)' }}>Gợi ý mẫu có thể dùng:</p>
                  <div className="flex-col gap-xs">
                    {HSK_CONVERSATION_PHRASES.filter(p => p.category === rpContext).slice(0, 3).map(p => (
                      <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', gap: '6px' }}>
                        <span>- <strong>{p.zh}</strong> ({p.pinyin}): <em>{p.vi}</em></span>
                        <button className="btn-text-primary" onClick={() => setRpText(p.zh)} style={{ fontSize: '10px', padding: 0 }}>Dùng</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Row */}
              <div 
                style={{ 
                  display: 'flex', 
                  gap: '8px', 
                  alignItems: 'center', 
                  borderTop: '1px solid var(--border-color)', 
                  paddingTop: '12px',
                  marginTop: 'auto' 
                }}
              >
                <button 
                  className={`btn ${isRpRecording ? 'btn-danger animate-pulse' : 'btn-secondary'}`}
                  onClick={startRpRecording}
                  disabled={isRpRecording || isRpTyping}
                  style={{ borderRadius: '50%', width: '42px', height: '42px', padding: 0, display: 'grid', placeItems: 'center' }}
                  title="Nói trực tiếp (Speech-to-Text)"
                >
                  <Mic size={18} />
                </button>

                <input 
                  type="text" 
                  className="form-control"
                  placeholder="Nhập câu thoại tiếng Trung..."
                  value={rpText}
                  onChange={(e) => setRpText(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') sendRpMessage(); }}
                  disabled={isRpTyping}
                  style={{ flexGrow: 1, borderRadius: '20px', padding: '10px 16px' }}
                />

                <button 
                  className="btn btn-primary"
                  onClick={() => sendRpMessage()}
                  disabled={!rpText.trim() || isRpTyping}
                  style={{ borderRadius: '20px', padding: '8px 20px' }}
                >
                  Gửi
                </button>

                <button 
                  className="btn btn-secondary"
                  onClick={handleGradeRoleplay}
                  disabled={rpChat.length < 3 || rpGrading}
                  style={{ borderRadius: '20px', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <Award size={15} /> Chấm điểm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grading AI overlay */}
      {rpGrading && (
        <GradingOverlay message="AI giám khảo đang đánh giá chất lượng hội thoại..." />
      )}
    </div>
  );
}