import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from "./layouts/Layout"

import CountryDetails, { loader as countryLoader } from "./views/CountryDetails"
import Home, { loader as homeLoader } from "./views/Home"
import NoMatch from "./views/NoMatch"

import "./styles/index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "country/:name",
        element: <CountryDetails />,
        loader: countryLoader,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
