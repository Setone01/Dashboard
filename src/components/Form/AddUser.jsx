import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
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
    <div className="w-full h-auto">
      <div className="mb-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-[12px] font-normal bg-slate-200/40 p-2 rounded-md"
        >
          <span className="mr-3">
            <svg
              width="28"
              height="10"
              viewBox="0 0 28 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.94997 5.35639C0.994502 5.47123 1.0613 5.5767 1.14684 5.66575L4.89684 9.41575C5.07263 9.5927 5.31285 9.69348 5.56248 9.69348C5.81211 9.69348 6.05232 9.5927 6.22812 9.41575C6.40508 9.23997 6.50586 8.99974 6.50586 8.75011C6.50586 8.50048 6.40508 8.26027 6.22812 8.08447L4.07187 5.93761H26.6562C27.1742 5.93761 27.5937 5.51809 27.5937 5.00011C27.5937 4.48213 27.1742 4.06261 26.6562 4.06261H4.07187L6.22812 1.91575C6.5961 1.54777 6.5961 0.952482 6.22812 0.584502C5.86014 0.216522 5.26485 0.216522 4.89687 0.584502L1.14687 4.3345C1.06133 4.42356 0.994532 4.52903 0.95 4.64386C0.901952 4.75636 0.876173 4.87706 0.875 5.00011C0.876172 5.12316 0.901953 5.24386 0.95 5.35636L0.94997 5.35639Z"
                fill="#545F7D"
              />
            </svg>
          </span>
          Back to Home
        </button>
      </div>
      <div className="w-full p-5 border-[1.3px] rounded-md shadow-md">
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
                    Mobile Number
                  </label>
                  <input
                    className="bg-white px-4 py-2 border-[1.3px] rounded-md text-[12px] font-normal outline-none focus:border-slate-800"
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={updateForm}
                    placeholder="Mobile Number"
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
                    className="bg-white px-4 py-2 border-[1.3px] rounded-md text-[12px] font-normal outline-none focus:border-slate-800"
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
                    className="bg-white px-4 py-2 border-[1.3px] rounded-md text-[12px] font-normal outline-none focus:border-slate-800"
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
                    className="bg-white px-4 py-2 border-[1.3px] rounded-md text-[12px] font-normal outline-none focus:border-slate-800"
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
              <button
                onClick={handleSumbmitForm}
                className=" bg-slate-800 px-6 py-2 text-[12px] text-white font-normal rounded-md uppercase"
              >
                add user
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
