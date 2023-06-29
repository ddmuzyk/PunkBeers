import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppWrapper } from './AppWrapper';
import ErrorPage from './components/error-page/error-page';
import Page from './routes/page/page';
import Beer from './routes/beer/beer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    element: <AppWrapper/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Page/>,
        errorElement: <ErrorPage/>,
        loader: async () => {
          const res = await fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=9`);
          const data = await res.json();
          return {
            currentPageId: 1,
            data: data,
          }
        }
      },
      {
        path: 'page/:id',
        element: <Page/>,
        loader: async ({params}) => {
          const res = await fetch(`https://api.punkapi.com/v2/beers?page=${params.id}&per_page=9`);
          const data = await res.json();
          return {
            currentPageId: params.id,
            data: data,
          }
        },
        errorElement: <ErrorPage/>,
      },
      {
        path: "beer/:beer",
        element: <Beer/>,
        loader: async ({params}) => {
          const res = await fetch(`https://api.punkapi.com/v2/beers/${params.beer}`);
          const data = await res.json();
          return data[0];
        },
        errorElement: <ErrorPage/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
