import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import AdminLayout from "./layout/AdminLayout";
import UserLayout from "./layout/UserLayout";

// User Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import AboutMeditation from "./pages/AboutMeditation";

// Admin Pages


const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/about-us',
        element: <AboutUs/>
      },
      {
        path: '/about-meditation',
        element: <AboutMeditation/>
      },
    ]
  },
  {
    path: '/console',
    element: <AdminLayout/>,
    children: [
      {

      }
    ]
  }

])


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
