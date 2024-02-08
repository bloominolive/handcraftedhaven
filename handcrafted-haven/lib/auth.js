// lib/auth.js
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const secret = process.env.AUTH_SECRET || 'default_secret'; // Change 'default_secret' to a more secure value

function generateToken(payload) {
    return jwt.sign(payload, secret, { expiresIn: '1h' });
}

function verifyToken(token) {
    return jwt.verify(token, secret);
}

async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

async function comparePasswords(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}

export { generateToken, verifyToken, hashPassword, comparePasswords };
