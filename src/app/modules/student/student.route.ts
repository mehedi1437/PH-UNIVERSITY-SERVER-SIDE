import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();

// router.post('/create-student', studentController.createStudent);

router.get('/', studentController.getStudents);
router.get('/:studentId', studentController.getSingleStudent);
router.delete('/:studentId', studentController.deleteAStudent);

export const StudentRoutes = router;
