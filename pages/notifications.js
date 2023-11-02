import React from "react";
import Sidebar from "../components/Sidebar/index";
import Notification from "../components/Notifications/index"

const notification = () => {
  return (
    <>
      <div className="w-full flex bg-[#FAFAFA]">
        <div className="w-[22%] border border-r-2 border-[#d9d9d9]">
          <Sidebar />
        </div>
        <div className="w-[78%]">
          <Notification />
        </div>
      </div>
    </>
  );
};

export default notification;
