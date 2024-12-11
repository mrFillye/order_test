import { Button } from '@/shared/components/Button';
import { Card } from '@/shared/components/Card';
import { CurrencyInput } from '@/shared/components/CurrencyInput';
import { useState } from 'react';
import styles from './index.module.scss';

export const CreateOrderForm = () => {
  const [amount, setAmount] = useState<string>('');

  return (
    <Card>
      <form className={styles.form}>
        <CurrencyInput
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder='0.00'
        />
        <CurrencyInput
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          currencySymbol='Token'
          placeholder='0.00'
        />
      </form>
      <Button
        disabled={!amount}
        style={{ width: '300px' }}
        type='submit'
        className={styles.button}
      >
        Create order
      </Button>
    </Card>
  );
};
