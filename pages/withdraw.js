import React from "react";
import Sidebar from "../components/Sidebar/index";
import Withdraw from "../components/Withdraw/index";

const withdraw = () => {
  return (
    <>
      <div className="w-full flex bg-[#FAFAFA]">
        <div className="w-[23%] border border-r-2 border-[#d9d9d9]">
          <Sidebar />
        </div>
        <div className="w-[77%]">
          <Withdraw />
        </div>
      </div>
    </>
  );
};

export default withdraw;
