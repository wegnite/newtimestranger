import { getDictionary } from "@/lib/dictionary";
import { Card } from "@/components/ui/card";
import { FileText, Scale, Shield, AlertTriangle, User, Gavel } from "lucide-react";
import {MainLayout} from "@/components/layouts/main-layout";
import AdContainer from "@/components/common/AdContainer";
import {LocaleSuggest} from "@/components/locale/LocaleSuggest";
import DictionaryProvider from "@/context/DictionaryContext";

export async function generateMetadata() {
  const dict = await getDictionary('en');
  return {
    title: dict.termsOfService.title,
    description: dict.termsOfService.subtitle,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/terms-of-service`,
    },
  };
}

export default async function TermsOfServicePage() {
  // 默认使用英文
  const lang = 'en';
  const dict = await getDictionary(lang);

  return (
    <DictionaryProvider dictionary={dict}>
      <MainLayout lang={lang} footerDict={dict.footer}>
        <div className="min-h-screen">
          <section className="relative py-16">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
              <h1 className="text-3xl sm:text-4xl font-bold">
                <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  {dict.termsOfService.title}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                {dict.termsOfService.subtitle}
              </p>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-8">
                {/* Introduction */}
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-semibold">
                      {dict.termsOfService.content.introduction.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground">
                    {dict.termsOfService.content.introduction.text}
                  </p>
                </Card>

                {/* Disclaimer */}
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <AlertTriangle className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-semibold">
                      {dict.termsOfService.content.disclaimer.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground">
                    {dict.termsOfService.content.disclaimer.text}
                  </p>
                </Card>

                {/* User Conduct */}
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <User className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-semibold">
                      {dict.termsOfService.content.userConduct.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {dict.termsOfService.content.userConduct.text}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {dict.termsOfService.content.userConduct.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </Card>

                {/* Content Policy */}
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-semibold">
                      {dict.termsOfService.content.contentPolicy.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground">
                    {dict.termsOfService.content.contentPolicy.text}
                  </p>
                </Card>

                {/* Changes to Terms */}
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Gavel className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-semibold">
                      {dict.termsOfService.content.changesToTerms.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground">
                    {dict.termsOfService.content.changesToTerms.text}
                  </p>
                </Card>

                {/* Contact */}
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Scale className="h-8 w-8 text-primary" />
                    <h2 className="text-2xl font-semibold">
                      {dict.termsOfService.content.contact.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground">
                    {dict.termsOfService.content.contact.text}
                  </p>
                </Card>
              </div>
            </div>
          </section>
        </div>
        <AdContainer/>
        <LocaleSuggest currentLang={lang}/>
      </MainLayout>
    </DictionaryProvider>
  );
}