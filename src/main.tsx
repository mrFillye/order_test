import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { OrdersProvider } from './app/context/OrderContext';
import './index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OrdersProvider>
      <App />
    </OrdersProvider>
  </StrictMode>
);
