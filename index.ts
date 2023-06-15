import swaggerUi from 'swagger-ui-express';
import express from 'express';
import routes from './routes';
import * as path from 'path';
import dotenv from 'dotenv';
import * as fs from 'fs';
import cors from 'cors';

dotenv.config();

const port = process.env.PORT;

const app = express();

const swaggerFilePath = path.join(__dirname, './swagger.json');
const swaggerFileContent = fs.readFileSync(swaggerFilePath, 'utf-8');
const swaggerJson = JSON.parse(swaggerFileContent);

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerJson),
);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
