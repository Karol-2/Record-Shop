import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

const secretKey = '123456';

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email === 'user@wp.pl' && password === 'password') {

    const accessToken = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
    const refeshToken = jwt.sign({ email}, secretKey, {expiresIn: '2h'})
    res.status(200).json({ accessToken: accessToken , refreshToken: refeshToken});
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

export default router;
