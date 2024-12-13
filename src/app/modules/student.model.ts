import { Schema, model, connect } from 'mongoose';
import validator from 'validator';

import {
  Gaurdian,
  LocalGaurdian,
  Student,
  UserName,
} from './Student/student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'Name input needed'],
    trim: true,
    maxlength: [20, 'First Name cannot be more than 20'],
    validate: {
      validator: function(value: string){
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: '{VALUE} is not capitalize format'
    },
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
    validate: {
      validator: (value:string) => validator.isAlpha(value),
      message: '{VALUE} is not valid'
    }
  },
});

const guardianSchema = new Schema<Gaurdian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGaurdianSchema = new Schema<LocalGaurdian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { 
    type: String,
    required: [true, 'Student ID is required.'],
    unique: true,
  },
  name: {
    type: userNameSchema,
    required: [true, 'Student name is required.'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not a valid gender.',
    },
    required: [true, 'Gender is required.'],
  },
  dateOfBirth: { type: String },
  email: { 
    type: String, 
    required: [true, 'Email is required.'],
    validate: {
      validator: (value:string) => validator.isEmail(value),
      message: '{VALUE} is not a email type'
    }
  },
  contactNo: { 
    type: String, 
    required: [true, 'Contact number is required.'],
  },
  emergencyContactNo: { 
    type: String, 
    required: [true, 'Emergency contact number is required.'],
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+'],
  },
  presentAddress: { 
    type: String, 
    required: [true, 'Present address is required.'],
  },
  permanebtAddress: { 
    type: String, 
    required: [true, 'Permanent address is required.'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required.'],
  },
  localGaurdian: {
    type: localGaurdianSchema,
    required: [true, 'Local guardian information is required.'],
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
});


export const StudentModel = model<Student>('Student', studentSchema);
