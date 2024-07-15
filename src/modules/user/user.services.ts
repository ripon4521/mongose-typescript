import config from '../../app/utils/config';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { Tstudent } from '../students/student.interface';
import { StudentData } from '../students/student.model';
import { Tuser } from './user.interface';
import { User } from './user.model';
import { generatedId } from './user.utilis';

const createStudentDB = async (passward: string, payload: Tstudent) => {
  const user: Partial<Tuser> = {};
  user.password = passward || (config.default_pass as string);
  // if (!passward) {
  //     user.passward= config.default_pass as string;
  // }

  user.role = 'student';




  const admissionSemester = await AcademicSemester.findById(payload.admissionSemester);
  if (!admissionSemester) {
    throw new Error(' Data not found')
  }

  user.id = await generatedId( admissionSemester);




  const newUser = await User.create(user);
  if (Object.keys(newUser).length) {
    // set id _id as user hisebe
    payload.id = newUser.id;
    payload.user = newUser._id;
    const newStudent = await StudentData.create(payload);
    return newStudent;
  }
};

export const UserService = {
  createStudentDB,
};
