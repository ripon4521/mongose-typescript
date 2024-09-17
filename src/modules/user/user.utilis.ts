import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  ).sort({
    createdAt: -1
  }).lean();
  return lastStudent?.id ? lastStudent.id: undefined;
};

export const generatedId = async (payload: TAcademicSemester) => {
  // console.log()

  let currentId = (0).toString();

  const lastStudentId = (await findLastStudentId())  ;
  const lastStudentSemesterCode = lastStudentId?.substring(4,6);
  const lastStudentSemesterYear = lastStudentId?.substring(0,4);
  const currentSemesterCode = payload.code;
  const currentYear = payload.year;

  if (lastStudentId && lastStudentSemesterCode === currentSemesterCode && lastStudentSemesterYear === currentYear) {
    currentId = lastStudentId.substring(6)
    
  }



  let incremenentId = (Number(currentId) + 1).toString().padStart(4, '0');
  incremenentId = `${payload.year}${payload.code}${incremenentId}`;
  return incremenentId;
  // console.log(payload)
};




// find last faculty id
export const findLastFacultyId = async () => {
};

// genereted faculty id 
export const generateFacultyId = async () => {
};


// Admin ID
export const findLastAdminId = async () => {
};

export const generateAdminId = async () => {
};