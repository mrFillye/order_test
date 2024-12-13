import { formatCurrency } from '@/shared/utils/currencies';
import classNames from 'classnames';
import {
  InputHTMLAttributes,
  forwardRef,
  useState,
  ChangeEvent,
  useEffect,
} from 'react';
import styles from './index.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  className?: string;
  currencySymbol?: string;
}

export const CurrencyInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      errorMessage,
      currencySymbol = 'USD',
      className,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [formattedValue, setFormattedValue] = useState<string>(
      value?.toString() || ''
    );

    useEffect(() => {
      setFormattedValue(value?.toString() || '');
    }, [value]);

    /**
     * Обработчик изменения значения
     */
    const handleChange = ({
      target,
      ...event
    }: ChangeEvent<HTMLInputElement>) => {
      const rawValue = target.value.replace(/[^0-9.]/g, '');

      const formattedValue = formatCurrency(rawValue);

      setFormattedValue(formattedValue);

      if (!onChange) return;

      onChange({
        ...event,
        target: { ...target, value: rawValue },
      });
    };

    return (
      <div className={classNames(styles.wrapper, className)}>
        {label && <label className={styles.label}>{label}</label>}
        <div className={styles.inputContainer}>
          <span className={styles.prefix}>{currencySymbol}</span>
          <input
            ref={ref}
            className={styles.input}
            value={formattedValue}
            onChange={handleChange}
            {...props}
          />
        </div>
        {errorMessage && <span className={styles.error}>{errorMessage}</span>}
      </div>
    );
  }
);
