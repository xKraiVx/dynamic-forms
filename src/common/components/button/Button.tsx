import {
  BUTTON_ACTIVE_STYLES,
  BUTTON_BEFORE_STYLES,
  BUTTON_CONTENT_STYLES,
  BUTTON_DEFAULT_STYLES,
  BUTTON_DISABLED_STYLES,
  BUTTON_FOCUS_STYLES,
  BUTTON_HOVER_STYLES,
} from "@/common/components/button/constants/buttons.styles";
import cn from "classnames";
import Link, { LinkProps } from "next/link";
import { ButtonHTMLAttributes, JSX } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface IButtonPropsBase {
  children: React.ReactNode;
}

type TButtonProps =
  | (IButtonPropsBase & { component?: "button" } & ButtonProps)
  | (IButtonPropsBase & { component: "link"; disabled?: boolean } & LinkProps);

export default function Button({
  children,
  component = "button",
  disabled = false,
  ...props
}: TButtonProps): JSX.Element {
  const buttonStyles = cn(
    BUTTON_DEFAULT_STYLES,
    BUTTON_ACTIVE_STYLES,
    BUTTON_HOVER_STYLES,
    BUTTON_FOCUS_STYLES,
    BUTTON_BEFORE_STYLES,
    disabled && BUTTON_DISABLED_STYLES
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
