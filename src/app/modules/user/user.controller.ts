import { NextFunction, Request, Response } from "express";
import { userServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from 'http-status'
const createStudent = async (req: Request, res: Response,next:NextFunction) => {
  try {
    // Data Validation using Zod
    const { password,student: StudentData } = req.body;
    // const zodParsedData = StudentValidationSchema.parse(StudentData);
    console.log('Incoming student data:', StudentData);
    const result = await userServices.createStudentIntoDB(password,StudentData);
    // res.status(200).json({
    //   success: true,
    //   message: 'Student is create Successfully',
    //   data: result,
    // });
    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:'Student is create Successfully',
      data:result
    })
  } catch (err : any) {
    next(err)
  }
};


export const  userControllers ={
    createStudent
}