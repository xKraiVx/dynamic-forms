import Button from "@/common/components/button/Button";
import Container from "@/common/components/container/Container";
import Typography from "@/common/components/typography/Typography";
import Header from "@/layouts/default-layout/components/Header";
import { JSX } from "react";

export default function Page404(): JSX.Element {
  return (
    <>
      <Header />
      <Container className="flex h-[calc(100vh-56px)] flex-col items-center justify-center">
        <Typography variant="heading" className="mb-4">
          404
        </Typography>
        <Typography className="mb-8">
          The page you are looking for does not exist.
        </Typography>
        <Button component="link" className="w-fit" href="/">
          Home page
        </Button>
      </Container>
    </>
  );
}
