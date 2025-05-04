import AnimationTemplate from "@/common/components/animated-block/AnimatedBlock";
import { JSX, PropsWithChildren } from "react";

export default function Template({ children }: PropsWithChildren): JSX.Element {
  return <AnimationTemplate>{children}</AnimationTemplate>;
}
