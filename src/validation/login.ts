import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

export const loginSchema = toTypedSchema(z.object({
  email: z.string({ required_error: "Email is required" }).email("Email is invalid format"),
  password: z.string({ required_error: "Password is required" }).min(8, "Minimum password must have 8 characters").max(12, "Maximum password must have 12 characters")
}))
