import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="max-w-screen min-h-screen flex">
      <div className="w-full grid grid-cols-4 space-x-4">
        <div className="xs:hidden mdl:block col-span-1 h-full">
          <Sidebar />
        </div>
        <div className="bg-white xs:col-span-4 mdl:col-span-3 pr-4 xs:pl-0 mdl:pl-6 pb-10 z-10">
          <Header />
          <div className=" mt-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
