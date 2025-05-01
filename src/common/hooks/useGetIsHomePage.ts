import { usePathname } from "next/navigation";

export const useGetIsHomePage = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return isHomePage;
};
