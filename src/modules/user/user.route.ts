import express from 'express';
import { userControllers } from './user.controler';
import validateRequest from '../../app/middleware/validateRequest';
import { createStudentValidations } from '../students/student.validation';
const router = express.Router();

router.post(
  '/create-student',
  validateRequest(createStudentValidations.StudentZodValidationSchema),
  userControllers.createStudent,
);

export const UserRoutes = router;
