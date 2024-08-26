import {
  UseFormRegister,
  FieldValues,
  Path,
  DeepMap,
  FieldError,
} from "react-hook-form";
import { TextareaProps } from "../../TextArea/textArea.type";

export type TextAreaInputProps<TFormValues extends FieldValues> = Omit<
  TextareaProps,
  "name"
> & {
  register: UseFormRegister<TFormValues>;
  name: Path<TFormValues>;
  errors: Partial<DeepMap<TFormValues, FieldError>>;
  label?: string;
};
