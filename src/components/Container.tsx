import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  outherClassName?: string;
};
export default function Container({
  children,
  outherClassName,
}: ContainerProps) {
  return (
    <div
      className={`h-screen grid grid-cols-12 max-w-7xl mx-auto px-3  md:px-8 ${outherClassName} `}
    >
      {children}
    </div>
  );
}
