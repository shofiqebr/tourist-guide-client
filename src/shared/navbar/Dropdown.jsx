import { Link } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";


const Dropdown = () => {
  const {user,logOut} =useAuth();

  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}
    return (
        <div className="flex-none">
       
        <div className="dropdown dropdown-end z-50">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="" src={user?.photoURL} />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li className="text-center">
               {user?.displayName}
            </li>
            <li className="text-center">
              {user?.email}
              </li>
            <button className="nav-button px-3 text-lg font-medium"><Link to='/dashboard'>Dashboard</Link></button>

            {
            user && 
           
                <button onClick={handleLogOut} className="nav-button px-3 text-lg font-medium">LogOut</button>
            
            
        }
          </ul>
        </div>
      </div>
    )
};

export default Dropdown;