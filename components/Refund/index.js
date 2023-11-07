import React, { useState } from "react";
import Card from "./Card";
import { Router } from "next/router";
const index = () => {

  const array = [];
  return (
    <>
    <div className="w-full flex justify-center">
      <div className="w-[70%] ">
        {/* <Navbar /> */}
        <div className=" ">
          <p className="text-3xl font-semibold mt-24  text-center">Manage Refunds</p>
          <div className="border border-bottom border-[#d4d4d4] w-full mt-10"></div>
          <div className="flex justify-center space-x-28 mt-2">
            <p className="text-xl font-semibold cursor-pointer">New</p>
            <p className="text-xl font-semibold cursor-pointer">Completed</p>
          </div>
          <div className="border border-bottom border-[#d4d4d4] w-full mt-2"></div>
          <div className="mt-10 mb-10">
       
          <Card />





          
          
          </div>
          
        </div>
      </div>
      </div>
    </>
  );
};

export default index;
