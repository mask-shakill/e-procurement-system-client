import React from "react";

const ClientForm = () => {
  return (
    <div className="mx-14 ">
      <h1 className="text-center  text-green-800 font-bold rounded-xl text-3xl mt-5">
        Tender Form
      </h1>
      <form className="bg-slate-300 p-10 flex flex-col gap-y-6 rounded-xl mt-2 mb-10">
        {/* first section start div  */}
        <div className="flex justify-start gap-x-4 border shadow-xl p-3 rounded-md">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Product Name</label>
            <input
              className="p-2 w-[400px] rounded-md"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Product Quantity</label>
            <input
              className="p-2 w-[400px] rounded-md"
              type="number"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Number of Criteria</label>
            <input
              className="p-2 w-[300px] rounded-md"
              type="number"
              name=""
              id=""
            />
          </div>
        </div>
        {/* first section end  */}
        {/* section 2 */}
        {/* parent div  */}
        <div className="flex flex-col gap-y-2 border shadow-xl rounded-md p-3">
          <div className="">
            <div className="flex flex-col gap-2">
              <label htmlFor="">Criteria-1</label>
              <input
                className="p-2 w-3/4 rounded-md"
                type="number"
                name=""
                id=""
              />
            </div>
          </div>
          {/* child div  */}
          <div className="flex gap-x-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="">Option</label>
              <input
                className="p-2 w-[300px] rounded-md"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Score</label>
              <input
                className="p-2 w-[300px] rounded-md"
                type="number"
                name=""
                id=""
              />
            </div>
          </div>
          {/* child div end  */}
          <div>
            <button className="bg-blue-600 px-3 py-1 rounded-md text-white font-semibold">
              Add Criteria{" "}
            </button>
          </div>
        </div>

        {/* submit form  */}

        <button className="py-3 text-white rounded-lg bg-green-700 hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ClientForm;
