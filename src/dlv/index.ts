//? Dlv
export const dlv = <X, T>(
  obj: T | Record<string, T> | any,
  key: string | (string | number)[],
  def: string | ((i?: X) => string),
  p: number = 0,
  undef?: T | Record<string, T>
): string | ((i?: X) => string) => {
  let text: (string | number)[] =
    typeof key === "string" ? key.split(".") : key;
  for (p = 0; p < text.length; p++) {
    obj = obj ? obj[text[p]] : undef;
  }
  return obj === undef ? def : obj;
};
