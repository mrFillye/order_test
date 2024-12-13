/**
 * Функция форматирования числа в валютный формат
 */
export const formatCurrency = (value: string): string => {
  const sanitizedValue = value.replace(/[^0-9.]/g, '');

  const [integer, decimal] = sanitizedValue.split('.');

  const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  const formattedDecimal = decimal ? `.${decimal.slice(0, 2)}` : '';

  return `${formattedInteger}${formattedDecimal}`;
};
