import { useState } from 'react';
import './styles/components.css';

function Header() {
  const [searchVal, setSearchVal] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="header">
        {/* Left: Logo */}
        <div className="header-left">
          <div className="header-logo">
            <span className="logo-wave">RUDEODUD</span>
          </div>
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
        </div>
      )}
    </div>
  );
}

export default Header;