import express, { Request, Response, NextFunction } from 'express';
import { userAuth, userSignUp } from '../controllers/usersController';
import { addStock, removeStock, getStocks } from '../controllers/stocksController';
import jsonwebtoken, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const secret: Secret = process.env.SECRET || '';
const port = process.env.PORT;

interface CustomRequest extends Request {
  context?: {
    token?: any;
  };
}

interface StatusMsg  {
  success:string,
  created:string,
  alreadyExists:string,
  notFound:string,
  unauthorized:string,
  serverError:string
}

interface StatusCode  {
  success:number,
  created:number,
  alreadyExists:number,
  notFound:number,
  unauthorized:number,
  serverError:number
}

const statusMsg: StatusMsg = {
  success:"Success",
  created:"Created successfully",
  alreadyExists:"Already Exists",
  notFound:"Resource Not Found",
  unauthorized:"Unauthorized access",
  serverError:"Server Error"
}

const statusCode: StatusCode = {
  success:200,
  created:201,
  alreadyExists:400,
  notFound:400,
  unauthorized:401,
  serverError:500
}


const authenticateToken = (req: CustomRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (token) {
    try {
      const decodedToken = jsonwebtoken.verify(token, secret);

      req.context = {
        token: decodedToken
      };
    } catch (error) {
      console.error(error)
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
router.post('/sign-up', userSignUp);
router.put('/add-stock', async (req: CustomRequest, res: Response) => {

  const token = req.context?.token;
  if (token) {
    const { name, symbol, currency }: { name: string; symbol: string, currency: string } = req.body as {
      name:string
      symbol:string
      currency:string
    };
    const result = await addStock(token.id, name, symbol, currency);
    res.status(statusCode[result]).json({"message":statusMsg[result]})
  } else {
    res.status(statusCode["unauthorized"]).json({ message: statusMsg["unauthorized"] });
  }
});
router.delete('/remove-stock', async (req: CustomRequest, res: Response) => {
  const token = req.context?.token;
  if (token) {
    const { stockID }: { stockID: string } = req.query as {
      stockID:string
    };
    const result = await removeStock(token.id, stockID);
    res.status(statusCode[result]).json({"message":statusMsg[result]})
  } else {
    res.status(statusCode["unauthorized"]).json({ message: statusMsg["unauthorized"] });
  }
});
router.get('/stocks', async (req: CustomRequest, res: Response) => {
  const token = req.context?.token;
  if (token) {
    const stocks = await getStocks(token.id);
    if(stocks !== "serverError"){
      res.status(statusCode["success"]).json({stocks})
    }else{
      res.status(statusCode["serverError"]).json({"message":statusMsg["serverError"]})
    }
  } else {
    res.status(statusCode["unauthorized"]).json({ message: statusMsg["unauthorized"] });
  }
});


export default router
