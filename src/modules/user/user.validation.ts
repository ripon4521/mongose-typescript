import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be a string',
    })
    .max(20, { message: 'password is too long' })
    .optional(),
});

export const UserValidation = {
  userValidationSchema,
};
