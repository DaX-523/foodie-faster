import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { AppComponent } from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import BodyComponent from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Shimmer } from './components/Shimmer';

const container = document.getElementById('root');

const root = createRoot(container!);

const About = lazy(() => import('./components/About'));
const Cart = lazy(() => import('./components/Cart'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppComponent />,
    children: [
      {
        path: '/',
        element: <BodyComponent />
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        )
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/cart',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        )
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
