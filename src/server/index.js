import express from 'express';
import config from './config';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectToDb from './db';
import noteRouter from './routes/Note';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
  // now we have under process.env the configs added in a .env file
}

const app = express();
connectToDb({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/notes', noteRouter);


app.listen(config.port, function listenHandler() {
  console.info(`Running on ${config.port}`);
});