import { Link, Outlet } from "react-router-dom";
import MyProfile from "./myprofile/MyProfile";
// import useAdmin from "../../hooks/useAdmin";
import GuideHome from "./GuideHome";
import UserHome from "./UserHome";
import AdminHome from "./AdminHome";
// import useGuide from "../../hooks/useGuide";


const DashBoard = () => {
    // const [isAdmin] = useAdmin();
    // const [isGuide] = useGuide();
    
    return (
        <div className="max-w-screen-xl flex">
           <div className="w-72 min-h-screen p-10 text-white font-bold bg-slate-600">
            <ul>
                {/* {
                    isAdmin ? <>
                    
                <AdminHome></AdminHome>
                    
                    </>:
                    <>
                    <GuideHome></GuideHome>
                    <UserHome></UserHome>                   
                    </>
                }
                {
                    isGuide ? <>
                    
                <GuideHome></GuideHome>
                    
                    </>:
                    <>
                    <AdminHome></AdminHome>
                    <UserHome></UserHome>                   
                    </>
                }
               */}
               <div>
                admins
                <AdminHome></AdminHome>
               </div>
               <div className="divider divider-accent"></div>
               <div>
                guides
                <GuideHome></GuideHome>
               </div>
               <div className="divider divider-accent"></div>
               <div>
                users
                <UserHome></UserHome>
               </div>


                <div className="divider divider-accent"></div>
                <li>
                    <Link to={'/'}>
                    Home
                    </Link>
                </li>
            </ul>

           </div>
           <div className="flex-1">
            
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default DashBoard;