// import { NextFunction, Request, RequestHandler, Response } from 'express';
import sendRespone from '../../app/utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../app/utils/catchAsync';
import { AcademicFacultyServices } from './academicFaculty.services';

// import { UserValidation } from "./user.validation";

const cerateAcademicFaculty = catchAsync(async (req, res) => {
  //   const = req.body;

  const result = await AcademicFacultyServices.cerateAcademicFacultyIntoDb(
    req.body,
  );

  sendRespone(res, {
    success: true,
    message: 'Academic faculty is created successfully',
    data: result,
    statusCode: httpStatus.OK,
  });
});

const getAllAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.getAcademicFacultysFromDb();
  res.status(200).json({
    success: true,
    message: 'Academic faculty fatcehd  successfully',
    data: result,
  });
});

const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  // console.log(id)
  const result =
    await AcademicFacultyServices.getSingleAcademicFacultyFromDb(facultyId);
  res.status(200).json({
    success: true,
    message: 'Single Academic Faculty Get Successfully',
    data: result,
  });
});

const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  // console.log(semesterId)
  const updateData = req.body;
  // console.log(updateData)

  const result = await AcademicFacultyServices.updateAcademicFacultyFromDb(
    facultyId,
    updateData,
  );
  res.status(200).json({
    success: true,
    message: 'Academic Faculty Updated Successfully',
    data: result,
  });
});

export const academicFacultyController = {
  cerateAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
