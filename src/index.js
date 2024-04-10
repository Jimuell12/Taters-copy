import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Branches from './pages/Branches'
import Services from './pages/Services'
import Franchising from './pages/Franchising';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/branches",
    element: <Branches/>
  },
  {
    path: "/services",
    element: <Services/>
  },
  {
    path: "/franchising",
    element: <Franchising/>
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <RouterProvider router={router} />
);

