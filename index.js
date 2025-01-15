require('dotenv').config();
const express = require('express');
const authRoutes = require('./src/routes/authRoutes');
// const trailsRoutes = require('./src/routes/trailsRoutes');
// const rankingRoutes = require('./src/routes/rankingRoutes');
// const recommendationRoutes = require('./src/routes/recommendationRoutes');

const app = express();

// 미들웨어 설정
app.use(express.json());

// 라우팅 설정
app.use('/api/auth', authRoutes);
// app.use('/api/trails', trailsRoutes);
// app.use('/api/ranking', rankingRoutes);
// app.use('/api/recommendations', recommendationRoutes);

// 환경 변수 체크
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  console.error('오류: .env 파일에 JWT_SECRET이 설정되어 있지 않습니다.');
  process.exit(1);  // 서버가 시작되기 전에 종료
}

// 서버 시작
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`${PORT}번 포트에서 서버가 실행 중입니다.`);
});
