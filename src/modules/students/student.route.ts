import express from 'express';
import { StudentController } from './student.controller';
import validateRequest from '../../app/middleware/validateRequest';
import { updateStudentValidationSchema } from './student.validation';
const router = express.Router();

// router.post('/create-student', StudentController.createStudent); 

router.get('/', StudentController.getStudents);

router.get('/:studentId', StudentController.getSingleStudent);

router.patch('/:studentId',
    validateRequest(updateStudentValidationSchema),
StudentController.UpdateStudnet);

router.delete('/:studentId', StudentController.deleteStudnet);

export const StudentRoutes = router;
