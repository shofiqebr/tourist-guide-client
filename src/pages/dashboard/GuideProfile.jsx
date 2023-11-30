import useGuide from "../../hooks/useGuide";


const GuideProfile = () => {
    const [guide]  = useGuide()
    return (


       
        <div className="grid grid-cols-2 gap-6 pl-20">
             <h1>guide profile</h1>
            {
                guide.map(item=>
                    <div key={item._id} className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
    <p>{item.email}</p>
    <div className="card-actions justify-end">
      <button className="btn">experience:{item.experience}</button>
    </div>
  </div>
</div>
                    )
            }
        </div>
    );
};

export default GuideProfile;