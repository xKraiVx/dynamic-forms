import { ICON_SIZE } from "@/common/constants/iconSize";
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
        className={className}
      />
    </Link>
  );
}
