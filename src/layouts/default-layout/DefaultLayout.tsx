import Container from "@/common/components/container/Container";
import Header from "@/layouts/default-layout/components/Header";

import { JSX, PropsWithChildren } from "react";

export default function DefaultLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}
