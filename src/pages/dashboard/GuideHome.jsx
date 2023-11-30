import { Link } from "react-router-dom";


const GuideHome = () => {
    return (
        <div>
            <Link to={'/dashboard/guideprofile'}>guide profile</Link> <br />
            <Link to={'/dashboard/myassigned'}>My Assigned</Link>
        </div>
    );
};

export default GuideHome;