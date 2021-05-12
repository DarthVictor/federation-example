export const moneyRound = (
  x: number | string | undefined | null,
  digitsAfterPoint = 2
) => (x == null ? x : Number(Number(x).toFixed(digitsAfterPoint)).toString());

export const currencyToSymbol = (code: string) =>
  ({
    RUB: "₽",
    EUR: "€",
    USD: "$",
    GBP: "£",
    JPY: "¥",
  }[code?.toUpperCase()] ?? code?.toUpperCase());
