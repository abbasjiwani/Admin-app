import React from "react";
import Sidebar from "../components/Sidebar/index";
import Refund from "../components/Refund/index";

const refund = () => {
  return (
    <>
      <div className="w-full flex bg-[#FAFAFA]">
        <div className="w-[22%] border border-r-2 border-[#d9d9d9]">
          <Sidebar />
        </div>
        <div className="w-[78%]">
          <Refund />
        </div>
      </div>
    </>
  );
};

export default refund;
