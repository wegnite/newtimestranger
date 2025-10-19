import { DictionaryContext } from "@/context/DictionaryContext";
import { BaseError } from "@/lib/error";
import React from "react";

export function useDictionary() {
  const context = React.useContext(DictionaryContext);
  if (context === null) {
    throw new BaseError(
      "useDictionary hook must be used within DictionaryProvider"
    );
  }

  return {
    ...context.dictionary,
    locale: context.locale,
  };
}
