import Sidebar from "../components/Sidebar/index";
import HomeComponent from "../components/Home/index";
import Activity from "@/components/Home/Activity";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <div className="w-full flex bg-[#FAFAFA]">
        <div className="w-[23%] border border-r-2 border-[#d9d9d9] ">
          <Sidebar />
        </div>
        <div className="w-[77%]">
          <HomeComponent />
        </div>
        {/* <div className="w-[20%] ml-2 mr-2">
          <Activity />
        </div> */}
      </div>
    </>
  );
}
