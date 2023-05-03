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
import Registration from './Components/Registration';
import Login from './Components/Login';
import AuthProviders from './Components/Providers/AuthProviders';


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
          path: "/registration",
          element: <Registration></Registration>
      },
      {
        path:"/login",
        element:<Login></Login>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />

    </AuthProviders>
  </React.StrictMode>,
)
