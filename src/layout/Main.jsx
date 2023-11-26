import { Outlet } from "react-router-dom";
import Navbar from './../shared/navbar/Navbar';
import { Toaster } from "react-hot-toast";


const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster/>
        </div>
    );
};

export default Main;