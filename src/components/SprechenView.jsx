import { useState, useEffect, useRef } from 'react';
import { 
  RefreshCw, 
  Award, 
  Sparkles, 
  ChevronRight, 
  Mic, 
  Square,
  Volume2,
  Clock
} from 'lucide-react';
import { SPRECHEN_TOPICS } from '../data/sprechenTopics';
import TypingIndicator from './TypingIndicator';
import AnimatedScore from './AnimatedScore';
import { chatWithExaminer, gradeSpeaking } from '../services/aiService';
import { recordAttempt } from '../utils/learningStore';
import { speak, stop } from '../services/ttsService';
import { deductSpeechMinutesOnDb } from '../services/dbService';
import GradingOverlay from './GradingOverlay';

export default function SprechenView({ showToast, onActivityComplete, currentUser, onAuthClick }) {
  const [selectedSpeakTopic, setSelectedSpeakTopic] = useState(SPRECHEN_TOPICS[0]);
  const [speakChat, setSpeakChat] = useState(SPRECHEN_TOPICS[0].aiMessages);
  const [isRecording, setIsRecording] = useState(false);
  const [recordSeconds, setRecordSeconds] = useState(0);
  const [isSpeakGrading, setIsSpeakGrading] = useState(false);
  const [speakResult, setSpeakResult] = useState(null);
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [prepSeconds, setPrepSeconds] = useState(15 * 60);
  const [prepRunning, setPrepRunning] = useState(false);
  
  const chatEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const timerRef = useRef(null);
  const startTimeRef = useRef(0);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [speakChat, isAiTyping]);

  // Dừng phát âm thanh khi chuyển tab hoặc unmount component
  useEffect(() => {
    return () => {
      stop();
    };
  }, []);

  // Handle Text-to-Speech (TTS)
  const speakText = (text) => {
    speak(text);
  };

  // Speak the initial AI greeting when topic changes
  useEffect(() => {
    setTimeout(() => {
      const lastMsg = speakChat[speakChat.length - 1];
      if (lastMsg && lastMsg.sender === 'ai' && lastMsg.id === 3) {
        speakText(lastMsg.text);
      } else if (speakChat.length === 3) {
        speakText(speakChat[2].text);
      }
    }, 600);
  }, [selectedSpeakTopic]);

  // Timer for recording simulation
  useEffect(() => {
    if (isRecording) {
      timerRef.current = setInterval(() => {
        setRecordSeconds(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
      setRecordSeconds(0);
    }
    return () => clearInterval(timerRef.current);
  }, [isRecording]);


  useEffect(() => {
    if (!prepRunning || prepSeconds <= 0) return undefined;
    const timer = setInterval(() => setPrepSeconds(value => {
      if (value <= 1) { setPrepRunning(false); return 0; }
      return value - 1;
    }), 1000);
    return () => clearInterval(timer);
  }, [prepRunning, prepSeconds]);

  const formatPrep = value => `${String(Math.floor(value / 60)).padStart(2, '0')}:${String(value % 60).padStart(2, '0')}`;
  const handleTopicChange = (e) => {
    const topic = SPRECHEN_TOPICS.find(t => t.id === parseInt(e.target.value));
    if (topic) {
      setSelectedSpeakTopic(topic);
      setSpeakChat(topic.aiMessages);
      setIsRecording(false);
      setIsSpeakGrading(false);
      setSpeakResult(null);
      setIsAiTyping(false);
      setPrepSeconds(15 * 60);
      setPrepRunning(false);
    }
  };

  // Speech-to-Text (STT) initialization
  const startSpeechRecognition = () => {
    if (!currentUser) {
      showToast('Hội thoại với giám khảo mô phỏng là tính năng Premium. Vui lòng đăng nhập hoặc đăng ký tài khoản miễn phí để trải nghiệm!', 'warning');
      onAuthClick();
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      showToast('Trình duyệt không hỗ trợ nhận diện giọng nói Web Speech. Vui lòng dùng Chrome!', 'error');
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'zh-CN';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      recognitionRef.current = recognition;

      recognition.onstart = () => {
        setIsRecording(true);
        startTimeRef.current = Date.now();
      };

      recognition.onresult = (event) => {
        const userSpeechText = event.results[0][0].transcript;
        const durationMins = startTimeRef.current ? (Date.now() - startTimeRef.current) / 60000 : 0.05;
        handleUserSpeechResult(userSpeechText, durationMins);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        if (event.error === 'not-allowed') {
          showToast('Vui lòng cấp quyền truy cập Microphone cho trình duyệt để luyện nói!', 'error');
        } else {
          showToast(`Nhận dạng giọng nói bị lỗi: ${event.error}`, 'warning');
        }
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.start();
    } catch (e) {
      console.error(e);
      setIsRecording(false);
    }
  };

  const handleStopRecord = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    } else {
      setIsRecording(false);
    }
  };

const PREDEFINED_AI_RESPONSES = {
  1: [
    '好的，一共十五块钱。您怎么付款？微信还是支付宝？',
    '好的，收您十五块钱。这是您的苹果，慢走，欢迎下次再来！'
  ],
  2: [
    '太好了！那 chúng ta 星期六晚上七点在电影院门口见，可以吗？',
    '没问题，那我们星期六不见不散！拜拜！'
  ],
  3: [
    '好的，那我们就坐地铁去吧。我们需要带些什么吃的或者水吗？',
    '行，那我就准备一些面包和水果。星期六早上地铁站见！'
  ],
  4: [
    '原来如此，查词典和结合上下文确实是好方法。那么你觉得看什么类型的电影最适合汉语学习者呢？',
    '非常感谢你的分享，你的建议很有参考价值。请点击“评估整个对话”提交你的口语答复。'
  ],
  5: [
    '你说的很有道理，完善公共服务设施和提供志愿者指导非常重要。作为年轻人，我们个人能为身边的老人做些什么吗？',
    '非常感谢你对此社会话题的深刻探讨。对话讨论已结束，请点击“评估整个对话”生成完整成绩单。'
  ]
};

  const handleUserSpeechResult = async (text, durationMins = 0.05) => {
    const newUserMsg = { id: Date.now(), sender: 'user', text };
    const newChat = [...speakChat, newUserMsg];
    setSpeakChat(newChat);

    setIsAiTyping(true);
    
    // Giả lập thời gian suy nghĩ 1 giây cho AI tự nhiên hơn
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      if (currentUser) {
        await deductSpeechMinutesOnDb(currentUser.uid, durationMins);
      }

      const topicId = selectedSpeakTopic.id;
      // Đếm số lượt user nói thực tế qua micro (bỏ qua câu đầu tiên là mock của đề bài)
      const userTurns = newChat.filter(m => m.sender === 'user').length;
      
      let aiText = '';
      const responses = PREDEFINED_AI_RESPONSES[topicId] || [];
      const responseIndex = userTurns - 2; // userTurns = 2 ứng với câu đầu tiên nói qua micro

      if (responseIndex >= 0 && responseIndex < responses.length) {
        aiText = responses[responseIndex];
      } else {
        aiText = '谢谢你的回答。本轮对话讨论已经完成，请点击“评估整个对话”提交你的答卷！';
      }
      
      const newAiResponse = { 
        id: Date.now() + 1, 
        sender: 'ai', 
        text: aiText 
      };
      
      setSpeakChat(prev => [...prev, newAiResponse]);
      speakText(aiText);
    } catch (err) {
      console.error(err);
      showToast(err.message || 'Lỗi khi xử lý phản hồi.', 'warning');
    } finally {
      setIsAiTyping(false);
    }
  };

  const handleSpeakEvaluation = async () => {
    if (!currentUser) {
      showToast('Tính năng chấm bài Nói nâng cao yêu cầu đăng nhập tài khoản. Vui lòng đăng nhập hoặc đăng ký tài khoản miễn phí để tiếp tục!', 'warning');
      onAuthClick();
      return;
    }
    setIsSpeakGrading(true);
    try {
      const evaluationResult = await gradeSpeaking(
        selectedSpeakTopic.title,
        selectedSpeakTopic.level,
        selectedSpeakTopic.prompts,
        speakChat
      );

      setSpeakResult(evaluationResult);

      const speakingScore = Math.round((evaluationResult.fluency + evaluationResult.grammar + evaluationResult.vocabulary) / 3);
      recordAttempt({
        module: 'Sprechen',
        part: selectedSpeakTopic.type,
        correct: speakingScore,
        total: 100,
        errors: evaluationResult.grammaticalFixes.map(error => ({ question: selectedSpeakTopic.title, answer: error.wrong, correction: error.right, explanation: error.reason })),
      });
      // Save to local speaking history
      const savedHistoryRaw = localStorage.getItem('hsk_sprechen_history');
      const savedHistory = savedHistoryRaw ? JSON.parse(savedHistoryRaw) : [];
      
      const newSpeakRecord = {
        id: Date.now(),
        topicTitle: selectedSpeakTopic.title,
        date: new Date().toLocaleDateString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        ...evaluationResult
      };

      localStorage.setItem('hsk_sprechen_history', JSON.stringify([newSpeakRecord, ...savedHistory]));
      showToast('Đánh giá bài nói thành công!', 'success');

      // Trigger streak update
      if (onActivityComplete) {
        onActivityComplete();
      }
    } catch (err) {
      console.error(err);
      showToast(err.message || 'Dịch vụ đánh giá đang bận. Vui lòng thử lại sau!', 'error');
    } finally {
      setIsSpeakGrading(false);
    }
  };

  return (
    <div className="page-section">
      <GradingOverlay isActive={isSpeakGrading} message="Đang đánh giá bài Nói bằng AI..." />
      <div className="content-header">
        <div>
          <h1 className="content-title">HSK Speaking Trainer</h1>
          <p className="content-subtitle">Luyện hội thoại và mô phỏng phản xạ trong phần thi Nói HSK/HSKK.</p>
        </div>
      </div>

      <div className="dashboard-grid">
        {/* Left Column: Topic & Instructions */}
        <div className="col-4 glass-panel panel anim-slide-left">
          <div className="form-group">
            <label className="form-label" htmlFor="speak-topic-select">Chọn Đề thi Nói</label>
            <select 
              id="speak-topic-select" 
              className="form-control" 
              value={selectedSpeakTopic.id}
              onChange={handleTopicChange}
            >
              {SPRECHEN_TOPICS.map(t => (
                <option key={t.id} value={t.id}>[{t.level}] {t.title}</option>
              ))}
            </select>
          </div>


          {(selectedSpeakTopic.level === 'HSK 4' || selectedSpeakTopic.level === 'HSK 5') && (
            <div className="inner-card" style={{ marginBottom: 18, padding: 14 }}>
              <div className="flex-between" style={{ marginBottom: 9 }}>
                <span className="font-semibold flex-row gap-xs"><Clock size={15} /> Chuẩn bị cá nhân</span>
                <span className="badge badge-primary">{formatPrep(prepSeconds)}</span>
              </div>
              <p className="text-muted" style={{ fontSize: 12, lineHeight: 1.5, marginBottom: 10 }}>
                10-15 phút chuẩn bị ghi nốt ý chính. Trình bày quan điểm hoặc trả lời câu hỏi giám khảo.
              </p>
              <button className="btn btn-secondary btn-sm" onClick={() => setPrepRunning(value => !value)}>{prepRunning ? 'Tạm dừng' : prepSeconds < 900 ? 'Tiếp tục' : 'Bắt đầu chuẩn bị'}</button>
            </div>
          )}
          <div style={{ marginBottom: '20px' }}>
            <span className="badge badge-secondary" style={{ marginBottom: '10px', display: 'inline-flex' }}>{selectedSpeakTopic.type}</span>
            <p className="font-semibold" style={{ fontSize: '15px', marginBottom: '8px' }}>Tình huống:</p>
            <p className="text-muted" style={{ fontSize: '14px', lineHeight: 1.55, marginBottom: '14px' }}>
              {selectedSpeakTopic.scenario}
            </p>
          </div>

          <div>
            <p className="font-semibold" style={{ fontSize: '14px', marginBottom: '10px' }}>Các ý cần đàm thoại:</p>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              {selectedSpeakTopic.prompts.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Audio Chat Simulator */}
        <div className="col-8 flex-col gap-xl">
          <div className="glass-panel panel flex-col anim-fade-in-up" style={{ minHeight: '420px' }}>
            <h3 style={{ fontSize: '17px', marginBottom: '16px' }}>Giao tiếp âm thanh thực tế</h3>
            
            {/* Chat logs */}
            <div className="chat-container">
              {speakChat.map((msg, idx) => (
                <div 
                  key={msg.id}
                  className={`chat-bubble ${msg.sender === 'ai' ? 'chat-bubble-ai' : 'chat-bubble-user'}`}
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="flex-between" style={{ marginBottom: '4px', alignItems: 'center' }}>
                    <div className={`chat-sender ${msg.sender === 'ai' ? 'chat-sender-ai' : 'chat-sender-user'}`}>
                      {msg.sender === 'ai' ? 'GIÁM KHẢO MÔ PHỎNG' : 'BẠN (HỌC VIÊN)'}
                    </div>
                    {msg.sender === 'ai' && (
                      <button 
                        className="btn-text-primary" 
                        onClick={() => speakText(msg.text)} 
                        title="Đọc phát âm"
                        style={{ display: 'inline-flex', padding: '2px', border: 'none', background: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                      >
                        <Volume2 size={14} className="hover-pulse" />
                      </button>
                    )}
                  </div>
                  <p className="chat-text">{msg.text}</p>
                </div>
              ))}
              {isAiTyping && <TypingIndicator />}
              <div ref={chatEndRef}></div>
            </div>

            {/* Mic & Controller bar */}
            <div className="mic-bar">
              <div>
                {isRecording ? (
                  <div className="recording-indicator">
                    <div className="recording-dot"></div>
                    <span className="recording-text">Hãy nói (tiếng Trung): {recordSeconds}s</span>
                  </div>
                ) : (
                  <span className="mic-hint">Bấm nút và nói qua Microphone của bạn</span>
                )}
              </div>

              <div className="flex-col gap-sm" style={{ width: '100%', alignItems: 'center', marginTop: '10px' }}>
                <div className="flex-row gap-md">
                  {isRecording ? (
                    <button className="btn btn-danger" onClick={handleStopRecord} aria-label="Dừng ghi âm và gửi">
                      <Square size={16} />
                      Dừng & Gửi
                    </button>
                  ) : (
                    <button className="btn btn-primary" onClick={startSpeechRecognition} aria-label="Bắt đầu ghi âm">
                      <Mic size={16} />
                      Bắt đầu nói
                    </button>
                  )}
                  
                  <button 
                    className="btn btn-secondary" 
                    onClick={handleSpeakEvaluation} 
                    disabled={speakChat.length < 4 || isSpeakGrading}
                    aria-label="Xem đánh giá nói"
                  >
                    {isSpeakGrading ? (
                      <>
                        <RefreshCw className="spin-slow" size={16} />
                        Đang phân tích...
                      </>
                    ) : (
                      <>
                        <Award size={16} />
                        Xem Đánh Giá
                      </>
                    )}
                  </button>
                </div>
                <p className="text-muted" style={{ fontSize: '11px', marginTop: '6px', textAlign: 'center' }}>
                  * Lưu ý: Mỗi lượt nói (trò chuyện cùng AI) và hành động "Xem Đánh Giá" sẽ gọi API AI, khấu trừ hạn mức nói (speech minutes) hoặc lượt chấm nâng cao (AI credit) của bạn.
                </p>
              </div>
            </div>
          </div>

          {/* AI Sprechen Results Panel */}
          {speakResult && (
            <div className="glass-panel panel-lg anim-fade-in-up" style={{ borderLeft: '3px solid var(--secondary)' }}>
              <h3 className="section-title">
                <Sparkles className="text-secondary" size={20} />
                Đánh giá khả năng Nói
              </h3>

              {/* Stats Grid */}
              <div className="dashboard-grid" style={{ marginBottom: '24px' }}>
                {[
                  { label: 'Mạch lạc diễn đạt', value: speakResult.fluency, suffix: '%' },
                  { label: 'Từ vựng', value: speakResult.vocabulary, suffix: '%' },
                  { label: 'Ngữ pháp', value: speakResult.grammar, suffix: '%' },
                  { label: 'Đánh giá chung', value: null, text: speakResult.overall, isText: true },
                ].map((s, idx) => (
                  <div key={idx} className={`col-3 inner-card score-criteria anim-fade-in-up anim-delay-${idx + 1}`}>
                    <div className="score-criteria-label">{s.label}</div>
                    <div className="score-criteria-value" style={{ color: s.isText ? 'var(--success)' : 'var(--secondary)' }}>
                      {s.isText ? s.text : <AnimatedScore target={s.value} suffix={s.suffix} />}
                    </div>
                  </div>
                ))}
              </div>

          <div style={{ marginBottom: '20px' }}>
                <p className="font-semibold" style={{ fontSize: '14px', marginBottom: '6px' }}>Nhận xét chi tiết:</p>
                <p className="text-muted" style={{ fontSize: '14px', lineHeight: 1.6 }}>{speakResult.feedback}</p>
              </div>

              <div className="section-divider">
                <p className="font-semibold text-accent" style={{ fontSize: '14px', marginBottom: '12px' }}>Sửa lỗi ngữ pháp nói:</p>
                {speakResult.grammaticalFixes.map((f, idx) => (
                  <div key={idx} className="error-card">
                    <div className="flex-row gap-sm" style={{ marginBottom: '6px' }}>
                      <span className="error-original">"{f.wrong}"</span>
                      <ChevronRight size={12} className="text-muted" />
                      <span className="error-correct">"{f.right}"</span>
                    </div>
                    <p className="error-reason">
                      <strong>Quy tắc:</strong> {f.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
