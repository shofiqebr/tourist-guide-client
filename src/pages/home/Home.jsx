import Banner from "./Banner";
import Tabitem from "./tab/Tabitem";
import TourType from "./tourType/TourType";
import TouristStory from "./touriststory/TouristStory";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tabitem></Tabitem>
            <TourType></TourType>
            <TouristStory></TouristStory>
        </div>
    );
};

export default Home;