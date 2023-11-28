import useService from "../../../hooks/useService";


const TourType = () => {
    const [service] = useService()
    const bgStyle = {
        background: `url('https://i.ibb.co/ScrxHLk/nature-4216505-1280.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    
        width: "100%",
        height: "85vh",
      };
    return (
        <div >
            <h1 className="text-center text-3xl font-bold py-10">Tour Type</h1>
            <div style={bgStyle}  className="flex text-white flex-row gap-10 justify-center items-center text-3xl font-bold">
                {service.map(item =>

                
                    <div key={item._id}>
                        
                        <button className="btn btn-outline font-extrabold text-white text-xl">
                            {item.tourType}</button>

                            </div>
                    
                )}
            </div>
        </div>
    );
};

export default TourType;