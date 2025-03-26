import { Schema, model, connect } from 'mongoose';

export type TGurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type TUserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type TLocalGurdian ={
    name:string;
    occupation:string;
    contactNo:string;
    address:string;
}

export type TStudent = {
  id: string;
  name: TUserName;
  gender: 'male' | 'female';
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'AB+' | 'AB-' | 'B+' | 'OB+' | 'OB-' | 'o+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGurdian;
  localGuardian:TLocalGurdian;
  profileImage?:string;
  isActive:'active' | 'blocked';
};
