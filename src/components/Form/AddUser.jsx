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

  const updateForm = (e) => {
    const value = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSumbmitForm = (e) => {
    e.preventDefault();
    alert("User info sumitted");
  };

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
                  name="name"
                  value={form.name}
                  onChange={updateForm}
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
                  name="username"
                  value={form.username}
                  onChange={updateForm}
                  placeholder="Username"
                />
              </div>
              <div className="w-full flex justify-normal flex-col">
                <label
                  className="text-[12px] text-slate-600 font-normal pb-1"
                  htmlFor=""
                >
                  Email
                </label>
                <input
                  className="bg-white px-4 py-2 border-[1.3px] rounded-md text-[12px] font-normal outline-none focus:border-slate-800"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={updateForm}
                  placeholder="highdev@example.com"
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
                  name="address"
                  value={form.address}
                  onChange={updateForm}
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
                  name="phone"
                  value={form.phone}
                  onChange={updateForm}
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
                  name="website"
                  value={form.website}
                  onChange={updateForm}
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
                  name="company"
                  value={form.company}
                  onChange={updateForm}
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
                  name="desc"
                  value={form.desc}
                  onChange={updateForm}
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
                  name="value"
                  value={form.value}
                  onChange={updateForm}
                  placeholder="Value"
                />
              </div>
            </div>
          </div>
          <div className=" flex justify-end my-4">
            <button onClick={handleSumbmitForm} className=" bg-slate-800 px-6 py-2 text-[12px] text-white font-normal rounded-md uppercase">
              add user
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
