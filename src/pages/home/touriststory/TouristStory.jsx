import { Link } from "react-router-dom";


const TouristStory = () => {
    return (
        <div>
            <h1 className="text-center text-3xl font-bold py-10">Tourist story</h1>
                <p>
                    <Link to={'/story1'}>
                        <div className="text-lg font-bold">

                    Sundarban visit with charm :
                        </div>

                 <span>Sundarban tour is one of the memorable tours of my whole life. I am a passionate traveler. Traveling is my love, passion, dream, and my life. I always travel alone. Because alone travel makes a chance to intimate with nature. Last winter I travel to the Sundarbans for 3days and 2 nights. Every time I had a routine work before the tour. My diary, camera, tripod, tent, coffee maker, pen, hat, water bottle, map, luggage, and my lovely smartphone.</span>
                </Link>
                </p>
                <p>
                    <Link to={'/story2'}>
                        <div className="text-lg font-bold">

                    visiting coxs bazar :
                        </div>

                 <span>Cox’s Bazar Sea Beach, located on the shores of the Bay of Bengal in southern Bangladesh, is renowned for its beauty and is considered the largest sea beach in the world. Stretching for 120 kilometers, it attracts thousands of tourists from around the world each year. The beach is famous for its sunrise and sunset views and its diverse marine life, making it a must-visit for all nature enthusiasts.</span>
                </Link>
                </p>
                <p>
                    <Link to={'/story3'}>
                        <div className="text-lg font-bold">

                    Sonargoan :
                        </div>

                 <span>    A lovely day today! It’s amazing how short a distance you need travel from Dhaka to be transported to the relative peace and quiet of rural Bangladesh. The destination of today’s day-trip, with a fellow volunteer, was the ancient city of Sonargaon (‘Golden Town’ in Hindi), 25km southeast of the city, in the Narayanganj district, of the Dhaka division (see post 8 pt. 13). A bus journey from Gulistan station took us to Mograpara, the departure point for the sights that make up the scattered remnants of Old Sonargaon.</span>
                </Link>
                </p>
                <p>
                    <Link to={'/story4'}>
                        <div className="text-lg font-bold">
visit syhelet :
                        </div>

                 <span>Sylhet is one of the most developed cities in South Asian country Bangladesh. Sylhet is well famous for exporting quality tea all over the world and is also known as the Land of Tea Gardens. This city is also well known as Second London because many locals well settled in London and they always contribute a lot to develop their city.</span>
                </Link>
                </p>
                <div className="text-center py-5">
                    <Link to={'/allstories'}>
                    
                    <button className="btn btn-success ">All Stories</button>
                    </Link>
                    </div>
        </div>
    );
};

export default TouristStory;