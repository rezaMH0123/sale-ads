import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreatAdsFormValues,
  creatAdsFormSchema,
} from "../types/validationSchema.type";
import TextInput from "../components/FormInput/TextInput";
import TextAreaInput from "../components/FormInput/TextAreaInput";
import { useState } from "react";
import { updateAdsByIdController } from "../controllers/adsController";
import { useNavigate } from "react-router-dom";
import { IAds } from "../types/models/ads.model";

type FormValues = {
  phone: string;
  address: string;
  description: string;
};

type CreateAdsFormProps = {
  id: string;
  position: {
    lat: number;
    lng: number;
  };
  defaultValues: FormValues;
};

const EditAdsForm = ({ position, defaultValues, id }: CreateAdsFormProps) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatAdsFormValues>({
    resolver: zodResolver(creatAdsFormSchema),
    defaultValues,
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    const adsData: IAds = {
      ...data,
      ...position,
    };
    try {
      const res = await updateAdsByIdController(adsData, id);
      if (res?.status === 200 || res?.status === 201) {
        navigate("/");
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
      <TextInput
        name="phone"
        label="شماره موبایل"
        register={register}
        errors={errors}
        type="text"
        className="mb-4"
      />

      <TextInput
        name="address"
        label="آدرس"
        register={register}
        errors={errors}
        type="text"
        className="mb-4"
      />

      <TextAreaInput
        name="description"
        label="توضیحات"
        register={register}
        errors={errors}
        className="mb-4"
      />

      <button
        type="submit"
        disabled={loading && true}
        className="bg-sky-500 w-full text-white px-4 py-2 rounded"
      >
        {loading ? <span>صبر کنید...</span> : <span>ثبت تغییر</span>}
      </button>
    </form>
  );
};

export default EditAdsForm;
