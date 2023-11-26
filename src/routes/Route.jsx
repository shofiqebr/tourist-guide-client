import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../layout/Main";
import NotFound from "../pages/NotFound";
import Home from "../home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
        }
      ]
    },
  ]);

export default router;