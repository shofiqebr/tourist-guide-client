import { Link } from "react-router-dom";


const AdminHome = () => {
    return (
        <div>
            <li>
                    <Link to={'/dashboard/myprofile'}>My Profile</Link>
                </li>
                <li>
                    <Link to={'/dashboard/addpackage'}>Add Package</Link>
                </li>
                <li>
                    <Link to={'/dashboard/manageusers'}>Manage Users</Link>
                </li>
        </div>
    );
};

export default AdminHome;