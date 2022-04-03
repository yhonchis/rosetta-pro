export interface Rosetta<T> {
  //? Get/Set the language key
  locale(lang?: string): string;
  //? Define or extend the language table
  set(lang: string, table: T): void;
  //? Get the table of translations for a language
  table(lang: string): T | void;
  //? Retrieve a translation segment for the current language
  t<X extends Record<string, any> | any[]>(
    key: string | (string | number)[],
    params?: X,
    lang?: string
  ): string;
}
export const rosetta: <T>(obj?: Record<string, T>) => Rosetta<T>;
