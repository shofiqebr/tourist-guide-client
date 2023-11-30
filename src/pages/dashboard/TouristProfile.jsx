import useAuth from "../../hooks/useAuth";


const TouristProfile = () => {
    const {user} = useAuth();
    console.log(user);
    return (
        <div>
            {user?.displayName}
            {user?.email}
            {user?.photoURL}
        </div>
    );
};

export default TouristProfile;