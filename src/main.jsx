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
import Error from './Components/Error/Error'
import Main from './Components/Layout/Main';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  
    children: [
      {
        path:"/",
        element:<Main></Main>,
        loader: () => fetch('/job-category.json'),
      },
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
      {
        path: "feature",
        element: <FeaturedJobs></FeaturedJobs>
      }
      ,
      {
        path: "viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader:async({params}) => {
          const res = await fetch("/job.json");
          const data =await res.json();
          // console.log(data);
          return data.find(job => job.id == params.id)
        }
        
      }
      
    ]

  }
  ,{
    path:'*',
    element:<Error></Error>
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
