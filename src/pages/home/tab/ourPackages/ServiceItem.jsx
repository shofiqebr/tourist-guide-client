import{motion} from "framer-motion"
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceItem = ({item}) => {
  return (
    <div>
      <motion.div className="card w-96 bg-slate-300 shadow-xl"
      initial= {{opacity: 0, translateX:-50,translateY:-50}}
      animate= {{opacity: 1, translateX:0,translateY:0}}
      transition={{duration: 0.3}}
      >
        <figure className="px-10 pt-10">
          <img
            src={item?.spotPhoto}
            alt="Shoes"
            className="rounded-xl w-80 h-72"
          />
          <Link to={'/mywishlist'}>
          
          <span className="absolute top-12 right-12  bg-red-950 text-red-400"><FaRegHeart /></span>
          </Link>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{item?.tripTitle}</h2>
          <p>{item?.tourType}</p>
          <p>{item?.price}</p>
          <div className="card-actions">

            <Link to={`/packageDetail/${item._id}`}>
            
            <button className="btn btn-primary">View Package</button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceItem;
