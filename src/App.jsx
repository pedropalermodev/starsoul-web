import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import AdminLayout from "./layout/admin";
import UserLayout from "./layout/user";

// User Pages
import Home from "./pages/User/Home";
import Contact from "./pages/User/Contact";
import AboutUs from "./pages/User/AboutUs";
import AboutMeditation from "./pages/User/AboutMeditation";
import PrivacyPoliciesAndTermsOfUse from "./pages/User/PrivacyPoliciesAndTermsOfUse";


// Admin Pages
import Dashboard from "./pages/Admin/Dashboard";
import AccessManagement from "./pages/Admin/AccessManagement";
import ContentManagement from "./pages/Admin/ContentManagement";


const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about-us',
        element: <AboutUs />
      },
      {
        path: '/about-meditation',
        element: <AboutMeditation />
      },
      {
        path: '/privacy-policy-and-terms-of-use',
        element: <PrivacyPoliciesAndTermsOfUse />
      },
    ]
  },
  {
    path: '/console',
    element: <AdminLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'access-management',
        element: <AccessManagement />
      },
      {
        path: 'content-management',
        element: <ContentManagement />
      },
    ]
  }

])


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
