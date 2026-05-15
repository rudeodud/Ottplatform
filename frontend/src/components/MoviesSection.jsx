import { useRef } from 'react';
import './styles/section.css';

const ITEMS = [
  { id: 13, title: '서울의 봄',   genre: '역사 드라마',   rating: '9.4', color: '#1a2a0a' },
  { id: 14, title: '범죄도시 4',  genre: '액션',          rating: '8.6', color: '#0a0a2e' },
  { id: 15, title: '파묘',        genre: '오컬트 스릴러', rating: '8.8', color: '#1e0a1e' },
  { id: 16, title: '가여운 것들', genre: '판타지',        rating: '8.5', color: '#2e2e0a' },
  { id: 17, title: '듄: 파트 2',  genre: 'SF',            rating: '9.0', color: '#0a2a1a' },
  { id: 18, title: '퓨리오사',    genre: '액션',          rating: '8.3', color: '#2a1a0a' },
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

function MoviesSection() {
  const ref = useRef(null);
  const scroll = (dir) => ref.current?.scrollBy({ left: dir * 300, behavior: 'smooth' });

  return (
    <section className="scroll-section">
      <div className="section-header">
        <h2 className="section-title">🎬 최신 영화</h2>
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

export default MoviesSection;