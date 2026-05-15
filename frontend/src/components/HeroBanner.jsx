import './styles/hero.css';

const HERO = {
  title: '오징어 게임',
  subtitle: 'SEASON 3',
  description: '456명의 빚진 사람들이 목숨을 건 서바이벌 게임에 초대받는다. 최후의 승자에게 주어지는 상금은 456억 원.',
  tags: ['스릴러', '드라마', '서바이벌'],
  year: '2025',
  episodes: '9 에피소드',
  rating: '9.1',
};

function HeroBanner() {
  return (
    <div className="hero">
      <div className="hero-bg" />
      <div className="hero-gradient" />
      <div className="hero-body">
        <div className="hero-badges">
          <span className="badge badge--red">ORIGINAL</span>
          <span className="badge badge--outline">NEW</span>
        </div>
        <p className="hero-subtitle">{HERO.subtitle}</p>
        <h1 className="hero-title">{HERO.title}</h1>
        <div className="hero-meta">
          {HERO.tags.map(t => <span key={t} className="hero-tag">{t}</span>)}
          <span className="hero-dot">·</span>
          <span className="hero-info">{HERO.year}</span>
          <span className="hero-dot">·</span>
          <span className="hero-info">{HERO.episodes}</span>
        </div>
        <p className="hero-desc">{HERO.description}</p>
        <div className="hero-actions">
          <button className="btn btn--primary">▶ 지금 보기</button>
          <button className="btn btn--ghost">+ 내 목록</button>
          <div className="hero-rating">
            <span className="rating-star">★</span>
            <span className="rating-num">{HERO.rating}</span>
            <span className="rating-base">/10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;