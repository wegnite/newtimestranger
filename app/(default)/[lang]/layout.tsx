import "@/app/globals.css";
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n";
import DictionaryProvider from "@/context/DictionaryContext";
import { MainLayout } from "@/components/layouts/main-layout";
import AdContainer from "@/components/common/AdContainer";
import {LocaleSuggest} from "@/components/locale/LocaleSuggest";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params?.lang);
  const isChinese = params.lang === "zh";
  return (
    <DictionaryProvider dictionary={dictionary}>
      <MainLayout lang={params.lang} footerDict={dictionary.footer}>
        {children}
      </MainLayout>
      <AdContainer />
      <LocaleSuggest currentLang={params.lang} />
    </DictionaryProvider>
  );
}
