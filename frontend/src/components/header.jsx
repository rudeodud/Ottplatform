import './components.css';

function Header() {
  return (
    <header>
      <div className="nav-logo">OTT Service</div>
      <nav>
        <a href="/">홈</a>
        <a href="/movies">영화</a>
        <a href="/series">시리즈</a>
      </nav>
    </header>
  );
}

export default Header;