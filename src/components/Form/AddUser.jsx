import React, { useState } from "react";

const AddUser = () => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    phone: "",
    address: "",
    email: "",
    website: "",
    company: "",
    value: "",
    desc: "",
  });

  const updateForm = (e) =>{
    const value = e.target;
    setForm({...form, [name] :value})
  }
 
  return (
    <div className="w-full h-auto p-5 border-[1.3px] rounded-md shadow-md">
      <div className="">
        <form action="">
          <div className="mb-5">
            <h4 className=" text-[15px] text-slate-500/70 font-medium uppercase">
              personal information
            </h4>
            <div className=" bg-white grid sm:grid-cols-2 md:grid-cols-3 gap-5 py-3">
              <div className="w-full flex justify-normal flex-col">
                <label
                  className="text-[12px] text-slate-600 font-normal pb-1"
                  htmlFor=""
                >
                  Name
                </label>
                <input
                  className="bg-white px-4 py-2 border-[1.3px] rounded-md text-[12px] font-normal outline-none focus:border-slate-800"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="w-full flex justify-normal flex-col">
                <label
                  className="text-[12px] text-slate-600 font-normal pb-1"
                  htmlFor=""
                >
                  Username
                </label>
                <input
                  className="bg-white px-4 py-2 border-[1.3px] rounded-md text-[12px] font-normal outline-none focus:border-slate-800"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="w-full flex justify-normal flex-col">
                <label
                  className="text-[12px] text-slate-600 font-normal pb-1"
                  htmlFor=""
                >
                  Address
                </label>
                <input
                  className="bg-white px-4 py-2 border-[1.3px] rounded-md text-[12px] font-normal outline-none focus:border-slate-800"
                  type="text"
                  placeholder="Address"
                />
              </div>
              <div className="w-full flex justify-normal flex-col">
                <label
                  className="text-[12px] text-slate-600 font-normal pb-1"
                  htmlFor=""
                >
                  Phone no
                </label>
                <input
                  className="bg-white px-4 py-2 border-[1.3px] rounded-md text-[12px] font-normal outline-none focus:border-slate-800"
                  type="text"
                  placeholder="Phone no"
                />
              </div>
              <div className="w-full flex justify-normal flex-col">
                <label
                  className="text-[12px] text-slate-600 font-normal pb-1"
                  htmlFor=""
                >
                  Website
                </label>
                <input
                  className="bg-white px-4 py-2 border-[1.3px] rounded-md text-[12px] font-normal outline-none focus:border-slate-800"
                  type="text"
                  placeholder="Website"
                />
              </div>
            </div>
          </div>
          <div className="">
            <h4 className=" text-[15px] text-slate-500/70 font-medium uppercase">
              company information
            </h4>
            <div className=" bg-white grid sm:grid-cols-2 md:grid-cols-3 gap-5 py-3">
              <div className="w-full flex justify-normal flex-col">
                <label
                  className="text-[12px] text-slate-600 font-normal pb-1"
                  htmlFor=""
                >
                  Company Name
                </label>
                <input
                  className="bg-white px-4 py-2 border-[1.3px] rounded-md text-[12px] font-medium outline-none focus:border-slate-800"
                  type="text"
                  placeholder="Company"
                />
              </div>
              <div className="w-full flex justify-normal flex-col">
                <label
                  className="text-[12px] text-slate-600 font-normal pb-1"
                  htmlFor=""
                >
                  Description
                </label>
                <input
                  className="bg-white px-4 py-2 border-[1.3px] rounded-md text-[12px] font-medium outline-none focus:border-slate-800"
                  type="text"
                  placeholder="Description"
                />
              </div>
              <div className="w-full flex justify-normal flex-col">
                <label
                  className="text-[12px] text-slate-600 font-normal pb-1"
                  htmlFor=""
                >
                  Value
                </label>
                <input
                  className="bg-white px-4 py-2 border-[1.3px] rounded-md text-[12px] font-medium outline-none focus:border-slate-800"
                  type="text"
                  placeholder="Value"
                />
              </div>
            </div>
          </div>
          <div className=" flex justify-end my-4">
            <button className=" bg-slate-800 px-6 py-2 text-[12px] text-white font-normal rounded-md uppercase">
              add user
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
