// src/routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

// 소셜 로그인 API 경로 (Google, Kakao, Naver)
router.post('/google', authController.loginWithGoogle); 
router.post('/kakao', authController.loginWithKakao);
router.post('/naver', authController.loginWithNaver); 

// 회원가입 API 경로
router.post('/signup', authController.signup);

module.exports = router;
