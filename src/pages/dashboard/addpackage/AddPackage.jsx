import { Link } from "react-router-dom";


const AddPackage = () => {
    return (
        <div>
              <h1 className="text-3xl font-bold text-center py-5">add tour form</h1>

<div className=" min-h-screen bg-base-200">
<div className=" flex-col lg:flex-row-reverse">

<form className="card-body">
<div className="form-control">
  <label className="label">
    <span className="label-text">package name</span>
  </label>
  <input type="text" placeholder="package name" className="input input-bordered" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="label-text">tourist name</span>
  </label>
  <input type="text" placeholder="tourist name" className="input input-bordered" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="label-text">tourist image</span>
  </label>
  <input type="url" placeholder="photoURL" className="input input-bordered" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="label-text">price</span>
  </label>
  <input type="text" placeholder="price" className="input input-bordered" required />
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text">tour date</span>
  </label>
  <input type="date" placeholder="tour date" className="input input-bordered" required />
 <select name="guide" id="">
  <option value="">Amit Hasan</option>
  <option value="">Kamal Hossain</option>
  <option value="">Rahman Khan</option>
  <option value="">Farida Akter</option>
 </select>
</div>
<div className="form-control mt-6">
 {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>Book now</button>
<dialog id="my_modal_2" className="modal">
<div className="modal-box">
<h3 className="font-bold text-lg">Confirm your Booking</h3>
<p className="py-4 text-success"><Link to={'/mybooking'}>MY Booking</Link></p>
</div>
<form method="dialog" className="modal-backdrop">
<button>close</button>
</form>
</dialog>
</div>
</form>
</div>
</div>
        </div>
    );
};

export default AddPackage;