import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import ErrorPage from './Components/ErrorPage';
import App from './App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage/>,
    children: [
      {
          path: "/",
          element: <Home></Home>, 
      },
      {
        path:'/contact',
        element:<Contact></Contact>,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
