// import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserService } from './user.services';
import sendRespone from '../../app/utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../app/utils/catchAsync';
// import { UserValidation } from "./user.validation";



const createStudent = catchAsync(async (req, res) => {

  const { passward, student: StudentData } = req.body;

  const result = await UserService.createStudentDB(passward, StudentData);


  sendRespone(res, {
    success: true,
    message: 'Student created successfully',
    data: result,
    statusCode: httpStatus.OK,
  });
});

export const userControllers = {
  createStudent,
};
