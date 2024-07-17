// import { User } from './user.model';
import { model, Schema } from 'mongoose';
import { TAcademicDepartment } from './academicDeartment.interface';


const academicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name :{
        type : String,
        required : true,
        unique: true,
  
    },
    academicFaculty : {
        type : Schema.Types.ObjectId,
        ref : 'AcademicFaculty',
        required : true,
    }
  },{
    timestamps: true,
  },
);



export const AcademicDepartment = model<TAcademicDepartment>('AcademicDepartment', academicDepartmentSchema);
