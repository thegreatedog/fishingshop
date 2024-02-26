import { createBrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import Spining from './Spinning/Spining';
import Layout from './Layonts/Layout';
import ROUTES from './Layonts/ROUTES';
import Carp from './Carp/Carp';
import Feeder from './Feeder/Feeder';
import Rod from './Rod/Rod';
import Basket from './Basket/Basket';

const router = createBrowserRouter([
  {
    path: ROUTES.main,
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: ROUTES.spining,
        element: <Spining />,
      },
      {
        path: ROUTES.item(':type'),
        element: <Rod />,
      },
      {
        path: ROUTES.carp,
        element: <Carp />,
      },
      {
        path: ROUTES.feeder,
        element: <Feeder />,
      },
      {
        path: ROUTES.basket,
        element: <Basket />,
      },
    ],
  },
]);

export default router;
