import { academicSemesterMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const cerateAcademicSemesterIntoDb = async (payLoad: TAcademicSemester) => {
  if (academicSemesterMapper[payLoad.name] !== payLoad.code) {
    throw new Error('Invalid  Semester Code');
  }

  const result = await AcademicSemester.create(payLoad);
  return result;
};

const getAcademicSemesterFromDb = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getSingleAcademicSemesterFromDb = async (_id: string) => {
  const result = await AcademicSemester.findOne({ _id });
  return result;
};

const updateAcademicSemesterFromDb = async (
  _id: string,
  updateData: TAcademicSemester,
) => {
  if (
    updateData.name &&
    updateData.code &&
    academicSemesterMapper[updateData.name] !== updateData.code
  ) {
    throw new Error('Invalid  Semester Code');
  }
  const result = await AcademicSemester.findOneAndUpdate({ _id }, updateData, {
    new: true,
  });
  return result;
};

export const AcademicSemesterServices = {
  cerateAcademicSemesterIntoDb,
  getAcademicSemesterFromDb,
  getSingleAcademicSemesterFromDb,
  updateAcademicSemesterFromDb,
};
