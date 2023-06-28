import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import { AppWrapper } from './AppWrapper';
import Home from './routes/root/root';
import ErrorPage from './error-page';
import Page from './routes/page';
import Beer from './routes/beer/beer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Loader } from './components/loader/Loader';

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function sleep(ms) {
  await timeout(ms);
  return true;
}

const fetchPage = async() => {
  const res = await fetch('https://api.punkapi.com/v2/beers?page=2&per_page=10');
  const data = await res.json();
  console.log(data);
  return data;
}

// !!!!! Paginacja ma być root path !!!!!!

const router = createBrowserRouter([
  {
    element: <AppWrapper/>,
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
        errorElement: <ErrorPage/>,
        loader: async ({params}) => {
          const res = await fetch(`https://api.punkapi.com/v2/beers?page=${params.id}&per_page=9`);
          const data = await res.json();
          return {
            currentPageId: params.id,
            data: data,
          }
        }
      },
      {
        path: "beer/:beer",
        element: <Beer/>,
        loader: async ({params}) => {
          // await sleep();
          const res = await fetch(`https://api.punkapi.com/v2/beers/${params.beer}`);
          const data = await res.json();
          console.log(data[0]);
          return data[0];
        },
        errorElement: <ErrorPage/>
      },
      {
        path: '/loading/',
        element: <Loader/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
