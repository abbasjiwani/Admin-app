import React from "react";
import Sidebar from "../components/Sidebar/index";
import CreateNotification from "../components/CreateNotification/index"

const createnotification = () => {
  return (
    <>
      <div className="w-full flex bg-[#FAFAFA]">
        <div className="w-[23%] border border-r-2 border-[#d9d9d9]">
          <Sidebar />
        </div>
        <div className="w-[77%]">
          <CreateNotification />
        </div>
      </div>
    </>
  );
};

export default createnotification;
