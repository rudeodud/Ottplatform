import { useState } from 'react';
import './components.css';

function Header() {
  const [searchVal, setSearchVal] = useState('');
  const [activeNav, setActiveNav] = useState('홈');
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['홈', '시리즈', '영화', '오리지널', '라이브'];

  return (
    <div>
      <header className="header">
        {/* Left: Logo + Nav */}
        <div className="header-left">
          <div className="header-logo">
            <span className="logo-wave">WAVE</span>
            <span className="logo-sub">STREAM</span>
          </div>
          {/* Desktop Nav */}
          <nav className="header-nav">
            {navItems.map(nav => (
              <button
                key={nav}
                className={`nav-btn ${activeNav === nav ? 'nav-btn--active' : ''}`}
                onClick={() => setActiveNav(nav)}
              >
                {nav}
              </button>
            ))}
          </nav>
        </div>

        {/* Center Search — desktop only */}
        <div className="header-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchVal}
            onChange={e => setSearchVal(e.target.value)}
          />
        </div>

        {/* Right side */}
        <div className="header-right">
          <button className="login-btn">로그인</button>
          <div className="avatar">김</div>
          {/* Hamburger (mobile only) */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="메뉴 열기"
          >
            <span className={`ham-line ${menuOpen ? 'open-1' : ''}`} />
            <span className={`ham-line ${menuOpen ? 'open-2' : ''}`} />
            <span className={`ham-line ${menuOpen ? 'open-3' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-search">
            <input
              type="text"
              placeholder="Search..."
              value={searchVal}
              onChange={e => setSearchVal(e.target.value)}
            />
          </div>
          {navItems.map(nav => (
            <button
              key={nav}
              className={`mobile-nav-btn ${activeNav === nav ? 'mobile-nav-btn--active' : ''}`}
              onClick={() => { setActiveNav(nav); setMenuOpen(false); }}
            >
              {nav}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;