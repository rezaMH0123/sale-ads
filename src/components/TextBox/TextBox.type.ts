import { InputHTMLAttributes } from "react";
import { ComponentBase } from "../../types/component.type";

type TextboxType = "text" | "number" | "email" | "password";

export type TextboxProps = InputHTMLAttributes<HTMLInputElement> &
  ComponentBase & {
    type?: TextboxType;
  };
