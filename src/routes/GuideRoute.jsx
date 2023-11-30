import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/UseAuth";
import useAdmin from "../hooks/useAdmin";


const GuideRoute = (children) => {
    const [user, loading] = useAuth(); 
    const [isGuide, isGuideLoading] = useAdmin();
    const location = useLocation();

    if(loading || isGuideLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isGuide) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default GuideRoute;