import React from "react";
import Sidebar from "../components/Sidebar/index";
import ServiceProvider from "../components/ServiceProvider/index";

const serviceprovider = () => {
  return (
    <div className="w-full flex h-screen bg-[#FAFAFA]">
      <div className="w-[22%] border border-r-2 border-[#d9d9d9]">
        <Sidebar />
      </div>
      <div className="w-[78%] bg-[#FAFAFA]">
        <div className="w-full">
          <ServiceProvider />
        </div>
      </div>
    </div>
  );
};

export default serviceprovider;
