

import React from "react";
import { IconProps } from "../../types/icons.type";

const IconChevron: React.FC<IconProps> = ({
  className,
  fill,
  onClick,
  ...rest
}) => {

  return (
    <svg
      className={className}
      onClick={onClick}
      {...rest}
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} >
      <path
        fill={fill} strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
};

export default IconChevron;
