// import { NextFunction, Request, RequestHandler, Response } from 'express';
import sendRespone from '../../app/utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../app/utils/catchAsync';
import { AcademicDepartmentServices } from './academicDepartment.services';

// import { UserValidation } from "./user.validation";

const cerateAcademicDepartment = catchAsync(async (req, res) => {
  //   const = req.body;

  const result =
    await AcademicDepartmentServices.cerateAcademicDepartmentIntoDb(req.body);

  sendRespone(res, {
    success: true,
    message: 'Academic department is created successfully',
    data: result,
    statusCode: httpStatus.OK,
  });
});

const getAllAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.getAcademicDepartmentsFromDb();
  res.status(200).json({
    success: true,
    message: 'Academic department fatcehd  successfully',
    data: result,
  });
});

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  // console.log(id)
  const result =
    await AcademicDepartmentServices.getSingleAcademicDepartmentFromDb(
      departmentId,
    );
  res.status(200).json({
    success: true,
    message: 'Single Academic Department Get Successfully',
    data: result,
  });
});

const updateAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  // console.log(semesterId)
  const updateData = req.body;
  // console.log(updateData)

  const result =
    await AcademicDepartmentServices.updateAcademicDepartmentFromDb(
      departmentId,
      updateData,
    );
  res.status(200).json({
    success: true,
    message: 'Academic Department Updated Successfully',
    data: result,
  });
});

export const academicDepartmentController = {
  cerateAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
};
