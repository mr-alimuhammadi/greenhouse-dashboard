export default function toFarsiNumber(n: number) {
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  const farsiNumber = n
    .toString()
    .split("")
    .map((x) => {
      if (x === ".") return x;
      else if (x !== "-") return farsiDigits[parseInt(x)];
    })
    .join("");

  if (n < 0) {
    return farsiNumber + "-";
  }
  return farsiNumber;
}
