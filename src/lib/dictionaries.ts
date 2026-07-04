// src/lib/dictionaries.ts
import 'server-only';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  ig: () => import('@/dictionaries/ig.json').then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale) => {
  if (!dictionaries[locale]) {
    return dictionaries.en(); // fallback
  }
  return dictionaries[locale]();
};
