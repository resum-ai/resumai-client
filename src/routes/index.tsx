import App from '@/App';
import { Layout, LoginLayout, ResumeLayout } from '@/components/layout';
import { Draft } from '@/pages/create/Draft';
import { Join } from '@/pages/join';
import { KakaoCallback } from '@/pages/join/Callback';
import { Setting } from '@/pages/join/Setting';

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
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    auth: false
  },
  {
    path: '/join',
    element: (
      <Layout>
        <Join />
      </Layout>
    ),
    auth: false
  },
  {
    path: '/accounts/kakao/callback',
    element: (
      <Layout>
        <KakaoCallback />
      </Layout>
    ),
    auth: false
  },
  {
    path: '/join/setting',
    element: (
      <Layout>
        <Setting />
      </Layout>
    ),
    auth: true
  },
  {
    path: '/create/draft',
    element: (
      <ResumeLayout>
        <Draft />
      </ResumeLayout>
    ),
    auth: true
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
