import Link from "next/link";
import { Mail, Info } from "lucide-react";
import { type Locale } from "@/i18n";
import { langSwitcherData } from "@/components/common/LangSwitcherData";
import { usePathname } from "next/navigation";

export interface FooterDictionary {
  links: {
    about: string;
    privacy: string;
    contact: string;
    terms?: string;
    levels?: string;
    download?: string;
    blog?: string;
  };
  contact: {
    email: string;
  };
  copyright: string;
  disclaimer: string;
}

interface FooterProps {
  lang: Locale;
  footerDict: FooterDictionary;
}

export function Footer({ lang, footerDict }: FooterProps) {
  const pathname = usePathname();
  const isHomePage = pathname === `/${lang}`;

  if (!footerDict) {
    console.error("Footer dictionary not provided!");
    return null;
  }

  return (
    <footer className=" py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerDict.links.levels && (
              <Link
                href={`/${lang}/videos`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {footerDict.links.levels}
              </Link>
            )}
            {footerDict.links.download && (
              <Link
                href={`/${lang}/download`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {footerDict.links.download}
              </Link>
            )}
            {footerDict.links.blog && (
              <Link
                href={`/${lang}/blog`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {footerDict.links.blog}
              </Link>
            )}
            <Link
              href={`/${lang}/about`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {footerDict.links.about}
            </Link>
            <Link
              href={`/${lang}/privacy`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {footerDict.links.privacy}
            </Link>
            {footerDict.links.terms && (
              <Link
                href={`/${lang}/terms-of-service`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {footerDict.links.terms}
              </Link>
            )}
          </div>
          <div className="flex flex-col items-center gap-2 text-center mt-4">
            <p className="text-sm text-muted-foreground">
              {footerDict.copyright}
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Info className="h-4 w-4 shrink-0" />
              {footerDict.disclaimer}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 pt-4 border-t border-border/40 w-full max-w-5xl mx-auto">
            {langSwitcherData.map((item) => (
              <Link
                key={item.locale}
                href={`/${item.locale}`}
                className={`text-sm ${
                  lang === item.locale
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Backlinks Section (Homepage Only) */}
      {isHomePage && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-center flex justify-center gap-x-4">
          <a
              href="https://3dfigurines.ai/"
              title="gemini nano banana ai 3d figurines"
              target="_blank"
              rel="noopener"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            3D figurines
          </a>
          <a
              href="https://dropawaylevel.com/"
              title="Digimon Story Time Stranger"
              target="_blank"
              rel="noopener"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Digimon Story Time Stranger
          </a>
          <a
              href="https://meaningintext.com/"
              title="Meaning in text"
              target="_blank"
              rel="noopener"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Meaning in text
          </a>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-center flex justify-center gap-x-4">
        <a
            href="https://musicmake.ai/?utm_source=gameLevel"
            title="ai music generator"
            target="_blank"
            rel="noopener"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          ai music generator
        </a>
        <a
            href="https://nanobanana-pro.org/?utm_source=gameLevel"
            title="ai image generator"
            target="_blank"
            rel="noopener"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          ai image generator
        </a>
        <a
            href="https://seedance20.net/"
            title="seedance20.net"
            target="_blank"
            rel="noopener"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          seedance20.net
        </a>
        <a
            href="https://kling3.co/"
            title="kling3.co"
            target="_blank"
            rel="noopener"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          kling3.co
        </a>
        <a
            href="https://seedream50.com/"
            title="seedream50.com"
            target="_blank"
            rel="noopener"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          seedream50.com
        </a>
        <a
            href="https://songunique.com/"
            title="songunique.com"
            target="_blank"
            rel="noopener"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          songunique.com
        </a>
        <a
            href="https://seedance2-0.net/"
            title="seedance2-0.net"
            target="_blank"
            rel="noopener"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          seedance2-0.net
        </a>
      </div>
    </footer>
  );
}
