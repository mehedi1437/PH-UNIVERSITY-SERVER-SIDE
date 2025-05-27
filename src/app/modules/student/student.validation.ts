import { z } from 'zod';

// Sub-schemas
const UserNamevalidationSchema = z.object({
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string(),
});

const GuardianvalidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

const LocalGuardianvalidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

// Main Student schema
export const StudentValidationSchema = z.object({
  id: z.string(), // Since Mongoose auto-generates _id
  name: UserNamevalidationSchema,
  gender: z.enum(['male', 'female', 'others']),
  dateOfBirth: z.string(), // You may consider z.coerce.date() if needed
  email: z.string().email(),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  bloodGroup: z
    .enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'OB+', 'OB-', 'o+', 'O-'])
    .optional(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: GuardianvalidationSchema,
  localGuardian: LocalGuardianvalidationSchema,
  profileImage: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
});
