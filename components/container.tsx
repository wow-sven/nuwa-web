import { type ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export default function Container({ className, children }: ContainerProps) {
  return (
    <div
      className={clsx(
        "container mx-auto max-w-screen-lg px-8 py-5 lg:py-8 xl:px-5",
        className
      )}
    >
      {children}
    </div>
  );
}
