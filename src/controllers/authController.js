const authService = require('../services/authService');

// 구글
exports.loginWithGoogle = async (req, res) => {
    try {
        const token = req.body.token; // 클라이언트에서 받은 Google 토큰
        const { user, jwtToken } = await authService.loginWithGoogle(token);
        res.status(200).json({ user, token: jwtToken });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 카카오
exports.loginWithKakao = async (req, res) => {
    try {
        const token = req.body.token; // 클라이언트에서 받은 Kakao 토큰
        const { user, jwtToken } = await authService.loginWithKakao(token);
        res.status(200).json({ user, token: jwtToken});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 네이버
exports.loginWithNaver = async (req, res) => {
    try {
        const token = req.body.token; // 클라이언트에서 받은 Naver 토큰
        const { user, jwtToken} = await authService.loginWithNaver(token);
        res.status(200).json({ user, token: jwtToken});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 회원가입
exports.signup = async (req, res) => {
    try {
        const userData = req.body; // 클라이언트에서 받은 회원가입 데이터
        const { user, jwtToken } = await authService.signup(userData);
        res.status(201).json({ user, token: jwtToken });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};