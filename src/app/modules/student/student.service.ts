import { TStudent } from './student.interface';
import Student from './student.model';


const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};
const getSingleStudentsFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};
// Delete student from DB
const DeleteStudentsFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const studentService = {
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
  DeleteStudentsFromDB
};
