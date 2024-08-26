import { z } from "zod";
import { mobileRegExp } from "../utils/regex";

export const loginSchema = z.object({
  email: z.string().email({ message: "فرمت ایمیل نادرست است" }),
  password: z.string().min(6, { message: "رمز ورود باید حداقل ۶ کارکتر باشد" }),
});

export const registerSchema = z
  .object({
    email: z.string().email("ایمیل نامعتبر است"),
    password: z.string().min(6, "رمز عبور باید حداقل 6 کاراکتر باشد"),
    confirmPassword: z
      .string()
      .min(6, "تکرار رمز عبور باید حداقل 6 کاراکتر باشد"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز عبور و تکرار رمز عبور مطابقت ندارند",
    path: ["confirmPassword"],
  });

export const creatAdsFormSchema = z.object({
  phone: z
    .string()
    .min(1, { message: "شماره همراه الزامی است" })
    .regex(mobileRegExp, {
      message: "شماره موبایل نادرست است",
    }),
  address: z.string().min(5, "ادرس حد اقل ۸ حرف باشد"),
  description: z.string().min(10, "توضیحات حد اقل شامل ۱۰ حرف"),
});

export type CreatAdsFormValues = z.infer<typeof creatAdsFormSchema>;

export type LoginFormValues = z.infer<typeof loginSchema>;

export type RegisterFormValues = z.infer<typeof registerSchema>;
