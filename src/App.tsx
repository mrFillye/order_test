import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import { Orders } from './pages/orders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Orders />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
