import { observer } from 'mobx-react';
import { useOrdersStore } from '@/app/context/OrderContext';
import { Card } from '@/shared/components/Card';

const TokenRateEntity = () => {
  const {
    computes: { tokenRate },
  } = useOrdersStore();

  return (
    <Card>
      <h4>Current token rate</h4>
      <p>1 Token = {tokenRate} USD</p>
    </Card>
  );
};

export const TokenRate = observer(TokenRateEntity);
