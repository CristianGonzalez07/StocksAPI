import express, { Request, Response, NextFunction } from 'express';
import { userAuth } from '../controllers/usersController'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;

interface CustomRequest extends Request {
  context?: {
    token?: any;
  };
}

const authenticateToken = (req: CustomRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (token) {
    try {
      const decodedToken = jwt.verify(token, 'secret');

      req.context = {
        token: decodedToken
      };
    } catch (error) {
      // If the token is invalid, it is ignored and not added as a context
    }
  }

  next();
};

const router = express.Router();
router.use(authenticateToken);

router.get('/', async (req, res) => {
  return res.json({ "message": `Welcome to the Stocks API! You can read the documentation at http://localhost:${port}/docs` });
});

router.get('/login', userAuth);

export default router
