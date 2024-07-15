import { Types } from 'mongoose';

export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
};
export type Tstudent = {
  name: {
    first_name: string;
    middle_name: string;
    last_name: string;
  };
  id: string;
  user: Types.ObjectId;
  email: string;
  admissionSemester : Types.ObjectId;
  password: string;
  contact: string;
  gender: ['male' | 'female' | 'non-binary' | 'other'];
  address: string;
  guardian: {
    fatherName: string;
    fatherOccupation: string;
    motherName: string;
    motherOccupation: string;
  };
};
