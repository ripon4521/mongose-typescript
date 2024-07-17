import { TAcademicDepartment } from './academicDeartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

const cerateAcademicDepartmentIntoDb = async (payLoad: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payLoad);
  return result;
};

const getAcademicDepartmentsFromDb = async () => {
  const result = await AcademicDepartment.find();
  return result;
};

const getSingleAcademicDepartmentFromDb = async (_id: string) => {
  const result = await AcademicDepartment.findOne({ _id });
  return result;
};

const updateAcademicDepartmentFromDb = async (
  _id: string,
  updateData: TAcademicDepartment,
) => {
  const result = await AcademicDepartment.findOneAndUpdate(
    { _id },
    updateData,
    {
      new: true,
    },
  );
  return result;
};

export const AcademicDepartmentServices = {
  cerateAcademicDepartmentIntoDb,
  getAcademicDepartmentsFromDb,
  getSingleAcademicDepartmentFromDb,
  updateAcademicDepartmentFromDb,
};
