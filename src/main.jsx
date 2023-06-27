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

const router = createBrowserRouter([
  {
    element: <AppWrapper/>
  },
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "beer/:beer",
    element: <Beer/>,
    loader: async ({params}) => {
      const res = await fetch(`https://api.punkapi.com/v2/beers/${params}`)
    },
    errorElement: <ErrorPage/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
