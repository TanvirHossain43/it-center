import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Layout/Home';
import Header from './Components/Header/Header';
import ViewDetails from './Components/ViewDetails/ViewDetails';
import JobCategory from './Components/JobCategory/JobCategory';
import FeaturedJobs from './Components/FeaturedJobs/FeaturedJobs';
import HeaderSecond from './Components/Header/HeaderSecond';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () => fetch('job-category.json'),
    children: [
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "jobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "Blogs",
        element: <Blogs></Blogs>
      },
      // {
      //   path: "second",
      //   element: <HeaderSecond></HeaderSecond>
      // },

      {
        path: "feature",
        element: <FeaturedJobs></FeaturedJobs>
      }
      ,
      // {
      //   path: "/",
      //   element: <HeaderSecond></HeaderSecond>
      // },

      {
        path: "viewDetails",
        element: <ViewDetails></ViewDetails>
      }
    ]

  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
