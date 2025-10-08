import { notFound } from "next/navigation";
import { i18n, type Locale } from "@/i18n";
import { type Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import { Card } from "@/components/ui/card";
import {
  Target,
  Sparkles,
  Users,
  Code,
  Shield,
} from "lucide-react";
import { ensureTrailingSlash } from "@/lib/utils";

// 为所有语言生成静态路径
export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({
    lang,
  }));
}

interface Props {
  params: { lang: string };
}

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);

  return {
    title: {
      template: `%s | Chat Grok`,
      default: dict.about.title,
    },
    description: dict.about.subtitle,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/about`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          ensureTrailingSlash(`/${locale}/about`),
        ])
      ),
    },
  };
}

export default async function AboutPage({ params: { lang } }: Props) {
  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);

  return (
    <div className="min-h-screen">
      <section className="relative py-16 ">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent pt-3">
              {dict.about.title}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            {dict.about.subtitle}
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Mission */}
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold">
                  {dict.about.content.mission.title}
                </h2>
              </div>
              <p className="text-muted-foreground">
                {dict.about.content.mission.text}
              </p>
            </Card>

            {/* Values */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">
                {dict.about.content.values.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dict.about.content.values.items.map((item, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      {index === 0 && (
                        <Sparkles className="h-6 w-6 text-primary" />
                      )}
                      {index === 1 && <Code className="h-6 w-6 text-primary" />}
                      {index === 2 && (
                        <Shield className="h-6 w-6 text-primary" />
                      )}
                      {index === 3 && (
                        <Users className="h-6 w-6 text-primary" />
                      )}
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.text}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
