import { BellIcon, EnvelopeIcon, UserIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="grid grid-cols-1 h-[5rem] bg-slate-50 px-5 rounded-md">
      <div className="grid grid-cols-6 items-center space-x-3">
        <div className=" col-span-2">
          <form action="">
            <div className="">
              <input
                className="w-full px-3 py-1.5 text-[13px] bg-white rounded-md placeholder:font-normal outline-none focus:border-[1.4px] border-slate-900"
                type="text"
                placeholder="Search.."
              />
            </div>
          </form>
        </div>
        <div className="col-span-4 flex justify-end">
          <div className=" w-[250px] flex items-center gap-4">
            <div className=" max-w-max flex items-center text-slate-500 gap-4 z-20">
              <span className=" relative">
                <Link>
                  <BellIcon width={21} />
                  <div className="absolute h-2 w-2 rounded-full bg-red-600 top-0 right-[2px]"></div>
                </Link>
              </span>
              <span className="">
                <Link>
                  <EnvelopeIcon width={21} />
                </Link>
              </span>
            </div>
            <div className=" max-w-max flex items-center gap-3">
              <div className=" w-10 h-10 bg-gray-300 text-indigo-600 flex justify-center items-center rounded-full">
                <UserIcon width={19}/>
              </div>
              <div className="">
                <h4 className=" text-[13px] text-black font-medium capitalize">
                  Cobhams Jane
                </h4>
                <p className="text-[10px] text-slate-400 font-medium">
                  Admin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
