import Container from "@/common/components/container/Container";
import Header from "@/layouts/components/Header";
import { JSX, PropsWithChildren } from "react";

export default function DefaultLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <>
      <Header />
      <Container size="sm">{children}</Container>
    </>
  );
}
