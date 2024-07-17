import express from 'express';
import validateRequest from '../../app/middleware/validateRequest';
import { AcademicFacultyValidation } from './academicValidation';
import { academicFacultyController } from './academicFaculty.controller';

const router = express.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  academicFacultyController.cerateAcademicFaculty,
);
router.get('/', academicFacultyController.getAllAcademicFaculty);
router.get('/:facultyId', academicFacultyController.getSingleAcademicFaculty);

router.patch(
  '/:facultyId',
  validateRequest(
    AcademicFacultyValidation.updateAcademicFacultyValidationSchema,
  ),
  academicFacultyController.updateAcademicFaculty,
);

export const AcademicFacultyRoutes = router;
