import { Schema, model } from 'mongoose';
import {
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

const StudentSchema = new Schema<TStudent>({
  id: { type: String, unique: true },
  name: { type: UserNameSchema, required: true },
  gender: { type: String, enum: ['male', 'female','others'], required: true },
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
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
    required: true,
  },
});

const StudentModel = model<TStudent>('Student', StudentSchema);
export default StudentModel;
