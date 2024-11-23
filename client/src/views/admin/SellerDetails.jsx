import React from "react";

const SellerDetails = () => {
  return (
    <div className="px-2 lg:mr-7">
      <div className="my-3">
        <h1 className="text-xl font-bold">Seller Details</h1>
      </div>
      <div className="flex flex-wrap gap-3 bg-slate-600 p-4 text-white justify-center">
        {/* profile pic */}
        <div className="w-full sm:w-6/12 md:w-3/12  lg:w-3/12 flex flex-col justify-center items-center">
          <div>
            <img src="http://localhost:3000/images/seller.png" alt="" />
          </div>
          <div className="text-black">
            <form>
              <select name="" id="" className="px-2 py-1">
                <option value="">--select--</option>
                <option value="">activate</option>
                <option value="">Deactive</option>
              </select>
              <button
                type="submit"
                className="mx-2 px-2 py-1 bg-red-600 rounded-md text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* General information */}
        <div className=" w-full sm:w-8/12 md:w-4/12   flex flex-col gap-2 ">
          <div className="font-bold">General information</div>
          <div className="bg-white w-full text-black p-3 rounded-lg font-semibold flex flex-col gap-2">
            <div>
              <span>Name : </span>
              <span>Naveen Prakash K V</span>
            </div>
            <div>
              <span>PAN : </span>
              <span>dfdfdff</span>
            </div>
            <div>
              <span>Phone : </span>
              <span>4545454545</span>
            </div>
            <div>
              <span>Email : </span>
              <span>naveen@gmail.com</span>
            </div>
            <div>
              <span>Payment Status : </span>
              <span>Active</span>
            </div>
          </div>
        </div>
        {/* Address */}
        <div className=" w-full sm:w-8/12 md:w-4/12   flex flex-col gap-2 ">
          <div className="font-bold">Address</div>
          <div className="bg-white w-full text-black p-3 rounded-lg font-semibold flex flex-col gap-2">
            <div>
              <span>Name : </span>
              <span>Naveen Prakash K V</span>
            </div>
            <div>
              <span>Village : </span>
              <span>nilambur</span>
            </div>
            <div>
              <span>District : </span>
              <span>malappuram</span>
            </div>
            <div>
              <span>State: </span>
              <span>kerala</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
