import React from 'react';
import styles from './LoginPage.module.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate(); // 추가

  return (
    <div className={styles.loginPageContainer}>
      <form className={styles.loginForm}>
        <h2>로그인 페이지</h2>
        <input
          type="text"
          placeholder="아이디"
          className={styles.loginInput}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className={styles.loginInput}
        />
        <button
          type="submit"
          className={styles.loginButton}
        >
          로그인
        </button>

        {/* <a href> 대신 navigate로 통일 */}
        <button
          type="button"
          className={styles.aLink}
          onClick={() => navigate('/signup')}
        >
          회원가입
        </button>
      </form>
    </div>
  );
}

export default LoginPage;