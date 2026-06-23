import { 
  LayoutDashboard, 
  PenTool, 
  Mic, 
  BookOpen, 
  Compass, 
  GraduationCap,
  Bookmark,
  Sun,
  Moon,
  Headphones,
  Languages,
  BarChart3,
  ClipboardCheck,
  Crown,
  Trophy,
  LogIn,
  LogOut,
  Shield,
  Type
} from 'lucide-react';
import { signOutUser } from '../services/authService';

export default function Sidebar({ activeTab, handleTabChange, sidebarOpen, setSidebarOpen, theme, toggleTheme, userProfile, currentUser, onAuthClick, activeFont, setActiveFont }) {
  
  const navGroups = [
    {
      title: 'HỌC CỐT LÕI',
      items: [
        { id: 'diagnostic', icon: ClipboardCheck, label: 'Lộ trình HSK', badge: 'HSK' },
        { id: 'vocab', icon: Compass, label: 'Từ vựng', badge: '词汇' },
        { id: 'grammar', icon: Bookmark, label: 'Ngữ pháp', badge: '语法' },
        { id: 'pinyin', icon: Type, label: 'Phiên âm (Pinyin)', badge: '拼音' }
      ]
    },
    {
      title: 'LUYỆN KỸ NĂNG',
      items: [
        { id: 'horen', icon: Headphones, label: 'Luyện Nghe' },
        { id: 'sprechen', icon: Mic, label: 'Luyện Nói' },
        { id: 'lesen', icon: BookOpen, label: 'Luyện Đọc' },
        { id: 'schreiben', icon: PenTool, label: 'Luyện Viết' },
        { id: 'languageLab', icon: Languages, label: 'Hội thoại chủ đề', badge: 'NEW' }
      ]
    },
    {
      title: 'ÔN THI HSK',
      items: [
        { id: 'progress', icon: BarChart3, label: 'Sổ lỗi & Tiến độ' }
      ]
    },
    {
      title: 'TÀI KHOẢN',
      items: [
        { id: 'pricing', icon: Crown, label: 'Tài khoản / Nâng cấp', badge: 'PRO' }
      ]
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`sidebar-overlay ${sidebarOpen ? 'visible' : ''}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* === SIDEBAR NAVIGATION === */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        
        {/* Mockup Brand Logo */}
        <div className="sidebar-logo" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '24px', gap: '4px', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent) 0%, #7f1d1d 100%)',
              color: '#fff',
              display: 'grid',
              placeItems: 'center',
              fontWeight: 'bold',
              fontSize: '13px',
              fontFamily: 'var(--font-logo)',
              boxShadow: '0 0 10px rgba(185, 28, 28, 0.4)'
            }}>
              汉语
            </div>
            <div>
              <span className="sidebar-logo-text" style={{ fontFamily: 'var(--font-logo)', fontSize: '18px', fontWeight: '700', color: 'var(--text-main)', letterSpacing: '0.5px' }}>HSK Prep</span>
              <div style={{ fontSize: '10px', color: 'var(--text-dark)', fontFamily: 'var(--font-sans)', marginTop: '-2px', fontWeight: '500' }}>汉语学习中心</div>
            </div>
          </div>
        </div>
        
        <nav className="sidebar-menu" style={{ overflowY: 'auto', padding: '16px 14px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Main Dashboard Button (Trang chủ học tập) */}
          <button 
            className={`sidebar-item ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => handleTabChange('dashboard')}
            style={{ 
              width: '100%', 
              background: activeTab === 'dashboard' ? 'linear-gradient(135deg, var(--accent) 0%, #7f1d1d 100%)' : 'transparent',
              border: activeTab === 'dashboard' ? '1px solid rgba(197, 160, 89, 0.3)' : '1px solid transparent',
              boxShadow: activeTab === 'dashboard' ? '0 4px 15px rgba(185, 28, 28, 0.3)' : 'none',
              color: activeTab === 'dashboard' ? '#ffffff' : 'var(--text-muted)',
              borderRadius: '10px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer'
            }}
          >
            <LayoutDashboard size={18} style={{ color: activeTab === 'dashboard' ? '#fff' : 'var(--text-muted)' }} />
            <span style={{ fontWeight: '600', fontSize: '13.5px' }}>Trang chủ học tập</span>
          </button>

          {/* Nav Groups */}
          {navGroups.map(group => (
            <div key={group.title} className="sidebar-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div className="sidebar-group-title" style={{ 
                fontSize: '10px', 
                fontWeight: '700', 
                color: 'var(--text-dark)', 
                paddingLeft: '12px', 
                letterSpacing: '1px',
                marginBottom: '4px',
                fontFamily: 'var(--font-sans)'
              }}>
                {group.title}
              </div>
              {group.items.map(item => {
                const isActive = activeTab === item.id;
                return (
                  <button 
                    key={item.id}
                    className={`sidebar-item ${isActive ? 'active' : ''}`}
                    onClick={() => handleTabChange(item.id)}
                    style={isActive ? {
                      background: 'rgba(197, 160, 89, 0.08)',
                      borderLeft: '3px solid var(--primary)',
                      color: 'var(--text-main)',
                      paddingLeft: '13px',
                      borderRadius: '0 8px 8px 0'
                    } : {}}
                  >
                    <item.icon size={16} />
                    <span style={{ fontSize: '13px' }}>{item.label}</span>
                    {item.badge && (
                      <span className="sidebar-item-badge" style={{ 
                        background: 'rgba(197, 160, 89, 0.12)', 
                        color: 'var(--primary)',
                        border: '1px solid rgba(197, 160, 89, 0.25)',
                        fontSize: '9.5px',
                        padding: '1px 5px',
                        borderRadius: '4px',
                        fontFamily: 'var(--font-sans)',
                        fontWeight: '700',
                        marginLeft: 'auto'
                      }}>{item.badge}</span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
          
          {/* Admin Panel if Admin */}
          {userProfile?.isAdmin && (
            <div className="sidebar-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div className="sidebar-group-title" style={{ 
                fontSize: '10px', 
                fontWeight: '700', 
                color: 'var(--text-dark)', 
                paddingLeft: '12px', 
                letterSpacing: '1px',
                marginBottom: '4px'
              }}>
                QUẢN TRỊ
              </div>
              <button 
                className={`sidebar-item ${activeTab === 'admin' ? 'active' : ''}`}
                onClick={() => handleTabChange('admin')}
                style={activeTab === 'admin' ? {
                  background: 'rgba(197, 160, 89, 0.08)',
                  borderLeft: '3px solid var(--primary)',
                  color: 'var(--text-main)',
                  paddingLeft: '13px',
                  borderRadius: '0 8px 8px 0'
                } : {}}
              >
                <Shield size={16} />
                <span style={{ fontSize: '13px' }}>Admin Panel</span>
                <span className="sidebar-item-badge" style={{ background: 'var(--primary)', color: '#000', marginLeft: 'auto' }}>VIP</span>
              </button>
            </div>
          )}
        </nav>
        
        <div className="sidebar-footer" style={{ display: 'flex', flexDirection: 'column', gap: '14px', borderTop: '1px solid var(--border-color)', padding: '16px' }}>
          {/* Font Switcher Dropdown */}
          <div className="sidebar-font-switcher" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            background: 'var(--bg-elevated)', 
            border: '1px solid var(--border-color)', 
            borderRadius: '12px', 
            padding: '8px 12px' 
          }}>
            <Type size={16} className="text-muted" />
            <select 
              value={activeFont} 
              onChange={(e) => setActiveFont(e.target.value)}
              style={{
                background: 'transparent',
                border: 0,
                color: 'var(--text-main)',
                fontSize: '13px',
                outline: 'none',
                width: '100%',
                cursor: 'pointer',
                fontFamily: 'inherit'
              }}
              aria-label="Chọn phông chữ hiển thị"
            >
              <option value="sans-sc" style={{background: 'var(--bg-main)', color: 'var(--text-main)'}}>Noto Sans (Hiện đại)</option>
              <option value="serif-sc" style={{background: 'var(--bg-main)', color: 'var(--text-main)'}}>Noto Serif (Cổ điển)</option>
              <option value="kaiti" style={{background: 'var(--bg-main)', color: 'var(--text-main)'}}>Thư pháp (Kaiti)</option>
              <option value="handwriting" style={{background: 'var(--bg-main)', color: 'var(--text-main)'}}>Chữ viết tay (Long Cang)</option>
              <option value="playful" style={{background: 'var(--bg-main)', color: 'var(--text-main)'}}>Vui tươi (KuaiLe)</option>
              <option value="elegant" style={{background: 'var(--bg-main)', color: 'var(--text-main)'}}>Thanh lịch (XiaoWei)</option>
              <option value="default" style={{background: 'var(--bg-main)', color: 'var(--text-main)'}}>Hệ thống (Mặc định)</option>
            </select>
          </div>

          {/* Theme Toggle Button */}
          <button 
            className="sidebar-item" 
            onClick={toggleTheme} 
            aria-label="Chuyển đổi giao diện Sáng/Tối"
            style={{ 
              width: '100%', 
              background: 'var(--bg-elevated)', 
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer'
            }}
          >
            {theme === 'dark' ? <Sun size={18} className="text-warning" /> : <Moon size={18} className="text-primary" />}
            <span style={{ marginLeft: '12px', fontSize: '13px', fontWeight: '500' }}>
              {theme === 'dark' ? 'Giao diện Sáng' : 'Giao diện Tối'}
            </span>
          </button>

          {/* User profile / Auth Button */}
          {currentUser ? (
            <div className="sidebar-user" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="sidebar-avatar" style={{ background: 'var(--primary)', color: '#000000', fontWeight: 'bold' }}>
                  {userProfile?.name ? userProfile.name.trim().charAt(0).toUpperCase() : 'U'}
                </div>
                <div>
                  <div className="sidebar-user-name" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100px', fontWeight: '600' }}>
                    {userProfile?.name || 'Học viên'}
                  </div>
                  <div className="badge badge-primary sidebar-user-level" style={{ fontSize: '9px', padding: '2px 6px', marginTop: '3px' }}>
                    {userProfile?.level || 'HSK 3'} {
                      userProfile?.specialty === 'allgemein' ? 'Giao tiếp' :
                      userProfile?.specialty === 'business' ? 'Thương mại' :
                      userProfile?.specialty === 'tourism' ? 'Du lịch' :
                      userProfile?.specialty === 'it' ? 'Công nghệ' :
                      userProfile?.specialty === 'medical' ? 'Y tế' : userProfile?.specialty || ''
                    }
                  </div>
                </div>
              </div>
              <button 
                onClick={signOutUser}
                title="Đăng xuất"
                style={{ 
                  border: 0, 
                  background: 'transparent', 
                  color: 'var(--text-muted)', 
                  cursor: 'pointer',
                  padding: '6px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                className="hover-bg-elevated"
              >
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <button 
              className="sidebar-item" 
              onClick={onAuthClick} 
              style={{ 
                width: '100%', 
                background: 'rgba(197, 160, 89, 0.08)', 
                border: '1px solid var(--primary)',
                borderRadius: '12px',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--primary)',
                fontWeight: '600'
              }}
            >
              <LogIn size={18} />
              <span style={{ marginLeft: '10px', fontSize: '13px' }}>
                Đăng nhập học viên
              </span>
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
