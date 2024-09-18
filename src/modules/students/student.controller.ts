// import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StudentServices } from './student.services';
import catchAsync from '../../app/utils/catchAsync';
import { RequestHandler } from 'express';



const getStudents : RequestHandler = catchAsync(async (req, res) => {
  // console.log(req.query)
  const result = await StudentServices.getStudentsFromDb(req.query);
  res.status(200).json({
    success: true,
    message: 'Student fatcehd  successfully',
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.getSingleStudentFromDb(id);
  res.status(200).json({
    success: true,
    message: 'Single Student Get successfully',
    data: result,
  });
});

const deleteStudnet = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await StudentServices.deleteStudnetFromDb(id);
  res.status(200).json({
    success: true,
    message: 'Student Delete successfully',
    data: result,
  });
});

const UpdateStudnet = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { student } = req.body;
  const result = await StudentServices.updateStudentFromDb(id, student);




  res.status(200).json({
    success: true,
    message: 'Student Updated successfully',
    data: result,
  });
});

export const StudentController = {
  getStudents,
  getSingleStudent,
  deleteStudnet,
  UpdateStudnet
};
