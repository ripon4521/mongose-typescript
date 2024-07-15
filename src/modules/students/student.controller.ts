// import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StudentServices } from './student.services';
import catchAsync from '../../app/utils/catchAsync';



const getStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getStudentsFromDb();
  res.status(200).json({
    success: true,
    message: 'Student fatcehd  successfully',
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDb(studentId);
  res.status(200).json({
    success: true,
    message: 'Single Student Get successfully',
    data: result,
  });
});

const deleteStudnet = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.deleteStudnetFromDb(studentId);
  res.status(200).json({
    success: true,
    message: 'Student Delete successfully',
    data: result,
  });
});

export const StudentController = {
  getStudents,
  getSingleStudent,
  deleteStudnet
};
