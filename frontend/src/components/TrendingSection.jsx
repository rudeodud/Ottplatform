import { useRef } from 'react';
import './styles/section.css';

const ITEMS = [
  { id: 1,  title: '더 글로리',        genre: '드라마',        rating: '9.3', color: '#1a0a2e' },
  { id: 2,  title: '무빙',             genre: '슈퍼히어로',    rating: '9.0', color: '#0a1a2e' },
  { id: 3,  title: '마이 데몬',        genre: '판타지 로맨스', rating: '8.7', color: '#2e0a1a' },
  { id: 4,  title: '경성크리처',       genre: '공포 스릴러',   rating: '8.5', color: '#0a2e0a' },
  { id: 5,  title: '택배기사',         genre: 'SF 액션',       rating: '8.9', color: '#2e1a0a' },
  { id: 6,  title: '지금 거신 전화는', genre: '미스터리',      rating: '8.6', color: '#1a1a2e' },
];

function ContentCard({ item }) {
  return (
    <div className="content-card">
      <div className="card-thumb" style={{ background: item.color }}>
        <div className="card-overlay" />
        <div className="card-play">
          <div className="play-btn">▶</div>
        </div>
        <div className="card-badge">{item.genre}</div>
      </div>
      <div className="card-info">
        <div className="card-title">{item.title}</div>
        <div className="star-rating">
          <div className="star-bar">
            <div className="star-fill" style={{ width: `${(parseFloat(item.rating) / 10) * 100}%` }} />
          </div>
          <span className="star-num">{item.rating}</span>
        </div>
      </div>
    </div>
  );
}

function TrendingSection() {
  const ref = useRef(null);
  const scroll = (dir) => ref.current?.scrollBy({ left: dir * 300, behavior: 'smooth' });

  return (
    <section className="scroll-section">
      <div className="section-header">
        <h2 className="section-title">🔥 지금 인기 있는</h2>
        <button className="see-all">전체보기 →</button>
      </div>
      <div className="scroll-wrapper">
        <button className="scroll-arrow scroll-arrow--left" onClick={() => scroll(-1)}>‹</button>
        <div className="scroll-row" ref={ref}>
          {ITEMS.map(item => <ContentCard key={item.id} item={item} />)}
        </div>
        <button className="scroll-arrow scroll-arrow--right" onClick={() => scroll(1)}>›</button>
      </div>
    </section>
  );
}

export default TrendingSection;