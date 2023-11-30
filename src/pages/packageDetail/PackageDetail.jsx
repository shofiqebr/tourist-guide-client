// import { useLoaderData } from "react-router-dom";
import useGuide from "../../hooks/useGuide";
import useService from './../../hooks/useService';


const PackageDetail = () => {
    const [service] = useService()
    const [guide] = useGuide();
    // const service = useLoaderData();
    // const {description,_id} = service;
    
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">our tourist spot</h1>
            <div className="grid grid-cols-3 gap-5">
                <div className="col-span-2">
            <img src="https://i.ibb.co/xY9NBM7/tea-2282754-1280.jpg" alt="" />
                </div>

                <div className="flex flex-col col-span-1 gap-5">
            <img src="https://i.ibb.co/XLF0GZS/sonargaon-4002382-1280.jpg" alt="" />
            <img src="https://i.ibb.co/ZKfTw1Y/bisnakandi-2692228-1280.jpg" alt="" />
                </div>


            </div>
             <h1 className="text-3xl font-bold text-center py-5">
                about tour
             </h1>
             <div>
             Cultural Diversity:

Bangladesh is known for its cultural diversity, with influences from Hindu, Buddhist, and Islamic traditions. You can explore ancient temples, mosques, and archaeological sites that reflect the country's rich history.
Dhaka - The Capital City:

Start your tour in Dhaka, the bustling capital city. Visit historical landmarks such as Lalbagh Fort, Ahsan Manzil, and the National Museum. Explore vibrant markets like Shankharia Bazar and experience the chaotic yet charming atmosphere of Old Dhaka.
Historical Sites:

The UNESCO World Heritage Site of Bagerhat, with its impressive collection of 60 dome mosque and other historical structures, is a must-visit. The Sundarbans, the largest mangrove forest in the world, is another UNESCO-listed site offering a unique ecosystem and the opportunity to spot the elusive Bengal tiger.
Rural Charm:

Head to the rural areas to experience the serene beauty of the countryside. The lush green landscapes, traditional villages, and riverine areas provide a peaceful contrast to the urban hustle.
Cox's Bazar:

Explore Cox's Bazar, home to one of the longest sandy beaches in the world. The beach is a perfect place to relax, and you can also visit Himchari National Park and Inani Beach for added natural beauty.
Culinary Delights:

Bangladesh offers a diverse range of culinary delights. Don't miss trying traditional dishes like biryani, bhapa panta (fermented rice soaked in water), and various seafood options, especially in coastal areas.
River Cruises:

Take a leisurely river cruise on the Padma, Meghna, or Jamuna rivers. This provides a unique perspective of rural life, as well as an opportunity to witness the country's natural beauty.
Hill Tracts:

Explore the Chittagong Hill Tracts, home to various indigenous communities. The lush green hills, serene lakes, and unique culture make this region a hidden gem.
Friendly Locals:

One of the highlights of a trip to Bangladesh is the warmth and friendliness of the people. Engage with locals to get a deeper understanding of the culture and traditions.
Remember to check travel advisories and stay informed about the current situation, and always respect local customs and traditions during your visit. Enjoy your tour of Bangladesh!
             </div>

  <h1 className="text-3xl font-bold text-center py-5">tour plan</h1>

             <div className="flex justify-evenly py-5">
           <div>
            <div>day1</div>
            <div>passing town</div>
           </div>
           
           <div>
            <div>day2</div>
            <div>specific area</div>
           </div>
           
           <div>
            <div>day 3</div>
            <div>cultural event</div>
           </div>
           
             </div>


<h1 className="text-3xl font-bold text-center py-5">guide list</h1>

             <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra ">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Experience</th>
    
      </tr>
    </thead>
    <tbody>
    {
            guide.map((item,index) => 
        


      <tr key={item._id}>
        <th>{index+1}</th>
        <td>{item.name}</td>
        <td>{item.experience}</td>
        
      </tr>
     )}
    
    </tbody>
  </table>
</div>
           
        </div>
        
        </div>
    );
};

export default PackageDetail;