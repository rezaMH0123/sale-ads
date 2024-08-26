import { FieldValues, get } from "react-hook-form";
import { TextInputProps } from "./TextInput.type";
import Textbox from "../../TextBox";
import IconSee from "../../icons/see";
import { useState } from "react";
import IconDontSee from "../../icons/dontSee";

const TextInput = <TFormValues extends FieldValues>({
  name,
  register,
  errors,
  variant,
  label,
  icon,
  className,
  type,
  ...rest
}: TextInputProps<TFormValues>) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const error = get(errors, name);
  const hasError = !!error;
  return (
    <div className={`w-full ${className}`}>
      {label && <label className={`font-bold`}>{label}</label>}
      <div className="relative mt-2">
        <Textbox
          {...register(name)}
          {...(hasError ? { variant: "error" } : { variant: variant })}
          type={
            type === "password"
              ? isPasswordVisible
                ? "text"
                : "password"
              : "text"
          }
          {...rest}
        />
        {type === "password" && (
          <span
            className="absolute top-1/2 -translate-y-1/2 left-3 w-5 h-5 stroke-cyan-500 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <IconDontSee /> : <IconSee />}
          </span>
        )}
      </div>

      {hasError && (
        <div className="flex  items-center gap-x-2 w-full mt-2 rounded-lg p-1">
          <p className=" text-sm text-red-500">{error.message}</p>
        </div>
      )}
    </div>
  );
};

export default TextInput;
