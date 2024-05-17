import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getStudentsFromDb = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDb = async (_id: string) => {
  const result = await StudentModel.findOne({ _id });
  return result;
};

export const StudentServices = {
  createStudentDB,
  getStudentsFromDb,
  getSingleStudentFromDb,
};
