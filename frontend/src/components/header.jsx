import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import at the top
import '../styles/components.css';

function Header() {
  const [searchVal, setSearchVal] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // 2. Call the hook at the top level

  return (
    <div>
      <header className="header">
        {/* Left: Logo */}
        <div className="header-left">
          <div className="header-logo">
            <span className="logo-wave" onClick={() => navigate('/homepage')}>RUDEODUD</span>
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
          <button className="login-btn" onClick={() => navigate('/login')}> 
            로그인
          </button>
          <div className="avatar">김</div>
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