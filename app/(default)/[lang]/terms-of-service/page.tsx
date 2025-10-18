import { notFound } from "next/navigation";
import { i18n, type Locale } from "@/i18n";
import { type Metadata } from "next";
import { getDictionary } from "@/lib/dictionary";
import { Card } from "@/components/ui/card";
import {
  ShieldAlert,
  FileText,
  Users,
  RefreshCw,
  Mail,
  Gavel,
  Info,
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
      template: `%s | Digimon Story Time Stranger`,
      default: dict.termsOfService.title,
    },
    description: dict.termsOfService.subtitle,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/terms-of-service`,
      languages: Object.fromEntries(
        i18n.locales.map((locale) => [
          locale,
          ensureTrailingSlash(`/${locale}/terms-of-service`),
        ])
      ),
    },
  };
}

export default async function TermsOfServicePage({ params: { lang } }: Props) {
  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);
  const termsContent = dict.termsOfService.content;

  return (
    <div className="min-h-screen mt-10">
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-7xl space-y-4 mb-5">
            <h1 className="text-3xl sm:text-4xl font-bold">
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent pt-3">
                {dict.termsOfService.title}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {dict.termsOfService.subtitle}
            </p>
          </div>
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold">
                  {termsContent.introduction.title}
                </h2>
              </div>
              <p className="text-muted-foreground">
                {termsContent.introduction.text}
              </p>
            </Card>

            {/* Disclaimer */}
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <ShieldAlert className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold">
                  {termsContent.disclaimer.title}
                </h2>
              </div>
              <p className="text-muted-foreground mb-4">
                {termsContent.disclaimer.text}
              </p>
            </Card>

            {/* User Conduct */}
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Users className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold">
                  {termsContent.userConduct.title}
                </h2>
              </div>
              <p className="text-muted-foreground mb-4">
                {termsContent.userConduct.text}
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {termsContent.userConduct.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Card>

            {/* Content Policy */}
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold">
                  {termsContent.contentPolicy.title}
                </h2>
              </div>
              <p className="text-muted-foreground">
                {termsContent.contentPolicy.text}
              </p>
            </Card>

            {/* Changes to Terms */}
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <RefreshCw className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold">
                  {termsContent.changesToTerms.title}
                </h2>
              </div>
              <p className="text-muted-foreground">
                {termsContent.changesToTerms.text}
              </p>
            </Card>

            {/* Contact */}
            <Card className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-semibold">
                  {termsContent.contact.title}
                </h2>
              </div>
              <p className="text-muted-foreground mb-2">
                {termsContent.contact.text}
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
