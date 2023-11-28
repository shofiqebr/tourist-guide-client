import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../layout/Main";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashBoard from "../pages/dashboard/DashBoard";
import PackageDetail from "../pages/packageDetail/PackageDetail";
import AllPackages from "../pages/home/tab/ourPackages/allPackages/AllPackages";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: 'login',
            element: <Login></Login>,
        },
        {
            path: 'register',
            element: <Register></Register>,
        },
        {
          path: 'dashboard',
          element: <DashBoard></DashBoard>,
        },
        {
          path: 'packageDetail',
          element: <PackageDetail></PackageDetail>,
        },
        {
          path: 'allpackages',
          element: <AllPackages></AllPackages>,
        }
      ]
    },
  ]);

export default router;