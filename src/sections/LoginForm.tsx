import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "../components/FormInput/TextInput";
import { LoginFormValues, loginSchema } from "../types/validationSchema.type";
import { SignInController } from "../controllers/authController";
import { useState } from "react";
import { LoginT } from "../types/auth.type";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: LoginT) => {
    setLoading(true);
    try {
      const res = await SignInController(data);
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
        label="رمز ورود"
        placeholder="رمز ورود را وارد کنید"
        type="password"
      />
      <button
        type="submit"
        disabled={loading && true}
        className="w-full py-2 bg-cyan-500 text-white rounded-lg !mt-10"
      >
        {loading ? <span>صبر کنید...</span> : <span>ورود</span>}
      </button>
    </form>
  );
}
