import express, { Application } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import db from './config/db';

dotenv.config({
  path: `.env_dev`
});

db();

const app: Application = express();
const port = process.env.PORT;

/** Middlewares */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

/** Routings */
import route from './routes';
import errorHandler from './middlewares/errorHandler';

app.use(`/`, route);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server run on port: ${port}`);
})