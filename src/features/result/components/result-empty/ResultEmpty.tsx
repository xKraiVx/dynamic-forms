import Button from "@/common/components/button/Button";
import Typography from "@/common/components/typography/Typography";
import { JSX } from "react";

export default function ResultEmpty(): JSX.Element {
  return (
    <>
      <Typography variant="heading" className="mb-4">
        Have no results
      </Typography>
      <Button component="link" href="/">
        Home Page
      </Button>
    </>
  );
}
