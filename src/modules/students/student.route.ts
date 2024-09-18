import express from 'express';
import { StudentController } from './student.controller';
import validateRequest from '../../app/middleware/validateRequest';
import { updateStudentValidationSchema } from './student.validation';
const router = express.Router();

// router.post('/create-student', StudentController.createStudent);

router.get('/', StudentController.getStudents);

router.get('/:id', StudentController.getSingleStudent);

router.patch(
  '/:id',
  validateRequest(updateStudentValidationSchema),
  StudentController.UpdateStudnet,
);

router.delete('/:id', StudentController.deleteStudnet);

export const StudentRoutes = router;
