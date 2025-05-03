import { ICON_SIZE } from "@/common/constants/iconSize";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

interface ILogoProps {
  className?: string;
}

export default function Logo({ className }: ILogoProps): JSX.Element {
  return (
    <Link href="/">
      <Image
        src="/logo_black.png"
        alt="Logo"
        width={ICON_SIZE}
        height={ICON_SIZE}
        priority={true}
        className={cn(className, "invert-(--INVERT-FILTER)")}
      />
    </Link>
  );
}
