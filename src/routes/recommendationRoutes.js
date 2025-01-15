const express = require('express');
const recommendationController = require('../controllers/recommendationController');

const router = express.Router();

// 추천 산책로 보기
router.get('/recommend', recommendationController.getRecommendations);

module.exports = router;
