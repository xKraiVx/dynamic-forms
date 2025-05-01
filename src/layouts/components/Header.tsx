import Container from "@/common/components/container/Container";
import { ICON_SIZE } from "@/common/constants/iconSize";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Container className="flex items-center justify-center">
        <Image
          src="/logo_black.png"
          alt="Logo"
          width={ICON_SIZE}
          height={ICON_SIZE}
        />
      </Container>
    </header>
  );
}
