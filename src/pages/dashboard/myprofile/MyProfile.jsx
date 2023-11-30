
import useAuth from './../../../hooks/useAuth';
const MyProfile = () => {
    const {user} = useAuth()
    return (
        <div>   <h1>Admin</h1>
            {user?.displayName}
            {user?.photoURL}
            {user?.email}
        </div>
    );
};

export default MyProfile;