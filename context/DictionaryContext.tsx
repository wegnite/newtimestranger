// dictionary-provider.tsx
"use client";
import React from "react";

export const DictionaryContext = React.createContext<{
  dictionary: any;
  locale: string;
} | null>(null);

export default function DictionaryProvider({
  dictionary,
  locale,
  children,
}: {
  dictionary: any;
  locale: string;
  children: React.ReactNode;
}) {
  return (
    <DictionaryContext.Provider value={{ dictionary, locale }}>
      {children}
    </DictionaryContext.Provider>
  );
}
