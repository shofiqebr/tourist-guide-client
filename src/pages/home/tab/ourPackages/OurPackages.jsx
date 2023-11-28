import { Link } from "react-router-dom";
import useService from "../../../../hooks/useService";
import ServiceItem from "./ServiceItem";


const OurPackages = () => {
    const [service] = useService();
    return (
        <div>
        <div className="grid md:grid-cols-3 gap-10">
        {
            service.slice(0,6).map((item) => <ServiceItem
                key={item._id}
                item={item}
            ></ServiceItem>)
        }
        </div>
        <div className="text-center my-5">
            <Link to={'/allPackages'}>
            
        <button className="btn btn-outline btn-accent">All Packages</button>
            </Link>
        </div>
    </div>
    );
};

export default OurPackages;