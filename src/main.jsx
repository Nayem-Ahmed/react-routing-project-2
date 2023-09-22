import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Statistics from './Components/Statistics.jsx';
import AppliedJobs from './Components/AppliedJobs.jsx';
import Blog from './Components/Blog.jsx';
import ErrorPage from './Components/ErrorPage.jsx';
import ViewDetails from './Components/ViewDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/job/:jobsId",
        loader: () => fetch(`/jobs.json`),
        element: <ViewDetails></ViewDetails>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
