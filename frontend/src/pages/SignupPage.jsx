import React from 'react';
import styles from './Signup.module.css';          // CSS 파일명 확인
import { useNavigate } from 'react-router-dom';   // useNavigate import 추가

function SignupPage() {                            // 컴포넌트 정의
  const navigate = useNavigate();

  return (
    <div className={styles.signupPageContainer}>
      <form className={styles.signupForm}>
        <h2>회원<span>가입</span></h2>
        <div className={styles.divider} />

        <div className={styles.inputWrapper}>
          <label className={styles.fieldLabel}>아이디</label>
          <input type="text" placeholder="아이디 입력" className={styles.signupInput} />
        </div>

        <div className={styles.inputWrapper}>
          <label className={styles.fieldLabel}>이메일</label>
          <input type="email" placeholder="이메일 입력" className={styles.signupInput} />
        </div>

        <div className={styles.inputWrapper}>
          <label className={styles.fieldLabel}>비밀번호</label>
          <input type="password" placeholder="비밀번호 입력" className={styles.signupInput} />
        </div>

        <button type="submit" className={styles.signupButton}>가입하기</button>

        <button type="button" className={styles.loginLink} onClick={() => navigate('/login')}>
          이미 계정이 있으신가요? <strong>로그인</strong>
        </button>
      </form>
    </div>
  );
}

export default SignupPage;                         // default export 추가