import React from "react";
// import { link } from "../../assets/constant";
import { Link } from "react-router-dom";

import {
  DocumentChartBarIcon,
  BanknotesIcon,
  UserIcon,
  ClockIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  const link = [
    {
      id: 1,
      title: "Home",
      path: '/',
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
    <div className="sm:hidden md:block bg-slate-950 w-full h-full fixed">
      <div className=" p-4">
        <h2 className=" text-2xl text-blue-900 font-bold uppercase mb-6">Devrecruit</h2>
        <div className="">
          <h4 className=" text-gray-200 text-[14px] opacity-80 uppercase font-extrabold mb-3 pb-1 border-b-[1.3px]">Dashboard</h4>
          <ul>
            {link.map((item) => (
              <li className="py-1.5 hover:bg-slate-300/90 hover:px-3 transition-transform duration-200 ease-in rounded-md" key={item.id}>
                <Link to={item.path} className="">
                  <p className="flex text-white items-center font-normal text-[14px]">
                    <span className="text-slate-500 mr-1.5">{item.icon}</span> {item.title}
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

export default Sidebar;
