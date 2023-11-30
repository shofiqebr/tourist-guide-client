import { Link, Outlet } from "react-router-dom";
import MyProfile from "./myprofile/MyProfile";


const DashBoard = () => {
    return (
        <div className="max-w-screen-xl flex">
           <div className="w-72 min-h-screen p-10 text-white font-bold bg-slate-600">
            <ul>
                <li>
                    <Link to={'/dashboard/myprofile'}>My Profile</Link>
                </li>
                <li>
                    <Link to={'/dashboard/addpackage'}>Add Package</Link>
                </li>
                <li>
                    <Link to={'/dashboard/manageusers'}>Manage Users</Link>
                </li>
                <div className="divider divider-accent"></div>
                <li>
                    <Link to={'/'}>
                    Home
                    </Link>
                </li>
            </ul>

           </div>
           <div className="flex-1">
            <MyProfile></MyProfile>
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default DashBoard;