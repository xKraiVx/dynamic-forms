import Container from "@/common/components/container/Container";
import BackButton from "@/layouts/default-layout/components/BackButton";
import Logo from "@/layouts/default-layout/components/Logo";

export default function Header() {
  return (
    <header>
      <Container className="relative flex h-[56px]">
        <BackButton />
        <Logo className="absolute left-1/2 -translate-x-1/2" />
      </Container>
    </header>
  );
}
