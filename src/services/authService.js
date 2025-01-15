const admin = require('firebase-admin');
const axios = require('axios');
const jwt = require('jsonwebtoken'); // JWT 토큰 생성
const config = require('../config/firebaseConfig');

// Firebase 인증 설정
admin.initializeApp();

const generateJWT = (user) => {
  // JWT 토큰 생성
  return jwt.sign(
    { uid: user.uid, email: user.email, name: user.name },
    process.env.JWT_SECRET,  
    { expiresIn: '1h' }
  );
};


// 구글 
exports.loginWithGoogle = async (token) => {
  try {
    const googleUser = await admin.auth().verifyIdToken(token); // Firebase에서 Google ID 토큰 검증
    const user = {
      uid: googleUser.uid,
      email: googleUser.email,
      name: googleUser.name,
      photoUrl: googleUser.picture
    };
    const jwtToken = generateJWT(user);
    return { user, jwtToken };
  } catch (error) {
    throw new Error('Google 로그인 실패: ' + error.message);
  }
};

// 카카오
exports.loginWithKakao = async (token) => {
  try {
    const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const kakaoUser = response.data;
    const user = {
      uid: kakaoUser.id,
      email: kakaoUser.kakao_account.email,
      name: kakaoUser.kakao_account.profile.nickname,
      photoUrl: kakaoUser.kakao_account.profile.thumbnail_image_url
    };
    const jwtToken = generateJWT(user); // JWT 토큰 생성
    return { user, jwtToken };
  } catch (error) {
    throw new Error('Kakao 로그인 실패: ' + error.message);
  }
};

// 네이버
exports.loginWithNaver = async (token) => {
  try {
    const response = await axios.get('https://openapi.naver.com/v1/nid/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const naverUser = response.data.response;
    const user = {
      uid: naverUser.id,
      email: naverUser.email,
      name: naverUser.name,
      photoUrl: naverUser.profile_image
    };
    const jwtToken = generateJWT(user); 
    return { user, jwtToken };
  } catch (error) {
    throw new Error('Naver 로그인 실패: ' + error.message);
  }
};

// 회원가입
exports.signup = async (userData) => {
  try {
    const newUser = await admin.auth().createUser({
      email: userData.email,
      password: userData.password,
      displayName: userData.name
    });
    const user = {
      uid: newUser.uid,
      email: newUser.email,
      name: newUser.displayName
    };
    const jwtToken = generateJWT(user); 
    return { user, jwtToken };
  } catch (error) {
    throw new Error('회원가입 실패: ' + error.message);
  }
};
