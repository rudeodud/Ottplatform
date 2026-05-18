import './App.css';
import { Routes, Route } from 'react-router-dom'; // 추가
import Header from './components/header.jsx';
import Sidebar from './components/Sidbar.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import TrendingSection from './components/TrendingSection.jsx';
import NewReleasesSection from './components/NewReleasesSection.jsx';
import MoviesSection from './components/MoviesSection.jsx';
import LoginPage from './pages/LoginPage.jsx'; // 추가
import SignupPage from './pages/SignupPage.jsx'; // 추가

function App() {
  return (
    <div className="App">
      {/* 상단 고정 헤더 */}
      <Header />

      {/* 왼쪽 고정 사이드바 */}
      <Sidebar />

      {/* 라우팅 영역 */}
      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={
            <>
              <HeroBanner />
              <TrendingSection />
              <NewReleasesSection />
              <MoviesSection />
            </>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/homepage" element={
            <>
              <HeroBanner />
              <TrendingSection />
              <NewReleasesSection />
              <MoviesSection />
            </>
          } />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;