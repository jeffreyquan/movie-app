export function formatNumberToCurrency(num: number) {
  const formatter = new Intl.NumberFormat("en-au", {
    style: "currency",
    currency: "AUD",
  });
  return formatter.format(num);
}
