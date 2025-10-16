import Link from "next/link";
import { useTheme } from "next-themes";
import { useDictionary } from "@/hooks/useDictionary";

export function Logo() {
  const { theme } = useTheme();
  const dict = useDictionary();

  return (
    <Link
      href={`/${dict.locale}`}
      className="flex items-center gap-2 rtl:flex-row-reverse"
    >
      <img
        src="/images/logo.webp"
        alt="logo"
        width="32"
        height="32"
        className="w-8 h-8"
      />
      <span className="font-bold text-xl hidden md:block">
        {dict.header.brand}
      </span>
    </Link>
  );
}
