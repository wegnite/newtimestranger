import { notFound } from "next/navigation";
import { i18n, type Locale } from "@/i18n";
import { type Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import { Card } from "@/components/ui/card";
import { Shield, FileText, Database, Lock, User, Mail } from "lucide-react";
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
      template: `%s | Knit Out`,
      default: dict.privacy.title,
    },
    description: dict.privacy.subtitle,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/privacy`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          ensureTrailingSlash(`/${locale}/privacy`),
        ])
      ),
    },
  };
}

export default async function PrivacyPage({ params: { lang } }: Props) {
  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);

  return (
    <div className="min-h-screen mt-10">
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-7xl space-y-4 mb-5">
            <h1 className="text-3xl sm:text-4xl font-bold">
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent pt-3">
                {dict.privacy.title}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {dict.privacy.subtitle}
            </p>
            <p className="text-sm text-muted-foreground">
              {dict.privacy.lastUpdated}
            </p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold">
                  {dict.privacy.content.introduction.title}
                </h2>
              </div>
              <p className="text-muted-foreground">
                {dict.privacy.content.introduction.text}
              </p>
            </Card>

            {/* Data Collection */}
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Database className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold">
                  {dict.privacy.content.dataCollection.title}
                </h2>
              </div>
              <p className="text-muted-foreground mb-4">
                {dict.privacy.content.dataCollection.text}
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {dict.privacy.content.dataCollection.items.map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </Card>

            {/* Data Usage */}
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Lock className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold">
                  {dict.privacy.content.dataUsage.title}
                </h2>
              </div>
              <p className="text-muted-foreground mb-4">
                {dict.privacy.content.dataUsage.text}
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {dict.privacy.content.dataUsage.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Card>

            {/* Data Security */}
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold">
                  {dict.privacy.content.dataSecurity.title}
                </h2>
              </div>
              <p className="text-muted-foreground">
                {dict.privacy.content.dataSecurity.text}
              </p>
            </Card>

            {/* User Rights */}
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <User className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold">
                  {dict.privacy.content.userRights.title}
                </h2>
              </div>
              <p className="text-muted-foreground">
                {dict.privacy.content.userRights.text}
              </p>
            </Card>

            {/* Contact */}
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold">
                  {dict.privacy.content.contact.title}
                </h2>
              </div>
              <p className="text-muted-foreground mb-2">
                {dict.privacy.content.contact.text}
              </p>
              <p className="text-primary font-medium">
                {dict.privacy.content.contact.email}
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
