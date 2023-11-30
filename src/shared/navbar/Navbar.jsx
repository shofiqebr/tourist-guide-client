// 

import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import useAuth from "../../hooks/UseAuth";




const Navbar = () => {
  const {user} =useAuth();




  const navOptions = <div className="px-5">
    <Link className="nav-button px-3 text-lg font-medium" to='/'><button>Home</button></Link>
    <Link className="nav-button px-3 text-lg font-medium" to='/community'><button>Community</button></Link>
    <Link className="nav-button px-3 text-lg font-medium" to='/blogs'><button>Blogs</button></Link>
    <Link className="nav-button px-3 text-lg font-medium" to='/aboutUs'><button>About Us</button></Link>
    <Link className="nav-button px-3 text-lg font-medium" to='/contactUs'><button>Contact Us</button></Link>
  
    {
            !user && 
            <Link to='login'>
            
            <button className="nav-button px-3 text-lg font-medium">Login</button>
        
            </Link>
            
        }


    
  
  </div>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
      <div className="flex">
        <img className="w-10" src="https://i.ibb.co/YBtZtRv/logo-2463100-1280.png" alt="" />
        <p>Travello</p>
      </div>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-3">
     {navOptions}
    </ul>
  </div>{
    user && <div className="navbar-end">
    {/* <a className="btn">Button</a> */}
    <Dropdown></Dropdown>
  </div>

  }
  
</div>
        </div>
    );
};

export default Navbar;