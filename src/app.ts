import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Google Cloud Platform Project ');
});

export default app;
