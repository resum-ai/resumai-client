import App from '@/App';
import { LoginLayout } from '@/components/layout';
import { Join } from '@/pages/join';
import { Setting } from '@/pages/join/setting';

import {
  createBrowserRouter,
  RouteObject,
  RouterProvider
} from 'react-router-dom';

type RouteChildren = {
  auth: boolean;
} & RouteObject;

const routeChildren: RouteChildren[] = [
  {
    path: '/',
    element: <App />,
    auth: false
  },
  {
    path: '/join',
    element: <Join />,
    auth: false
  },
  {
    path: '/join/setting',
    element: <Setting />,
    auth: false
  }
];

const browserRouter = routeChildren.map(({ path, element, auth }) => {
  return {
    path,
    element: auth ? <LoginLayout>{element}</LoginLayout> : element
  };
});

// TODO: 에러페이지, 메타태그
const router = createBrowserRouter([
  {
    path: '/',
    // element:
    // errorElement:
    children: browserRouter
  }
]);

export const Routers = () => {
  return <RouterProvider router={router} />;
};
