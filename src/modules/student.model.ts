import { Schema, model } from 'mongoose';
import { Gurdian, Student } from './students/student.interface';

const GurdianSchema = new Schema<Gurdian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  name: {
    first_name: { type: String, required: true },
    middle_name: { type: String, required: true },
    last_name: { type: String, required: true },
  },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  gender: { type: String, required: true },

  address: { type: String, required: true },
  gurdian: GurdianSchema,
});

export const StudentModel = model<Student>('Student', studentSchema);
