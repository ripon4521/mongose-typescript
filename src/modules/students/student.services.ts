import { StudentData } from './student.model';



const getStudentsFromDb = async () => {
  const result = await StudentData.find();
  return result;
};

const getSingleStudentFromDb = async (_id: string) => {
  const result = await StudentData.findOne({ _id });
  return result;
};
const deleteStudnetFromDb = async (_id: string) => {
  const result = await StudentData.deleteOne({ _id });
  return result;
};

export const StudentServices = {

  getStudentsFromDb,
  getSingleStudentFromDb,
  deleteStudnetFromDb
};
