import { getDictionary } from "@/lib/dictionary";
import { Card } from "@/components/ui/card";
import { Shield, FileText, Database, Lock, User, Mail } from "lucide-react";
import {MainLayout} from "@/components/layouts/main-layout";
import AdContainer from "@/components/common/AdContainer";
import {LocaleSuggest} from "@/components/locale/LocaleSuggest";
import DictionaryProvider from "@/context/DictionaryContext";

export async function generateMetadata() {
  const dict = await getDictionary('en');
  return {
    title: dict.privacy.title,
    description: dict.privacy.subtitle,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/privacy`,
    },
  };
}

export default async function PrivacyPage() {
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
                  {dict.privacy.title}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                {dict.privacy.subtitle}
              </p>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-8">
                {/* Introduction */}
                <Card className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Shield className="h-8 w-8 text-primary" />
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
        <AdContainer/>
        <LocaleSuggest currentLang={lang}/>
      </MainLayout>
    </DictionaryProvider>
  );
}