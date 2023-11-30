import { Link } from "react-router-dom";



const UserHome = () => {
    return (
        <div>
            <Link to={'/dashboard/touristprofile'}>tourist profile</Link><br />
            <Link to={'/mybooking'}>tourist booking</Link><br />
            <Link to={'/mywishlist'}>My wishlist</Link>
        </div>
    );
};

export default UserHome;