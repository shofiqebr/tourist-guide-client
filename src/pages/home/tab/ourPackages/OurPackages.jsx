import useService from "../../../../hooks/useService";
import ServiceItem from "./ServiceItem";


const OurPackages = () => {
    const [service] = useService();
    return (
        <div className="grid md:grid-cols-3 gap-10">
        {
            service.slice(0,3).map(item => <ServiceItem
                key={item._id}
                item={item}
            ></ServiceItem>)
        }
    </div>
    );
};

export default OurPackages;