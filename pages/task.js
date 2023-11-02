import React from "react";
import Sidebar from "../components/Sidebar/index";
import TaskList from "@/components/TaskList/index"

const task = () => {
  return (
    <div className="w-full flex ">
      <div className="w-[22%] fixed h-full border border-r-2 border-[#d9d9d9]">
        <Sidebar />
      </div>
      <div className="w-[78%] absolute left-[16.67%]">
        <TaskList />
      </div>
    </div>
  );
};

export default task;
