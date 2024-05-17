import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './modules/students/student.route';
const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/students', StudentRoutes);

const GetAcontroller = (req: Request, res: Response) => {
  res.send('Welcome to the Google Cloud Platform Project ');
};
app.get('/', GetAcontroller);

export default app;
