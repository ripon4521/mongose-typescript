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

const createFaculty = catchAsync(async (req, res) => {
  const { password, faculty: facultyData } = req.body;

  const result = await UserService.createFacultyIntoDB(password, facultyData);

  sendRespone(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty is created succesfully',
    data: result,
  });
});

const createAdmin = catchAsync(async (req, res) => {
  const { password, admin: adminData } = req.body;
  const result = await UserService.createAdminIntoDB(password, adminData);
  sendRespone(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin is created succesfully',
    data: result,
  });
});

export const userControllers = {
  createStudent,
  createFaculty,
  createAdmin,
};
