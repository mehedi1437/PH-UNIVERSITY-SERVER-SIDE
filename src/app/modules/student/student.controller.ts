import { Request, Response } from 'express';
import { studentService } from './student.service';
import { StudentValidationSchema } from './student.validation';
const createStudent = async (req: Request, res: Response) => {
  try {
    // Data Validation using Zod
    const { student: StudentData } = req.body;
    const zodParsedData = StudentValidationSchema.parse(StudentData);
    console.log('Incoming student data:', StudentData);
    const result = await studentService.createStudentIntoDB(zodParsedData);
    res.status(200).json({
      success: true,
      message: 'Student is create Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students are retrived Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getSingleStudentsFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student is retrived Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentController = {
  createStudent,
  getStudents,
  getSingleStudent,
};
