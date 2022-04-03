//? Tmlp
const RGX: RegExp = /{{(.*?)}}/g;
export const tmpl = <X>(str: string, mix?: X | undefined): string => {
  return str.replace(RGX, (_, key, y) => {
    let x: number = 0;
    y = mix;
    key = key.trim().split(".");
    while (y && x < key.length) {
      y = y[key[x++]];
    }
    return y !== null ? y : "";
  });
};
