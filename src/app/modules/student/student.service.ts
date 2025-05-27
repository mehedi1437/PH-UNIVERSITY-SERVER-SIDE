import { TStudent } from './student.interface';
import Student from './student.model';

const createStudentIntoDB = async (studentData: TStudent) => {
  const result = await Student.create(studentData); // built in static Method

  // const student = new Student(studentData); //create an instance
  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('User Already Exists');
  // }
  //  const result = await student.save(); // Built in Instance method

  return result;
};
const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};
const getSingleStudentsFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const studentService = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
};
