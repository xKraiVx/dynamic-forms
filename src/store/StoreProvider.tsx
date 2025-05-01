"use client";

import { store } from "@/store/store";
import { JSX, PropsWithChildren } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({
  children,
}: PropsWithChildren): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}
