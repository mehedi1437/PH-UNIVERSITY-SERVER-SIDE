import { z } from 'zod';

export const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be  string',
    })
    .min(6, 'Password must be at least 6 characters')
    .optional(),
});

export const useralidations = {
  userValidationSchema,
};
