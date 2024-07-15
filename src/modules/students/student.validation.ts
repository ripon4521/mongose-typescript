import { z } from 'zod';

// Guardian schema
const GuardianZodValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
});

// Student schema
const StudentZodValidationSchema = z.object({
  body: z.object({
    student: z.object({
      name: z.object({
        first_name: z
          .string()
          .min(1, 'First name must be at least 1 character long')
          .max(30, 'First name must be at most 30 characters long')
          .nonempty('First name cannot be empty'),
        middle_name: z
          .string()
          .min(1, 'Middle name must be at least 1 character long')
          .max(30, 'Middle name must be at most 30 characters long')
          .nonempty('Middle name cannot be empty'),
        last_name: z
          .string()
          .min(1, 'Last name must be at least 1 character long')
          .max(30, 'Last name must be at most 30 characters long'),
      }),
      email: z
        .string()
        .email('Invalid email format')
        .nonempty('Email cannot be empty'),
        admissionSemester :z.string(),
      password: z
        .string()
        .min(5, 'Password must be at least 5 characters long')
        .max(30, 'Password must be at most 30 characters long')
        .nonempty('Password cannot be empty'),
      contact: z
        .string()
        .min(10, 'Contact must be at least 10 characters long')
        .max(15, 'Contact must be at most 15 characters long')
        .nonempty('Contact cannot be empty'),
      gender: z.enum(['male', 'female', 'non-binary', 'other']),
      address: z
        .string()
        .min(10, 'Address must be at least 10 characters long')
        .max(100, 'Address must be at most 100 characters long')
        .nonempty('Address cannot be empty'),
      guardian: GuardianZodValidationSchema,
    }),
  }),
});

export const createStudentValidations = {
  StudentZodValidationSchema,
};
