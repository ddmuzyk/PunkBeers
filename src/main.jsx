import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/root';
import ErrorPage from './error-page';
import Page from './routes/page';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
    children: [
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
