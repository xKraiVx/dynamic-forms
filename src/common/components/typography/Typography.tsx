import cn from "classnames";
import React, { JSX, PropsWithChildren } from "react";

interface ITypographyProps extends PropsWithChildren {
  className?: string;
  variant?: "body" | "heading";
}

export default function Typography({
  variant = "body",
  className,
  children,
}: ITypographyProps): JSX.Element {
  const Tag = variant === "body" ? "p" : "h1";

  return (
    <Tag
      className={cn(
        className,
        variant === "body" ? "text-base" : "text-2xl font-bold"
      )}
    >
      {children}
    </Tag>
  );
}
