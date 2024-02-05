import React from "react";
import { Link } from "react-router-dom";

import {
  DocumentChartBarIcon,
  BanknotesIcon,
  UserIcon,
  ClockIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

const MobileSidebar = ({ setMenuOpen, menuOpen }) => {
  const link = [
    {
      id: 1,
      title: "Home",
      path: "/",
      icon: <HomeIcon width={16} />,
    },
    {
      id: 2,
      title: "Users",
      path: "/users",
      icon: <UserIcon width={16} />,
    },
    {
      id: 3,
      title: "History",
      path: "/history",
      icon: <ClockIcon width={16} />,
    },
    {
      id: 4,
      title: "Transactions",
      path: "/transactions",
      icon: <BanknotesIcon width={16} />,
    },
    {
      id: 5,
      title: "Reports",
      path: "/report",
      icon: <DocumentChartBarIcon width={16} />,
    },
  ];
  return (
    <div className=" sm:block md:hidden bg-slate-950 w-[70%] h-[100dvh] top-0 translate-x-0 ease-in-out duration-200 relative z-50">
      <div className="w-full flex justify-center flex-col gap-4 p-4">
        <div className="w-full h-full flex justify-between items-center pt-1">
          <h2 className="text-xl text-blue-900 font-bold uppercase ">
            Devrecruit
          </h2>
          <div
            onClick={() => {
              setMenuOpen(false);
            }}
            className="text-white"
          >
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="2em"
              width="2em"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={32}
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
          </div>
        </div>
        <div className="">
          <h4 className=" text-gray-200 text-[14px] opacity-80 uppercase font-extrabold mb-3 pb-1 border-b-[1.3px]">
            Dashboard
          </h4>
          <ul>
            {link.map((item) => (
              <li
                className="py-1.5 hover:bg-slate-300/90 hover:px-3 transition-transform duration-200 ease-in rounded-md"
                key={item.id}
              >
                <Link to={item.path} className="">
                  <p className="flex text-white items-center font-normal text-[14px]">
                    <span className="text-slate-500 mr-1.5">{item.icon}</span>{" "}
                    {item.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
