import useGuide from "../../../../../hooks/useGuide";



const MeetGuide = () => {
    const [guide] = useGuide();
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Experience</th>
        <th>more</th>
      </tr>
    </thead>
    <tbody>
    {
            guide.map((item,index) => 
        


      <tr key={item._id}>
        <th>{index+1}</th>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.experience}</td>
        <td><button>Details</button></td>
      </tr>
     )}
    
    </tbody>
  </table>
</div>
           
        </div>
    );
};

export default MeetGuide;