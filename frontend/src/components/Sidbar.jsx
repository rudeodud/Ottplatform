import { useState } from 'react';
import './styles/Sidbar.css';

function Sidebar() {
  const [activeNav, setActiveNav] = useState('홈');

  const navItems = [
    { label: '홈',      icon: '🏠' },
    { label: '영화',    icon: '🎬' },
    { label: '시리즈',  icon: '📺' },
    { label: '오리지널',icon: '⭐' },
    { label: '라이브',  icon: '🔴' },
    { label: '내 목록', icon: '📌' },
  ];

  return (
    <aside className="sidebar">
      {navItems.map(({ label, icon }) => (
        <button
          key={label}
          className={`sidebar-btn ${activeNav === label ? 'sidebar-btn--active' : ''}`}
          onClick={() => setActiveNav(label)}
        >
          <span className="sidebar-icon">{icon}</span>
          <span className="sidebar-label">{label}</span>
        </button>
      ))}
    </aside>
  );
}

export default Sidebar;