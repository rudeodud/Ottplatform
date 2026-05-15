import './App.css';
import Header from './components/header.jsx';
import Sidebar from './components/Sidbar.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import TrendingSection from './components/TrendingSection.jsx';
import NewReleasesSection from './components/NewReleasesSection.jsx';
import MoviesSection from './components/MoviesSection.jsx';

function App() {
  return (
    <div className="App">
      {/* 상단 고정 헤더 */}
      <Header />

      {/* 왼쪽 고정 사이드바 */}
      <Sidebar />

      {/* 헤더·사이드바 피해서 배치되는 메인 영역 */}
      <div className="main-wrapper">
        <HeroBanner />
        <TrendingSection />
        <NewReleasesSection />
        <MoviesSection /> 
      </div>
    </div>
  );
}

export default App;