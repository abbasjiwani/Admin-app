import React from "react";
import Sidebar from "../components/Sidebar/index";
import User from "../components/User/index";
import Activity from "@/components/Home/Activity";

const users = () => {
  return (
    <div className="w-full flex  bg-[#FAFAFA]">
      <div className="w-[22%]  border border-r-2 border-[#d9d9d9]">
        <Sidebar />
      </div>
      <div className="w-[78%]">
        <div className="w-full">
          <User />
        </div>
      </div>
      
    </div>
  );
};

export default users;
