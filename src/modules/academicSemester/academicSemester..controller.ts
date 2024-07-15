// import { NextFunction, Request, RequestHandler, Response } from 'express';
import sendRespone from '../../app/utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../app/utils/catchAsync';
import { AcademicSemesterServices } from './academicSemester.services';
// import { UserValidation } from "./user.validation";



const cerateAcademicSemester = catchAsync(async (req, res) => {
//   const = req.body;

  const result = await AcademicSemesterServices.cerateAcademicSemesterIntoDb(req.body);

  sendRespone(res, {
    success: true,
    message: 'Academic semester is created successfully',
    data: result,
    statusCode: httpStatus.OK,
  });
});

const getAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAcademicSemesterFromDb();
  res.status(200).json({
    success: true,
    message: 'Academic semester fatcehd  successfully',
    data: result,
  });
});

const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId  } = req.params;
  // console.log(id)
  const result = await AcademicSemesterServices.getSingleAcademicSemesterFromDb(semesterId);
  res.status(200).json({
    success: true,
    message: 'Single Academic Semester Get successfully',
    data: result,
  });
});

const updateAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId  } = req.params;
  // console.log(semesterId)
  const updateData = req.body;
  // console.log(updateData)


  const result = await AcademicSemesterServices.updateAcademicSemesterFromDb(semesterId, updateData);
  res.status(200).json({
    success: true,
    message: 'Academic Semester Update successfully',
    data: result,
  });
});






export const academicSemesterController = {
    cerateAcademicSemester,
    getAcademicSemester,
    getSingleAcademicSemester,
    updateAcademicSemester
};
