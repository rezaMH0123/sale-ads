import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../components/FormInput/TextInput";
import {
  RegisterFormValues,
  registerSchema,
} from "../types/validationSchema.type";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpController } from "../controllers/authController";

export default function RegisterForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    setLoading(true);
    try {
      const res = await SignUpController({
        email: data.email,
        password: data.password,
      });
      console.log("register page:", res);
      if (res?.status === 200 || res?.status === 201) {
        navigate("/");
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
      <TextInput
        name="email"
        register={register}
        errors={errors}
        label="ایمیل"
        placeholder="ایمیل را وارد کنید"
        type="text"
      />
      <TextInput
        name="password"
        register={register}
        errors={errors}
        label="رمز عبور"
        placeholder="رمز عبور را وارد کنید"
        type="password"
      />
      <TextInput
        name="confirmPassword"
        register={register}
        errors={errors}
        label="تکرار رمز عبور"
        placeholder="تکرار رمز عبور را وارد کنید"
        type="password"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 bg-cyan-500 text-white rounded-lg !mt-10"
      >
        {loading ? <span>صبر کنید...</span> : <span>ثبت نام</span>}
      </button>
    </form>
  );
}
