import { Schema, model } from 'mongoose';
import { Tstudent } from './student.interface';

// const GurdianSchema = new Schema<Gurdian>({
//   fatherName: { type: String, required: true },
//   fatherOccupation: { type: String, required: true },
//   motherName: { type: String, required: true },
//   motherOccupation: { type: String, required: true },
// });

const studentSchema = new Schema<Tstudent>({
  name: {
    first_name: { type: String, required: true },
    middle_name: { type: String, required: true },
    last_name: { type: String, required: true },
  },

  id: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    unique: true,
    required: [true, 'user id must ben nedded'],
    ref: 'User',
  },
  email: { type: String, required: true },
  admissionSemester :{
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'AcademicSemester'
  },
  contact: { type: String, required: true },
  gender: ['male', 'female', 'non-binary', 'other'],
  address: { type: String, required: true },
  guardian: {
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
  },
});

studentSchema.virtual('fullName').get(function () {
  return (
    this.name.first_name +
    ' ' +
    this.name.middle_name +
    ' ' +
    this.name.last_name
  );
});

studentSchema.pre('save', async function () {
  console.log(this, 'pre : Update Save Dataa ');
});
studentSchema.post('save', async function () {
  console.log(this, 'post : Update Save Dataa ');
});

// studentSchema.statics.isUserExist = async function (_id:  ObjectId) {
//   const UserExist = await StudentData.findOne({ _id });
//   return UserExist;
// };

export const StudentData = model<Tstudent>('Student', studentSchema);
