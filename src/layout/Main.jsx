import { Outlet } from "react-router-dom";
import Navbar from './../shared/navbar/Navbar';
import { Toaster } from "react-hot-toast";
import Footer from "../shared/Footer";
// import Navbar1 from "../shared/navbar/Navbar1";


const Main = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default Main;