import { FieldValues, get } from "react-hook-form";
import { TextAreaInputProps } from "./textareInput.type";
import TextArea from "../../TextArea";

const TextAreaInput = <TFormValues extends FieldValues>({
  name,
  register,
  errors,
  variant,
  label,
  className,
  ...rest
}: TextAreaInputProps<TFormValues>) => {
  const error = get(errors, name);
  const hasError = !!error;
  return (
    <div className={`w-full ${className}`}>
      {label && <label className={`font-bold`}>{label}</label>}
      <div className="relative mt-2">
        <TextArea
          {...register(name)}
          {...(hasError ? { variant: "error" } : { variant: variant })}
          {...rest}
        />
      </div>

      {hasError && (
        <div className="flex  items-center gap-x-2 w-full  mt-2 rounded-lg p-1">
          <p className=" text-sm text-red-500">{error.message}</p>
        </div>
      )}
    </div>
  );
};

export default TextAreaInput;
