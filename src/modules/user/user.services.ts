import httpStatus from 'http-status';
import AppError from '../../app/errors/AppError';
import config from '../../app/utils/config';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
// import { Tstudent } from '../students/student.interface';
import { Student } from '../students/student.model';
import { Tuser } from './user.interface';
import { User } from './user.model';
import { generatedId } from './user.utilis';
import mongoose from 'mongoose';
import { TStudent } from '../students/student.interface';

const createStudentDB = async (passward: string, payload: TStudent) => {
  const userData: Partial<Tuser> = {};
  userData.password = passward || (config.default_pass as string);

  userData.role = 'student';

  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );
  if (!admissionSemester) {
    throw new AppError(httpStatus.NOT_FOUND, ' Data not found');
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    userData.id = await generatedId(admissionSemester);
    // Transtion 1
    const newUser = await User.create([userData], { session });
    if (!newUser.length) {
      // set id _id as user hisebe
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create new user');
    }
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id;

    // Create a Student 2nd Transction
    const newStudent = await Student.create([payload], { session });

    if (!newStudent.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create student');
    }

    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(" Failed to create student");
  }
};

export const UserService = {
  createStudentDB,
};
