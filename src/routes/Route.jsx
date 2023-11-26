import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../layout/Main";
import NotFound from "../pages/NotFound";
import Home from "../home/Home";
import Login from "../pages/Login";

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
        }
      ]
    },
  ]);

export default router;