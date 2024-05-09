const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key';

// JWT 검증 미들웨어
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401); // 토큰 없음

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403); // 토큰 무효
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;