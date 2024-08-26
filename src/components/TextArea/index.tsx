import { forwardRef } from "react";
import classNames from "classnames";
import { TextareaProps } from "./textArea.type";

export const TextArea: React.FC<TextareaProps> = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ variant, className, ...rest }, ref) => {
  const classes = classNames("textarea", "w-full", className, {
    [`textarea-${variant}`]: variant,
  });
  return <textarea ref={ref} className={classes} {...rest} />;
});

export default TextArea;
