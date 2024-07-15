import express from 'express';
import { academicSemesterController } from './academicSemester..controller';
import validateRequest from '../../app/middleware/validateRequest';
import { AcademiocSemesterValidations } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademiocSemesterValidations.createAcademicSemesterValidionsSechema,
  ),
  academicSemesterController.cerateAcademicSemester,
);
router.get('/', academicSemesterController.getAcademicSemester);
router.get(
  '/:semesterId',
  academicSemesterController.getSingleAcademicSemester,
);

router.patch(
  '/:semesterId',
  validateRequest(
    AcademiocSemesterValidations.upadateAcademicSemesterValidionsSechema,
  ),
  academicSemesterController.updateAcademicSemester,
);

export const AcademicSemesterRoutes = router;
