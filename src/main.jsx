import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blogs from './Components/Blogs/Blogs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
