import { PencilSquareIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const getSingleUsers = async () => {
  const { data } = await axiosInstance.get("/users/id");
  return data.location;
};

const Profile = () => {
  const navigation = useNavigate();
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await getSingleUsers();
      setIsLoading(false);
      setInfo(res);
    })();
  }, [location]);

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div className="w-full h-auto mx-auto flex flex-col justify-center">
      <div className="mb-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-[12px] font-normal bg-slate-200/50 p-2 rounded-md"
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
          Back to Users
        </button>
      </div>
      <div className="w-full flex justify-between items-center">
        <h2 className="text-[#213F7D] text-[18px] font-medium">User Profile</h2>
        <div className="">
          <button className=" bg-white text-slate-900 text-[12px] font-medium px-4 py-2 rounded-md ring-[1.4px] ring-slate-900 hover:bg-slate-800 hover:text-white duration-300 ease-in uppercase">
            delete user
          </button>
        </div>
      </div>
      {info.map((item) => (
        <div className="w-full h-auto bg-slate-50 my-5 rounded-md p-6 shadow-md">
          <div className="w-full flex justify-between items-center border-b-[1.4px] pb-4 mb-7">
            <div className="flex items-center">
              <div className="w-24 h-24 rounded-full bg-slate-300 flex justify-center items-center">
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.04053 31.1796C2.47961 28.2202 3.79365 25.6264 5.97961 23.4C8.74053 20.6 12.0732 19.2 15.9796 19.2C19.886 19.2 23.2204 20.6 25.9796 23.4C28.1796 25.6266 29.5062 28.2204 29.9593 31.1796M24.1405 10.0204C24.1405 12.247 23.3468 14.1532 21.7593 15.7408C20.1734 17.3408 18.253 18.1408 16.0001 18.1408C13.7594 18.1408 11.8409 17.3408 10.2409 15.7408C8.65337 14.1533 7.85965 12.247 7.85965 10.0204C7.85965 7.76727 8.65341 5.84679 10.2409 4.25959C11.8409 2.67367 13.7596 1.87991 16.0001 1.87991C18.2532 1.87991 20.1737 2.67367 21.7593 4.25959C23.3468 5.84711 24.1405 7.76739 24.1405 10.0204Z"
                    stroke="#213F7D"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className=" flex justify-items-start flex-col ml-3">
                <h4 className=" text-[16px] font-medium capitalize">
                  {item.name}
                </h4>
                <span className="text-[12px] text-gray-700 font-normal">
                  {item.username}
                </span>
              </div>
            </div>
            <div className="">
              <button className="flex items-center justify-center text-[12px] text-slate-800 font-medium">
                <span className="mr-2 text-slate-600">
                  <PencilSquareIcon width={18} />
                </span>
                Edit Profile
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="w-full">
              <h5 className="text-[15px] text-slate-600 font-normal">
                Personal Information
              </h5>
              <div
                className="my-4 flex flex-wrap gap-4
          "
              >
                <p className="flex flex-col text-[11px] text-slate-500 font-normal uppercase mr-5">
                  email:
                  <span className=" text-slate-600 lowercase font-medium">
                    {item.email}
                  </span>
                </p>
                <p className="flex flex-col text-[11px] text-slate-500 font-normal uppercase mr-5">
                  phone no:{" "}
                  <span className=" text-slate-600 lowercase font-medium">
                    {item.phone}
                  </span>
                </p>
                <p className="flex flex-col text-[11px] text-slate-500 font-normal uppercase mr-5">
                  address:{" "}
                  <span className=" text-slate-600 capitalize font-medium">
                    {`${item.address.street}, ${item.address.suite}, ${item.address.city}`}
                  </span>
                </p>
                <p className="flex flex-col text-[11px] text-slate-500 font-normal uppercase mr-5">
                  website:
                  <span className=" text-blue-800 lowercase font-medium underline">
                    <a href={`https//:${item.website}`}>{item.website}</a>
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full">
              <h5 className=" text-[15px] text-slate-600 font-normal">
                Company Information
              </h5>
              <div
                className="my-4 flex flex-wrap gap-4
          "
              >
                <p className="flex flex-col text-[11px] text-slate-500 font-normal uppercase mr-5">
                  company name:{" "}
                  <span className=" text-slate-600 lowercase font-medium">
                    {item.company.name}
                  </span>
                </p>
                <p className="flex flex-col text-[11px] text-slate-500 font-normal uppercase mr-5">
                  description:{" "}
                  <span className=" text-slate-600 lowercase font-medium">
                    {item.company.catchPhrase}
                  </span>
                </p>
                <p className="flex flex-col text-[11px] text-slate-500 font-normal uppercase mr-5">
                  values:{" "}
                  <span className=" text-slate-600 capitalize font-medium">
                    {item.company.bs}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
