import express from 'express';
import validateRequest from '../../app/middleware/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
import { academicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/create-academic-department',
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentValidationSchema,
  ),
  academicDepartmentController.cerateAcademicDepartment,
);
router.get('/', academicDepartmentController.getAllAcademicDepartment);
router.get('/:departmentId', academicDepartmentController.getSingleAcademicDepartment);

router.patch(
  '/:departmentId',
  validateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  academicDepartmentController.updateAcademicDepartment,
);

export const AcademicDepartmentRoutes = router;
