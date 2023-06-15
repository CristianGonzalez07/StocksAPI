import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
