import { useState, useEffect } from 'react';
import { Play, Volume2, HelpCircle, Award, CheckCircle2, XCircle, VolumeX, Sparkles, Languages } from 'lucide-react';
import { speak, stop } from '../services/ttsService';

const INITIALS = [
  { letter: 'b', vi: 'p (nhẹ, không bật hơi)', ex: 'bā (八 - Tám)', tts: '八' },
  { letter: 'p', vi: 'p (bật hơi mạnh)', ex: 'pō (坡 - Dốc)', tts: '坡' },
  { letter: 'm', vi: 'm (như tiếng Việt)', ex: 'mā (妈 - Mẹ)', tts: '妈' },
  { letter: 'f', vi: 'f (như tiếng Việt)', ex: 'fó (佛 - Phật)', tts: '佛' },
  { letter: 'd', vi: 't (không bật hơi)', ex: 'dé (得 - Đạt)', tts: '得' },
  { letter: 't', vi: 't (bật hơi mạnh)', ex: 'tè (特 - Đặc biệt)', tts: '特' },
  { letter: 'n', vi: 'n (như tiếng Việt)', ex: 'nè (讷 - Chậm chạp)', tts: '讷' },
  { letter: 'l', vi: 'l (như tiếng Việt)', ex: 'lè (勒 - Ghìm cương)', tts: '勒' },
  { letter: 'g', vi: 'c/k (không bật hơi)', ex: 'gē (哥 - Anh trai)', tts: '哥' },
  { letter: 'k', vi: 'kh (bật hơi mạnh)', ex: 'kē (科 - Khoa học)', tts: '科' },
  { letter: 'h', vi: 'h/kh (nhẹ hơn kh Việt)', ex: 'hē (喝 - Uống)', tts: '喝' },
  { letter: 'j', vi: 'ch (không bật hơi, mặt lưỡi)', ex: 'jī (鸡 - Gà)', tts: '鸡' },
  { letter: 'q', vi: 'ch (bật hơi mạnh, mặt lưỡi)', ex: 'qī (七 - Bảy)', tts: '七' },
  { letter: 'x', vi: 'x (mặt lưỡi sát)', ex: 'xī (西 - Tây)', tts: '西' },
  { letter: 'zh', vi: 'tr (không bật hơi, uốn lưỡi)', ex: 'zhī (知 - Biết)', tts: '知' },
  { letter: 'ch', vi: 'tr (bật hơi mạnh, uốn lưỡi)', ex: 'chī (吃 - Ăn)', tts: '吃' },
  { letter: 'sh', vi: 's (uốn lưỡi sát)', ex: 'shī (诗 - Thơ)', tts: '诗' },
  { letter: 'r', vi: 'r (uốn lưỡi, không rung mạnh)', ex: 'rì (日 - Ngày)', tts: '日' },
  { letter: 'z', vi: 'ch (không bật hơi, đầu lưỡi)', ex: 'zī (资 - Tư bản)', tts: '资' },
  { letter: 'c', vi: 'ts (bật hơi đầu lưỡi)', ex: 'cī (雌 - Cái/Mái)', tts: '雌' },
  { letter: 's', vi: 's (đầu lưỡi sát)', ex: 'sī (思 - Nghĩ)', tts: '思' }
];

