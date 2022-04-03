//* Rosetta
import { Rosetta } from "@rosetta-pro";
//* Dlv
import { dlv } from "@dlv";
//* Tmpl
import { tmpl } from "@tmpl";

//* Roseeta
export const rosetta = <T>(obj?: Record<string, T>): Rosetta<T> => {
  let locale: string = "";
  let tree: Record<string, T> = obj || {};
  return {
    locale(lang?: string): string {
      return (locale = lang || locale);
    },
    set(lang: string, table: T): void {
      tree[lang] = Object.assign(typeof tree[lang] || {}, table);
    },
    table(lang: string): T | void {
      return tree[lang];
    },
    t<X extends Record<string, any> | any[]>(
      key: string | (string | number)[],
      params?: X,
      lang?: string
    ) {
      const value = dlv(tree[lang || locale], key, "");
      if (typeof value === "function") return value(params);
      if (typeof value === "string") return tmpl(value, params);
      return value;
    },
  };
};
