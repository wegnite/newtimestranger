import Link from "next/link";
import { useDictionary } from "@/hooks/useDictionary";

export function Logo() {
  const dict = useDictionary();
  const logoSrc = "/digimon/favicon-32x32.png";

  return (
    <Link
      href={`/${dict.locale}`}
      className="flex items-center gap-2 rtl:flex-row-reverse"
    >
      <img src={logoSrc} alt="logo" width="32" height="32" className="w-8 h-8" />
      <span className="font-bold text-xl hidden md:block">
        {dict.header.brand}
      </span>
    </Link>
  );
}