const FINALS = [
  { letter: 'a', vi: 'a (như tiếng Việt)', ex: 'ā (啊 - A)', tts: '啊' },
  { letter: 'o', vi: 'o/ua (phát âm tròn môi)', ex: 'ō (喔 - Ô)', tts: '喔' },
  { letter: 'e', vi: 'ơ/ưa', ex: 'é (额 - Trán)', tts: '额' },
  { letter: 'i', vi: 'i (sau z,c,s,zh,ch,sh,r đọc là ư)', ex: 'yī (衣 - Áo)', tts: '衣' },
  { letter: 'u', vi: 'u (như tiếng Việt)', ex: 'wū (乌 - Đen)', tts: '乌' },
  { letter: 'ü', vi: 'uy (tròn môi)', ex: 'yú (鱼 - Cá)', tts: '鱼' },
  { letter: 'ai', vi: 'ai (như tiếng Việt)', ex: 'āi (哀 - Thương tiếc)', tts: '哀' },
  { letter: 'ei', vi: 'ây', ex: 'ēi (诶 - Này)', tts: '诶' },
  { letter: 'ui', vi: 'uây', ex: 'wēi (威 - Uy vũ)', tts: '威' },
  { letter: 'ao', vi: 'ao (như tiếng Việt)', ex: 'áo (熬 - Hầm)', tts: '熬' },
  { letter: 'ou', vi: 'âu', ex: 'ōu (欧 - Châu Âu)', tts: '欧' },
  { letter: 'iu', vi: 'iêu', ex: 'yōu (优 - Ưu tú)', tts: '优' },
  { letter: 'ie', vi: 'iê', ex: 'yē (耶 - Da)', tts: '耶' },
  { letter: 'üe', vi: 'uyê', ex: 'yuē (约 - Hẹn)', tts: '约' },
  { letter: 'er', vi: 'ơ (uốn lưỡi)', ex: 'ěr (耳 - Tai)', tts: '耳' },
  { letter: 'an', vi: 'an (như tiếng Việt)', ex: 'ān (安 - An)', tts: '安' },
  { letter: 'en', vi: 'ân', ex: 'ēn (恩 - Ơn)', tts: '恩' },
  { letter: 'in', vi: 'in (như tiếng Việt)', ex: 'yīn (因 - Nguyên nhân)', tts: '因' },
  { letter: 'un', vi: 'uân', ex: 'wēn (温 - Ấm áp)', tts: '温' },
  { letter: 'ün', vi: 'uyn', ex: 'yún (云 - Mây)', tts: '云' },
  { letter: 'ang', vi: 'ang (như tiếng Việt)', ex: 'áng (昂 - Ngẩng)', tts: '昂' },
  { letter: 'eng', vi: 'âng', ex: 'hēng (哼 - Hừm)', tts: '亨' },
  { letter: 'ing', vi: 'inh', ex: 'yīng (英 - Anh hùng)', tts: '英' },
  { letter: 'ong', vi: 'ung', ex: 'wēng (翁 - Ông già)', tts: '翁' }
];

const TONE_SAMPLES = [
  { tone: 1, symbol: 'ā', desc: 'Thanh 1 (Thanh ngang): Đọc cao, bằng phẳng.', ex: 'mā (妈 - Mẹ)', char: '妈' },
  { tone: 2, symbol: 'á', desc: 'Thanh 2 (Thanh sắc): Đọc lên giọng từ trung bình lên cao.', ex: 'má (麻 - Gai)', char: '麻' },
  { tone: 3, symbol: 'ǎ', desc: 'Thanh 3 (Thanh hỏi): Đọc xuống giọng rồi vòng lên cao.', ex: 'mǎ (马 - Ngựa)', char: '马' },
  { tone: 4, symbol: 'à', desc: 'Thanh 4 (Thanh nặng dứt khoát): Đọc đi xuống rất nhanh và mạnh.', ex: 'mà (骂 - Mắng)', char: '骂' },
  { tone: 5, symbol: 'a', desc: 'Thanh nhẹ: Đọc ngắn, nhẹ và nhanh.', ex: 'ma (吗 - Trợ từ hỏi)', char: '吗' }
];

// Tone guessing challenge syllables
const GAME_SYLLABLES = [
  { name: 'ma', characters: ['妈', '麻', '马', '骂'], pinyins: ['mā', 'má', 'mǎ', 'mà'], desc: ['Mẹ', 'Gai/Tê', 'Ngựa', 'Mắng'] },
  { name: 'ba', characters: ['八', '拔', '把', '爸'], pinyins: ['bā', 'bá', 'bǎ', 'bà'], desc: ['Tám', 'Nhổ/Kéo', 'Cầm/Giữ', 'Bố'] },
  { name: 'yi', characters: ['衣', '姨', '椅', '译'], pinyins: ['yī', 'yí', 'yǐ', 'yì'], desc: ['Áo', 'Dì', 'Ghế', 'Dịch'] },
  { name: 'ta', characters: ['他', '沓', '塔', '踏'], pinyins: ['tā', 'tá', 'tǎ', 'tà'], desc: ['Anh ấy', 'Chồng giấy', 'Tháp', 'Giẫm'] }
];

