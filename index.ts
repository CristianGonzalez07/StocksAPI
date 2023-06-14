import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(routes);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});