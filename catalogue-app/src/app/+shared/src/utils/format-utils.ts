function formatToCurrency(value: number) {
  return Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
  }).format(value);
}

export default {
  formatToCurrency,
};
