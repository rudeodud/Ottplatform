const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('api/signup', (req, res) => {
  // 회원가입 로직 처리
  res.send('회원가입 성공');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});