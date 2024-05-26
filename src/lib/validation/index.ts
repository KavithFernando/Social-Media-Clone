import { z } from "zod";

export const SignUpValidation = z.object({
    name: z.string().min(5, { message: 'Name must contain at least 5 characters.' }),
    username: z.string().min(5, { message: 'Username must contain at least 5 characters.' }),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password must contain at least 8 characters.' }),
  })