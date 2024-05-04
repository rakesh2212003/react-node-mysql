import jwt from 'jsonwebtoken'

const verifyToken = (req, res) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ error: 'Access denied' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
    } catch (error) {
        res.status(403).json({ error: 'Invalid token' });
    }
}

export default verifyToken;