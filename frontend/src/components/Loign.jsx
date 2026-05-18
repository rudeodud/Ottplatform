import '../styles/Login.css';

function Login() {
  return (
    <div className="login-container">
      <h2>로그인</h2>
      <form className="login-form">
        <input type="text" placeholder="아이디" required />
        <input type="password" placeholder="비밀번호" required />
        <button type="submit" className="btn btn--primary">로그인</button>
      </form>
    </div>
  );
}

export default Login;