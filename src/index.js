import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import TourApp from "./TourApp";

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/tour",
        element: <TourApp/>,
    },
  ]);
  

ReactDOM.render(<RouterProvider router = {router}/>, document.querySelector('#app'));