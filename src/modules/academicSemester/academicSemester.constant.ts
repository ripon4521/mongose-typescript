
import { TAcademicSemesterCode, TAcademicSemesterName, TAcademicSmesterMapper, TMonths } from "./academicSemester.interface";

export const Months: TMonths[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  

 export const academicSemerName:TAcademicSemesterName[] =['Autumn' , 'Summer' , 'Fall' ];
export const academicSemesterCode :TAcademicSemesterCode[] = ['01' , '02' , '03'];
  

export const academicSemesterMapper: TAcademicSmesterMapper = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
  };