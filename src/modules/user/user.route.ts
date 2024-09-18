import express from 'express';
import { userControllers } from './user.controler';
import validateRequest from '../../app/middleware/validateRequest';
import {  studentValidations } from '../students/student.validation';
import { createFacultyValidationSchema } from '../Faculty/faculty.validation';
import { createAdminValidationSchema } from '../Admin/admin.validation';
// import { createStudentValidations } from '../students/student.validation';
const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidations.createStudentValidationSchema),
  userControllers.createStudent,
);


router.post(
  '/create-faculty',
  validateRequest(createFacultyValidationSchema),
  userControllers.createFaculty,
);

router.post(
  '/create-admin',
  validateRequest(createAdminValidationSchema),
  userControllers.createAdmin,
);

export const UserRoutes = router;
