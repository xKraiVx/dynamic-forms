import { JSX, PropsWithChildren } from "react";
import cn from "classnames";

interface IContainerProps extends PropsWithChildren {
  size?: "sm" | "lg";
  className?: string;
}

export default function Container({
  className,
  size = "lg",
  children,
}: IContainerProps): JSX.Element {
  const containerClass = cn(
    "container px-4 py-2 m-auto",
    {
      "max-w-sm": size === "sm",
      "max-w-lg": size === "lg",
    },
    className
  );
  return <div className={containerClass}>{children}</div>;
}
