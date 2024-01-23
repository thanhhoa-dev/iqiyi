const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
    try {
        // lấy token từ header
        const authorizationHeader = req.headers['authorization'];
        if (!authorizationHeader) {
            throw new Error('No token provided');
        }

        const token = authorizationHeader.split(' ')[1];
        if (!token || !token.trim()) {
            throw new Error('No token provided');
        }

        jwt.verify(token.trim(), 'thanhhoa', (err, decoded) => {
            if (err) {
                throw new Error('Unauthorized');
            }
            // lưu thông tin giải mã được vào đối tượng req
            req.user = decoded;
            next();
        });
    } catch (error) {
        console.log("checkToken errors: ", error);
        return res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = checkToken;