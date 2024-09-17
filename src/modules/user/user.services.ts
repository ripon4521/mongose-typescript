import httpStatus from 'http-status';
import AppError from '../../app/errors/AppError';
import config from '../../app/utils/config';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
// import { Tstudent } from '../students/student.interface';
import { Student } from '../students/student.model';
import { Tuser } from './user.interface';
import { User } from './user.model';
import { generatedId, generateFacultyId } from './user.utilis';
import mongoose from 'mongoose';
import { TStudent } from '../students/student.interface';
import { Faculty } from '../Faculty/faculty.model';
import { TFaculty } from '../Faculty/faculty.interface';
import { AcademicDepartment } from '../academicDepartment/academicDepartment.model';

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
    throw new Error(err);
  }
};


const createFacultyIntoDB = async (password: string , payload: TFaculty) => {
  // create a user object
  const userData: Partial<Tuser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'faculty';

  // find academic department info
  const academicDepartment = await AcademicDepartment.findById(
    payload.academicDepartment,
  );

  if (!academicDepartment) {
    throw new AppError(400, 'Academic department not found');
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateFacultyId();

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session }); // array

    //create a faculty
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    // create a faculty (transaction-2)

    const newFaculty = await Faculty.create([payload], { session });

    if (!newFaculty.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create faculty');
    }

    await session.commitTransaction();
    await session.endSession();

    return newFaculty;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};



const createAdminIntoDB = async (password: string, payload: TFaculty) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'admin';

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateAdminId();

    // create a user (transaction-1)
    const newUser = await User.create([userData], { session }); 

    //create a admin
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create admin');
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    // create a admin (transaction-2)
    const newAdmin = await Admin.create([payload], { session });

    if (!newAdmin.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create admin');
    }

    await session.commitTransaction();
    await session.endSession();

    return newAdmin;
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};




export const UserService = {
  createStudentDB,
  createFacultyIntoDB,
};
