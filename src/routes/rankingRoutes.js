const express = require('express');
const rankingController = require('../controllers/rankingController');

const router = express.Router();

// 랭킹 보기
router.get('/ranking', rankingController.getRanking);

module.exports = router;