export default function PinyinView({ showToast }) {
  const [activeSubTab, setActiveSubTab] = useState('initials'); // 'initials' | 'finals' | 'tones' | 'reader'
  const [isPlaying, setIsPlaying] = useState(null);
  const [readerText, setReaderText] = useState('你好，祝你今天学习愉快！');
  
  // Game state
  const [gameState, setGameState] = useState({
    active: false,
    syllableIndex: 0,
    correctTone: 1, // 1 to 4
    guessedTone: null,
    answered: false,
    score: 0,
    streak: 0
  });

  const playSound = (text, id) => {
    stop();
    setIsPlaying(id);
    speak(text, {
      rate: 0.85,
      onEnd: () => setIsPlaying(null),
      onError: () => setIsPlaying(null)
    });
  };

  const handleReadText = () => {
    if (!readerText.trim()) return showToast?.('Vui lòng nhập chữ Hán cần phát âm.', 'warning');
    playSound(readerText, 'reader');
  };

  const startNewGameQuestion = () => {
    const syllableIndex = Math.floor(Math.random() * GAME_SYLLABLES.length);
    const correctTone = Math.floor(Math.random() * 4) + 1; // 1, 2, 3, 4
    
    setGameState(prev => ({
      ...prev,
      active: true,
      syllableIndex,
      correctTone,
      guessedTone: null,
      answered: false
    }));

    // Auto play the sound after a short delay
    setTimeout(() => {
      const char = GAME_SYLLABLES[syllableIndex].characters[correctTone - 1];
      playSound(char, 'game');
    }, 300);
  };

  const playCurrentGameSound = () => {
    if (!gameState.active) return;
    const char = GAME_SYLLABLES[gameState.syllableIndex].characters[gameState.correctTone - 1];
    playSound(char, 'game');
  };

  const handleGuess = (toneNum) => {
    if (gameState.answered) return;
    
    const isCorrect = toneNum === gameState.correctTone;
    const newScore = isCorrect ? gameState.score + 10 : gameState.score;
    const newStreak = isCorrect ? gameState.streak + 1 : 0;
    
    setGameState(prev => ({
      ...prev,
      guessedTone: toneNum,
      answered: true,
      score: newScore,
      streak: newStreak
    }));

    const correctPinyin = GAME_SYLLABLES[gameState.syllableIndex].pinyins[gameState.correctTone - 1];
    const meaning = GAME_SYLLABLES[gameState.syllableIndex].desc[gameState.correctTone - 1];

    if (isCorrect) {
      showToast?.(`Chính xác! Đáp án là ${correctPinyin} (${meaning})`, 'success');
    } else {
      showToast?.(`Sai rồi! Từ phát âm là ${correctPinyin} (${meaning})`, 'error');
    }
  };

  return (
    <div className="page-section">
      <div className="content-header">
        <div>
          <h1 className="content-title">Học Phát Âm & Phiên Âm (Pinyin)</h1>
          <p className="content-subtitle">Làm quen với hệ thống phiên âm tiếng Trung, luyện nghe phân biệt 4 thanh điệu cốt lõi.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="glass-panel panel listening-mode-bar" style={{ marginBottom: 20 }}>
        <div className="mode-switch" role="tablist" aria-label="Menu phiên âm">
          <button 
            className={`mode-button ${activeSubTab === 'initials' ? 'active' : ''}`} 
            onClick={() => { stop(); setActiveSubTab('initials'); }}
            style={{ padding: '8px 16px', borderRadius: '8px' }}
          >
            Thanh mẫu (Initials)
          </button>
          <button 
            className={`mode-button ${activeSubTab === 'finals' ? 'active' : ''}`} 
            onClick={() => { stop(); setActiveSubTab('finals'); }}
            style={{ padding: '8px 16px', borderRadius: '8px' }}
          >
            Vận mẫu (Finals)
          </button>
          <button 
            className={`mode-button ${activeSubTab === 'tones' ? 'active' : ''}`} 
            onClick={() => { stop(); setActiveSubTab('tones'); }}
            style={{ padding: '8px 16px', borderRadius: '8px' }}
          >
            Thanh điệu (Tones Trainer)
          </button>
          <button 
            className={`mode-button ${activeSubTab === 'reader' ? 'active' : ''}`} 
            onClick={() => { stop(); setActiveSubTab('reader'); }}
            style={{ padding: '8px 16px', borderRadius: '8px' }}
          >
            Đọc chữ Hán (TTS Reader)
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      
      {/* 1. INITIALS */}
      {activeSubTab === 'initials' && (
        <div className="glass-panel panel-lg">
          <h2 style={{ fontSize: '18px', marginBottom: '6px' }}>Bảng Thanh Mẫu (21 Phụ âm đầu)</h2>
          <p className="text-muted" style={{ fontSize: '13.5px', marginBottom: '20px' }}>Bấm vào từng chữ để nghe phát âm chuẩn bằng giọng bản xứ.</p>
          
          <div className="dashboard-grid" style={{ gap: '16px' }}>
            {INITIALS.map((item, idx) => (
              <div 
                key={item.letter} 
                className="col-3 inner-card flex-between" 
                style={{ 
                  padding: '14px 18px', 
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: isPlaying === `init-${idx}` ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                  transition: 'all 0.2s ease'
                }}
              >
                <div>
                  <strong style={{ fontSize: '24px', color: 'var(--primary)' }}>{item.letter}</strong>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>{item.vi}</div>
                  <div style={{ fontSize: '11px', color: 'var(--success)', marginTop: '6px', fontWeight: '500' }}>Ví dụ: {item.ex}</div>
                </div>
                <button 
                  className={`btn ${isPlaying === `init-${idx}` ? 'btn-primary' : 'btn-secondary'} btn-sm`} 
                  onClick={() => playSound(item.tts, `init-${idx}`)}
                  style={{ borderRadius: '50%', width: '36px', height: '36px', padding: 0, display: 'grid', placeItems: 'center' }}
                  aria-label={`Nghe thanh mẫu ${item.letter}`}
                >
                  <Volume2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. FINALS */}
      {activeSubTab === 'finals' && (
        <div className="glass-panel panel-lg">
          <h2 style={{ fontSize: '18px', marginBottom: '6px' }}>Bảng Vận Mẫu (24 Nguyên âm đơn & kép)</h2>
          <p className="text-muted" style={{ fontSize: '13.5px', marginBottom: '20px' }}>Bấm vào từng âm để nghe cách ghép âm chuẩn xác.</p>
          
          <div className="dashboard-grid" style={{ gap: '16px' }}>
            {FINALS.map((item, idx) => (
              <div 
                key={item.letter} 
                className="col-3 inner-card flex-between" 
                style={{ 
                  padding: '14px 18px', 
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: isPlaying === `final-${idx}` ? '1px solid var(--primary)' : '1px solid var(--border-color)',
                  transition: 'all 0.2s ease'
                }}
              >
                <div>
                  <strong style={{ fontSize: '22px', color: 'var(--primary)' }}>{item.letter}</strong>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>{item.vi}</div>
                  <div style={{ fontSize: '11px', color: 'var(--success)', marginTop: '6px', fontWeight: '500' }}>Ví dụ: {item.ex}</div>
                </div>
                <button 
                  className={`btn ${isPlaying === `final-${idx}` ? 'btn-primary' : 'btn-secondary'} btn-sm`} 
                  onClick={() => playSound(item.tts, `final-${idx}`)}
                  style={{ borderRadius: '50%', width: '36px', height: '36px', padding: 0, display: 'grid', placeItems: 'center' }}
                  aria-label={`Nghe vận mẫu ${item.letter}`}
                >
                  <Volume2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. TONES TRAINER */}
      {activeSubTab === 'tones' && (
        <div className="dashboard-grid">
          {/* Guide Column */}
          <div className="col-6 flex-col gap-md">
            <div className="glass-panel panel-lg">
              <h2 style={{ fontSize: '18px', marginBottom: '8px' }}>Hệ thống 4 Thanh điệu (Thanh 1 - 4)</h2>
              <p className="text-muted" style={{ fontSize: '13.5px', marginBottom: '20px' }}>
                Tiếng Trung có 4 thanh điệu chính và 1 thanh nhẹ. Thay đổi thanh điệu sẽ thay đổi hoàn toàn nghĩa của từ.
              </p>
              
              <div className="flex-col gap-md">
                {TONE_SAMPLES.map((sample, idx) => (
                  <div 
                    key={sample.tone} 
                    className="inner-card flex-between"
                    style={{ 
                      padding: '14px 18px', 
                      background: 'rgba(255, 255, 255, 0.02)', 
                      borderRadius: '12px', 
                      border: isPlaying === `sample-${idx}` ? '1px solid var(--primary)' : '1px solid var(--border-color)' 
                    }}
                  >
                    <div style={{ maxWidth: '80%' }}>
                      <span className="badge badge-secondary" style={{ fontSize: '11px', fontWeight: 'bold' }}>
                        Ký hiệu: {sample.symbol}
                      </span>
                      <h4 style={{ margin: '6px 0', fontSize: '14px' }}>{sample.desc}</h4>
                      <div style={{ fontSize: '13px', color: 'var(--success)', fontWeight: '500' }}>Ví dụ: {sample.ex}</div>
                    </div>
                    <button 
                      className={`btn ${isPlaying === `sample-${idx}` ? 'btn-primary' : 'btn-secondary'}`}
                      onClick={() => playSound(sample.char, `sample-${idx}`)}
                      style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0, display: 'grid', placeItems: 'center' }}
                      aria-label={`Nghe ví dụ thanh ${sample.tone}`}
                    >
                      <Volume2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Game Challenge Column */}
          <div className="col-6 flex-col gap-md">
            <div className="glass-panel panel-lg flex-col gap-md" style={{ justifyContent: 'center', minHeight: '400px' }}>
              <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                <span className="badge badge-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <Sparkles size={12} /> Thử thách kỹ năng nghe
                </span>
                <h3 style={{ fontSize: '18px', marginTop: '8px' }}>Phân biệt Thanh điệu</h3>
                <p className="text-muted" style={{ fontSize: '13px' }}>Nghe phát âm chữ Hán và đoán xem từ đó thuộc thanh điệu nào.</p>
              </div>

              {gameState.active ? (
                <div style={{ textAlign: 'center', padding: '20px 0' }} className="flex-col gap-md">
                  <div className="audio-player-card" style={{ width: '220px', margin: '0 auto', padding: '24px 16px', background: 'var(--bg-elevated)', borderRadius: '16px' }}>
                    <div className={`audio-visualizer-disc ${isPlaying === 'game' ? 'disc-spinning' : ''}`} style={{ width: '64px', height: '64px', margin: '0 auto 12px auto', borderRadius: '50%', background: 'var(--primary-soft)', border: '3px solid var(--border-color)', display: 'grid', placeItems: 'center' }}>
                      <Volume2 size={24} className="text-primary" />
                    </div>
                    <button className="btn btn-primary btn-sm" onClick={playCurrentGameSound} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <Volume2 size={14} /> Phát lại âm thanh
                    </button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', maxWidth: '300px', margin: '14px auto 0 auto' }}>
                    {[1, 2, 3, 4].map(toneNum => {
                      const isCorrect = toneNum === gameState.correctTone;
                      const isGuessed = toneNum === gameState.guessedTone;
                      
                      let btnStyle = { border: '1px solid var(--border-color)', padding: '14px', borderRadius: '10px', background: 'transparent', color: 'var(--text-main)', cursor: 'pointer', fontWeight: 'bold' };
                      let displayIcon = null;

                      if (gameState.answered) {
                        if (isCorrect) {
                          btnStyle.border = '1px solid var(--success)';
                          btnStyle.background = 'var(--success-soft)';
                          btnStyle.color = 'var(--success)';
                          displayIcon = <CheckCircle2 size={14} style={{ marginLeft: '4px' }} />;
                        } else if (isGuessed && !isCorrect) {
                          btnStyle.border = '1px solid var(--accent)';
                          btnStyle.background = 'var(--accent-soft)';
                          btnStyle.color = 'var(--accent)';
                          displayIcon = <XCircle size={14} style={{ marginLeft: '4px' }} />;
                        }
                      } else if (isGuessed) {
                        btnStyle.border = '1px solid var(--primary)';
                        btnStyle.background = 'var(--primary-soft)';
                      }

                      return (
                        <button 
                          key={toneNum} 
                          style={btnStyle}
                          onClick={() => handleGuess(toneNum)}
                          disabled={gameState.answered}
                          className="flex-between"
                        >
                          <span>Thanh {toneNum}</span>
                          {displayIcon}
                        </button>
                      );
                    })}
                  </div>

                  {gameState.answered && (
                    <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-color)', maxWidth: '300px', margin: '10px auto 0 auto', fontSize: '13px' }}>
                      <p style={{ margin: '0 0 6px 0' }}>
                        Từ phát âm: <strong style={{ color: 'var(--primary)', fontSize: '18px' }}>{GAME_SYLLABLES[gameState.syllableIndex].characters[gameState.correctTone - 1]}</strong>
                      </p>
                      <p style={{ margin: '0 0 6px 0' }}>
                        Phiên âm: <strong>{GAME_SYLLABLES[gameState.syllableIndex].pinyins[gameState.correctTone - 1]}</strong>
                      </p>
                      <p style={{ margin: 0 }}>
                        Ý nghĩa: <em>{GAME_SYLLABLES[gameState.syllableIndex].desc[gameState.correctTone - 1]}</em>
                      </p>
                    </div>
                  )}

                  <div className="flex-row" style={{ justifyContent: 'center', marginTop: '16px' }}>
                    <button className="btn btn-secondary btn-sm" onClick={startNewGameQuestion}>
                      {gameState.answered ? 'Câu tiếp theo' : 'Bỏ qua câu này'}
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px 0' }} className="flex-col gap-md">
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--primary-soft)', display: 'grid', placeItems: 'center', margin: '0 auto 16px auto' }}>
                    <HelpCircle size={36} className="text-primary" />
                  </div>
                  <button className="btn btn-primary" onClick={startNewGameQuestion} style={{ margin: '0 auto', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Play size={16} /> Bắt đầu luyện tập nghe
                  </button>
                </div>
              )}

              {/* Stats */}
              <div className="flex-between inner-card" style={{ padding: '12px 18px', background: 'rgba(255, 255, 255, 0.01)', borderRadius: '10px', marginTop: 'auto', fontSize: '13px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Award size={14} className="text-warning" /> Điểm luyện tập: <strong>{gameState.score}</strong>
                </span>
                <span>
                  Chuỗi đúng liên tiếp: <strong>{gameState.streak} 🔥</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. TTS READER */}
      {activeSubTab === 'reader' && (
        <div className="glass-panel panel-lg">
          <h2 style={{ fontSize: '18px', marginBottom: '8px' }}>Trình Đọc phát âm Chữ Hán</h2>
          <p className="text-muted" style={{ fontSize: '13.5px', marginBottom: '20px' }}>
            Nhập bất kỳ đoạn văn bản chữ Hán (tiếng Trung giản thể) để hệ thống AI phát âm chuẩn giúp bạn tự luyện nói theo.
          </p>

          <div className="flex-col gap-md">
            <div>
              <label className="form-label" htmlFor="pinyin-reader-input">Văn bản tiếng Trung:</label>
              <textarea 
                id="pinyin-reader-input" 
                className="form-control" 
                value={readerText} 
                onChange={(e) => setReaderText(e.target.value)}
                placeholder="请输入中文内容..."
                style={{ minHeight: '140px', fontSize: '16px', lineHeight: '1.6', borderRadius: '12px', padding: '14px' }}
              />
            </div>

            <div className="flex-between">
              <span className="text-muted" style={{ fontSize: '12.5px' }}>
                Khuyên dùng: Nhập câu ngắn, các đại từ hoặc chữ Hán từ phần từ vựng để luyện ngữ điệu.
              </span>
              <div className="flex-row gap-sm">
                {isPlaying === 'reader' ? (
                  <button className="btn btn-danger" onClick={() => stop()}>
                    <VolumeX size={15} /> Dừng đọc
                  </button>
                ) : (
                  <button className="btn btn-primary" onClick={handleReadText}>
                    <Volume2 size={15} /> Phát âm (Đọc to)
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
