import { NextFunction, Request, Response } from 'express';
import { studentService } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status'

const getStudents = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const result = await studentService.getAllStudentsFromDB();
     sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:'All Studenta are retrived Successfully',
      data:result
    })
  } catch (err:any) {
    next(err)
  }
};
const getSingleStudent = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getSingleStudentsFromDB(studentId);
    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:'Student is retrived Successfully',
      data:result
    })
  } catch (err:any) {
   next(err)
  }
};
// ? Delete a student 
const deleteAStudent = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.DeleteStudentsFromDB(studentId);
     sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:'Student is Deleted Successfully',
      data:result
    })
  } catch (err:any) {
   next(err)
  }
};

export const studentController = {
  getStudents,
  getSingleStudent,
  deleteAStudent
};
