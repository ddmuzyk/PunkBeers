import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import { AppWrapper } from './AppWrapper';
import Home from './routes/root';
import ErrorPage from './error-page';
import Page from './routes/page';
import Beer from './routes/beer';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function sleep() {
  await timeout(3000);
  return true;
}

const router = createBrowserRouter([
  {
    element: <AppWrapper/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage/>,
      },
      {
        path: "beer/:beer",
        element: <Beer/>,
        loader: async ({params}) => {
          await sleep();
          const res = await fetch(`https://api.punkapi.com/v2/beers/${params.beer}`);
          const data = await res.json();
          console.log(data);
          return data;
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
