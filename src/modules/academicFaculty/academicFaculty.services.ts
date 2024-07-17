import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./academicFaculty.model";


const cerateAcademicFacultyIntoDb = async (payLoad: TAcademicFaculty) => {


  const result = await AcademicFaculty.create(payLoad);
  return result;
};

const getAcademicFacultysFromDb = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

const getSingleAcademicFacultyFromDb = async (_id: string) => {
  const result = await AcademicFaculty.findOne({ _id });
  return result;
};

const updateAcademicFacultyFromDb = async (
  _id: string,
  updateData: TAcademicFaculty,
) => {

  const result = await AcademicFaculty.findOneAndUpdate({ _id }, updateData, {
    new: true,
  });
  return result;
};

export const AcademicFacultyServices = {
    cerateAcademicFacultyIntoDb,
  getAcademicFacultysFromDb,
  getSingleAcademicFacultyFromDb,
  updateAcademicFacultyFromDb,
};
