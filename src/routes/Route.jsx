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
import TourType from "../pages/home/tourType/TourType";
import StoryDetail from "../pages/home/touriststory/storydetil/AllStories";
import Story1 from "../pages/home/touriststory/storydetil/Story1";
import Story2 from "../pages/home/touriststory/storydetil/Story2";
import Story3 from "../pages/home/touriststory/storydetil/story3";
import Story4 from "../pages/home/touriststory/storydetil/story4";
import AllStories from "../pages/home/touriststory/storydetil/AllStories";

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
        },
        {
          path: 'tourType',
          element: <TourType></TourType>
        },
        {
          path: 'allstories',
          element: <AllStories></AllStories>
        },
        {
          path: 'story1',
          element: <Story1></Story1>
        },
        {
          path: 'story2',
          element: <Story2></Story2>
        },
        {
          path: 'story3',
          element: <Story3></Story3>
        },
        {
          path: 'story4',
          element: <Story4></Story4>
        }
      ]
    },
  ]);

export default router;