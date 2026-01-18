import { useState, useCallback } from 'react';

interface UseCurrencyInputOptions {
  locale?: string;
  currency?: string;
  maximumFractionDigits?: number;
}

export const useCurrencyInput = (
  initialValue: number = 0,
  options: UseCurrencyInputOptions = {},
) => {
  const {
    locale = 'es-CO',
    currency = 'COP',
    maximumFractionDigits = 0,
  } = options;

  const [value, setValue] = useState<number>(initialValue);
  const [displayValue, setDisplayValue] = useState<string>(
    formatCurrency(initialValue, locale, currency, maximumFractionDigits),
  );

  const handleChange = useCallback(
    (inputValue: string) => {
      // Remover todo excepto números
      const numericValue = inputValue.replace(/\D/g, '');

      if (numericValue === '') {
        setValue(0);
        setDisplayValue('');
        return;
      }

      const numberValue = parseInt(numericValue, 10);
      setValue(numberValue);
      setDisplayValue(
        formatCurrency(numberValue, locale, currency, maximumFractionDigits),
      );
    },
    [locale, currency, maximumFractionDigits],
  );

  const reset = useCallback(() => {
    setValue(0);
    setDisplayValue('');
  }, []);

  return {
    value,
    displayValue,
    handleChange,
    reset,
    setValue: (newValue: number) => {
      setValue(newValue);
      setDisplayValue(
        formatCurrency(newValue, locale, currency, maximumFractionDigits),
      );
    },
  };
};

function formatCurrency(
  value: number,
  locale: string,
  currency: string,
  maximumFractionDigits: number,
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: maximumFractionDigits,
    minimumFractionDigits: 0,
  }).format(value);
}
