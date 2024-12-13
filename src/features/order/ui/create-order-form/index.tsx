import { useOrdersStore } from '@/app/context/OrderContext';
import { createOrder } from '@/entities/order/api';
import { TokenRate } from '@/entities/order/ui/token-rate';
import { Button } from '@/shared/components/Button';
import { Card } from '@/shared/components/Card';
import { CurrencyInput } from '@/shared/components/CurrencyInput';
import { observer } from 'mobx-react';
import { FormEvent, useEffect, useState } from 'react';
import styles from './index.module.scss';

const CreateOrderFormFeature = () => {
  const [usd, setUsd] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [isTokensMode, setIsTokensMode] = useState<boolean>(true);

  const {
    computes: { tokenRate },
  } = useOrdersStore();

  /**
   * Обновление значения токена в инпуте при
   * обновлении значения приходяшего из сокетов
   */
  useEffect(() => {
    if (isTokensMode) {
      const numToken = parseFloat(token);

      if (!isNaN(numToken)) {
        setUsd((numToken * tokenRate).toFixed(2));

        return;
      }
      setUsd('');

      return;
    }

    const numUsd = parseFloat(usd);

    if (!isNaN(numUsd) && tokenRate !== 0) {
      setToken((numUsd / tokenRate).toFixed(2));

      return;
    }
    setToken('');
  }, [tokenRate, isTokensMode]);

  const handleToggleMode = () => {
    setIsTokensMode((prev) => !prev);
  };

  const handleTokensChange = (value: string) => {
    setToken(value);

    const numToken = parseFloat(value);

    if (!isNaN(numToken) && tokenRate) {
      setUsd((numToken * tokenRate).toFixed(2));

      return;
    }

    setUsd('');
  };

  const handleUsdChange = (value: string) => {
    setUsd(value);

    const numUsd = parseFloat(value);

    if (!isNaN(numUsd) && tokenRate) {
      setToken((numUsd / tokenRate).toFixed(2));
      return;
    }

    setToken('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createOrder({
      amountTokens: Number(token),
      amountDollars: Number(usd),
    });

    setUsd('');
    setToken('');
  };

  return (
    <>
      <TokenRate />
      <Card className={styles.formCard}>
        <form className={styles.form} onSubmit={handleSubmit}>
          {isTokensMode ? (
            <>
              <CurrencyInput
                value={token}
                onChange={(e) => handleTokensChange(e.target.value)}
                currencySymbol='Token'
                placeholder='0.00'
              />
              <Button
                type='button'
                className={styles.swapButton}
                onClick={handleToggleMode}
              >
                Swap token
              </Button>
              <CurrencyInput value={usd} placeholder='0.00' disabled />
            </>
          ) : (
            <>
              <CurrencyInput
                value={usd}
                onChange={(e) => handleUsdChange(e.target.value)}
                placeholder='0.00'
              />
              <Button
                type='button'
                className={styles.swapButton}
                onClick={handleToggleMode}
              >
                Swap USD
              </Button>
              <CurrencyInput
                value={token}
                currencySymbol='Token'
                placeholder='0.00'
                disabled
              />
            </>
          )}
          <Button
            disabled={!usd || !token}
            type='submit'
            className={styles.submitButton}
          >
            Create order
          </Button>
        </form>
      </Card>
    </>
  );
};

export const CreateOrderForm = observer(CreateOrderFormFeature);
