import { ReactElement } from "react";
import { TextboxProps } from "../../TextBox/TextBox.type";

import {
  UseFormRegister,
  FieldValues,
  Path,
  DeepMap,
  FieldError,
} from "react-hook-form";

export type TextInputProps<TFormValues extends FieldValues> = Omit<
  TextboxProps,
  "name"
> & {
  register: UseFormRegister<TFormValues>;
  name: Path<TFormValues>;
  errors: Partial<DeepMap<TFormValues, FieldError>>;
  label?: string;
  icon?: ReactElement;
};
