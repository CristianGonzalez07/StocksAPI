import { Request, Response } from 'express';
import jsonwebtoken, { Secret } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import db from '../lib/db';
import dotenv from 'dotenv';
import crypto from 'crypto';

function generateUniqueHash(data: string): string {
  const hash = crypto.createHash('sha256');
  hash.update(data);
  return hash.digest('hex');
}

dotenv.config();

const secret: Secret = process.env.SECRET || '';

export const userAuth = async (req: Request, res: Response) => {
  interface User {
    id: string;
    username: string;
    password: string;
    create_time: Date;
  }

  const { username, password }: { username: string; password: string } = req.query as {
    username: string;
    password: string;
  };

  let queryResults: any;
  try {
    const query = `SELECT * FROM Users WHERE username='${username}';`;
    const [rows] = await db.promise().query(query);
    queryResults = rows;
    const user: User = queryResults[0];
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      const token = jsonwebtoken.sign({ id: user.id, name: user.username }, secret, {
        expiresIn: '1h',
        algorithm: 'HS256',
        noTimestamp: true,
      });
      res.json({
        id: user.id,
        name: user.username,
        token,
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('Error executing the query:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const userSignUp = async (req: Request, res: Response) => {
  interface HashData {
    username: string;
    password: string;
    create_time: Date;
  }
  const { username, password }: { username: string; password: string } = req.body as {
    username: string;
    password: string;
  };
  
  let encryptedPassword: string = '';
  await bcrypt.hash(password, 10).then((hash) =>{
    encryptedPassword = hash
  });

  let hashData: HashData = {
    username,
    password: encryptedPassword,
    create_time: new Date(),
  }
  const id = generateUniqueHash(JSON.stringify(hashData));

  try {
    const query = `INSERT INTO Users(id,username,password) VALUES ('${id}','${username}','${encryptedPassword}');`;
    await db.promise().query(query);
    res.status(201).json({"message":"success"})
  } catch (err:any) {
    console.error('Error executing the query:', err);
    if(err.code === "ER_DUP_ENTRY") {
      res.status(400).json({ message: 'Already Exists User' });
    }else{
      res.status(500).json({ message: 'Server error' });
    }
  }
};