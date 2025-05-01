import { JSX, SVGProps } from "react";

export default function Chevron(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M7.5 12L15 4.5L16.05 5.55L9.6 12L16.05 18.45L15 19.5L7.5 12Z"
        fill="currentColor"
      />
    </svg>
  );
}
