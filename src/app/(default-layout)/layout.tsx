import DefaultLayout from "@/layouts/default-layout/DefaultLayout";
import { JSX, PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren): JSX.Element {
  return <DefaultLayout>{children}</DefaultLayout>;
}
