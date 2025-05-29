import { Schema, model } from 'mongoose';
import {
  StudentModel,
  TGurdian,
  TLocalGurdian,
  TStudent,
  TUserName,
} from './student.interface';

const GuardianSchema = new Schema<TGurdian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const UserNameSchema = new Schema<TUserName>({
  firstName: { type: String, required: true },
  middleName: { type: String, required: false },
  lastName: { type: String, required: true },
});

const LocalGuardianSchema = new Schema<TLocalGurdian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const StudentSchema = new Schema<TStudent, StudentModel>(
  {
    id: { type: String, unique: true },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User id is required'],
      unique: true,
      ref: 'User',
    },
    name: { type: UserNameSchema, required: true },
    gender: {
      type: String,
      enum: ['male', 'female', 'others'],
      required: true,
    },
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'OB+', 'OB-', 'o+', 'O-'],
      required: false,
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: { type: GuardianSchema, required: true },
    localGuardian: { type: LocalGuardianSchema, required: true },
    profileImage: { type: String, required: false },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);
// * Virtual
StudentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
});

// ? Query Middleware
StudentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
StudentSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
StudentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

// ! Creating a custom Static method
StudentSchema.statics.isUserExists = async function (id: string) {
  const existingUSer = await Student.findOne({ id });
  return existingUSer;
};

const Student = model<TStudent, StudentModel>('Student', StudentSchema);
export default Student;
