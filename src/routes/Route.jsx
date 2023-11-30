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
// import StoryDetail from "../pages/home/touriststory/storydetil/AllStories";
import Story1 from "../pages/home/touriststory/storydetil/Story1";
import Story2 from "../pages/home/touriststory/storydetil/Story2";
import Story3 from "../pages/home/touriststory/storydetil/story3";
import Story4 from "../pages/home/touriststory/storydetil/story4";
import AllStories from "../pages/home/touriststory/storydetil/AllStories";
// import AddPackage from "../pages/dashboard/addpackage/AddPackage";
// import MyProfile from "../pages/dashboard/myprofile/MyProfile";
// import ManageUsers from "../pages/dashboard/manageusers/ManageUsers";
import MyProfile from './../pages/dashboard/myprofile/MyProfile';
import AddPackage from './../pages/dashboard/addpackage/AddPackage';
import ManageUsers from './../pages/dashboard/manageusers/ManageUsers';
import TourGuideProfile from "../pages/home/tab/ourPackages/allPackages/TourGuideProfile";
import MyBooking from "../pages/packageDetail/MyBooking";
import MyWishlist from "../pages/home/tab/ourPackages/MyWishlist";
import TouristProfile from "../pages/dashboard/TouristProfile";
import GuideProfile from "../pages/dashboard/GuideProfile";
import MyAssigned from "../pages/dashboard/MyAssigned";

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
          path: 'packageDetail/:id',
          element: <PackageDetail></PackageDetail>,
          // loader: (params)=>fetch(`https://tourist-guide-server-ten.vercel.app/service/${params.id}`)
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
        },
        {
          path:'tourguideprofile',
          element:<TourGuideProfile></TourGuideProfile>
        },
        {
          path: 'mybooking',
          element: <MyBooking></MyBooking>
        },
        {
          path: 'mywishlist',
          element: <MyWishlist></MyWishlist>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: '/dashboard/myprofile',
          element: <MyProfile></MyProfile>  
        },
        {
          path: '/dashboard/addpackage',
          element: <AddPackage></AddPackage>  
        },
        {
          path: '/dashboard/manageusers',
          element: <ManageUsers></ManageUsers>  
        },
        {
          path: '/dashboard/touristprofile',
          element: <TouristProfile></TouristProfile>
        },
        {
          path:'/dashboard/guideprofile',
          element: <GuideProfile></GuideProfile>
        },
        {
          path:'/dashboard/myassigned',
          element: <MyAssigned></MyAssigned>
        }
      ]
    }
  ]);

export default router;