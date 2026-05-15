import { useRef } from 'react';
import './styles/section.css';

const ITEMS = [
  { id: 7,  title: '정년이',        genre: '시대극',         rating: '9.2', color: '#2e2a0a' },
  { id: 8,  title: '연인',          genre: '멜로드라마',     rating: '8.8', color: '#2a0a2e' },
  { id: 9,  title: '닥터 슬럼프',   genre: '로맨틱 코미디',  rating: '8.4', color: '#0a2e2a' },
  { id: 10, title: '살인자ㅇ난감',  genre: '스릴러',         rating: '8.7', color: '#1e1e0a' },
  { id: 11, title: '아스달 연대기', genre: '판타지',         rating: '8.3', color: '#0a1e2e' },
  { id: 12, title: '마스크걸',      genre: '누아르',         rating: '8.9', color: '#2e0a0a' },
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

function NewReleasesSection() {
  const ref = useRef(null);
  const scroll = (dir) => ref.current?.scrollBy({ left: dir * 300, behavior: 'smooth' });

  return (
    <section className="scroll-section">
      <div className="section-header">
        <h2 className="section-title">✨ 신작 출시</h2>
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

export default NewReleasesSection;