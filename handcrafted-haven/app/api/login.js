// pages/api/login.js
import { comparePasswords } from '../../lib/auth';
import prisma from '../../lib/db';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const passwordMatch = await comparePasswords(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Assuming successful authentication, generate a token
        const token = 'token_generated_here'; // Generate token using your preferred method

        res.status(200).json({ token });
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
