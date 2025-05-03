import cn from "classnames";
import React, { JSX, PropsWithChildren } from "react";

type TVariant = "body" | "heading" | "heading2";

interface ITypographyProps extends PropsWithChildren {
  className?: string;
  variant?: TVariant;
}

const tags: Record<TVariant, string> = {
  body: "p",
  heading: "h1",
  heading2: "h2",
};

const styles: Record<TVariant, string> = {
  body: "text-base",
  heading: "text-2xl font-bold",
  heading2: "text-xl font-bold",
};

export default function Typography({
  variant = "body",
  className,
  children,
}: ITypographyProps): JSX.Element {
  const Tag = tags[variant] as keyof JSX.IntrinsicElements;

  const style = styles[variant];

  return <Tag className={cn(className, style)}>{children}</Tag>;
}
