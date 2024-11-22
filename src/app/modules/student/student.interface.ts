import { Schema, model, connect } from 'mongoose';

export type Gaurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type UserName = {
  firstName: string;
  lastName: string;
  middleName: string;
};

export type LocalGaurdian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+';
  presentAddress: string;
  permanebtAddress: string;
  guardian: Gaurdian;
  localGaurdian: LocalGaurdian;
  profileImg?: string;
  isActive: 'active' | 'inactive';
};
