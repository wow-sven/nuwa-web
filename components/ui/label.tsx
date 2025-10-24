import type { ReactNode } from "react";
import clsx from "clsx";

type LabelTheme = "green" | "blue" | "orange" | "purple" | "pink";

const THEME_CLASS: Record<LabelTheme, string> = {
  green: "text-emerald-700",
  blue: "text-blue-600",
  orange: "text-orange-700",
  purple: "text-purple-600",
  pink: "text-pink-600",
};

interface LabelProps {
  theme?: LabelTheme;
  children: ReactNode;
  className?: string;
}

export default function Label({
  theme = "pink",
  children,
  className,
}: LabelProps) {
  return (
    <span
      className={clsx(
        "mt-5 inline-block text-xs font-medium uppercase tracking-wider",
        THEME_CLASS[theme],
        className
      )}
    >
      {children}
    </span>
  );
}
