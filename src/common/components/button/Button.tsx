import {
  BUTTON_CONTENT_STYLES,
  BUTTON_DISABLED_STYLES,
  BUTTON_STYLES,
} from "@/common/components/button/constants/buttons.styles";
import cn from "classnames";
import Link, { LinkProps } from "next/link";
import { ButtonHTMLAttributes, JSX } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface IButtonPropsBase {
  children: React.ReactNode;
  className?: string;
}

type TButtonProps =
  | (IButtonPropsBase & { component?: "button" } & ButtonProps)
  | (IButtonPropsBase & {
      component: "link";
      disabled?: boolean;
    } & LinkProps);

export default function Button({
  children,
  component = "button",
  disabled = false,
  className,
  ...props
}: TButtonProps): JSX.Element {
  const buttonStyles = cn(
    BUTTON_STYLES,
    disabled && BUTTON_DISABLED_STYLES,
    className
  );

  if (component === "link") {
    return (
      <Link className={buttonStyles} {...(props as LinkProps)}>
        <span className={BUTTON_CONTENT_STYLES}> {children}</span>
      </Link>
    );
  }

  return (
    <button
      className={buttonStyles}
      disabled={disabled}
      {...(props as ButtonProps)}
    >
      <span className={BUTTON_CONTENT_STYLES}>{children}</span>
    </button>
  );
}
