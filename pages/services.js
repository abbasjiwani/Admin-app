import React from "react";
import Sidebar from "../components/Sidebar/index";
import Services from "../components/Services/index";

const service = () => {
  return (
    <div className="w-full flex b-[#FAFAFA]">
      <div className="w-[22%] fixed h-full border border-r-2 border-[#d9d9d9]">
        <Sidebar />
      </div>
      <div className="w-[78%] absolute left-[16.67%] bg-[#FAFAFA]">
        <div className="w-full">
          <Services />
        </div>
      </div>
    </div>
  );
};

export default service;
