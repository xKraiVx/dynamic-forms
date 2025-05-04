import AnimationTemplate from "@/features/animation-template/AnimationTemplate";
import { JSX, PropsWithChildren } from "react";

export default function Template({ children }: PropsWithChildren): JSX.Element {
  return <AnimationTemplate>{children}</AnimationTemplate>;
}
