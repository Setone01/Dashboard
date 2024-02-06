import { BellIcon, EnvelopeIcon, UserIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileSidebar from "../Sidebar/MobileSidebar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full h-[5rem] flex items-center bg-slate-100 px-5 rounded-md">
      <div className="w-full flex justify-between items-center space-x-5">
        <div onClick={handleMenu} className="sm:block md:hidden cursor-pointer">
          {menuOpen ? (
            " "
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
            </svg>
          )}
        </div>
        <div className="w-full relativ">
          <form action="">
            <div className="xs:w-full mdl:w-[60%] relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  ariaHidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokelinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
            </div>
              <input
                className="w-full block p-2 ps-10 text-[13px] border-[1.3px] border-slate-300/90 bg-white rounded-md placeholder:font-normal outline-none focus:border-[1.3px] focus:border-slate-900"
                type="text"
                placeholder="Search.."
              />
            </div>
          </form>
        </div>
        <div className="w-[40%] flex items-center justify-end gap-4">
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
          <div className="xs:hidden mdl:flex items-center">
          <div className=" mr-3">
              <span className=" w-10 h-10 bg-gray-300 text-indigo-600 flex justify-center items-center rounded-full">
                <UserIcon width={19} />
              </span>
            </div>
            <div className=" ">
              <h4 className=" text-[13px] text-black font-medium capitalize">
                Cobhams Jane
              </h4>
              <p className="text-[10px] text-slate-400 font-medium">Admin</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-0 left-0">
        {menuOpen && <MobileSidebar setMenuOpen={setMenuOpen} />}
      </div>
    </div>
  );
};

export default Header;
