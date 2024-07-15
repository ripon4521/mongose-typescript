/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './modules/students/student.route';
import { UserRoutes } from './modules/user/user.route';
import { NextFunction } from 'express';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFoundRoute';
import router from './app/routes';
const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', router);


const GetAcontroller = (req: Request, res: Response) => {
  res.send('Welcome to the Google Cloud Platform Project ');
};
app.get('/', GetAcontroller);




app.use(globalErrorHandler);
app.use(notFound)

export default app;
