import { forwardRef } from "react";
import classNames from "classnames";
import { TextboxProps } from "./TextBox.type";

export const Textbox: React.FC<TextboxProps> = forwardRef<
  HTMLInputElement,
  TextboxProps
>(({ variant, type = "text", className, ...rest }, ref) => {
  const classes = classNames("textbox", "w-full", className, {
    [`textbox-${variant}`]: variant,
  });
  return <input ref={ref} type={type} className={classes} {...rest} />;
});

export default Textbox;
