import React from "react";
import Card from "./Card";
import { Router } from "next/router";
const index = () => {
  const array = [];
  return (
    <>
    <div className="flex justify-center w-full">
      <div className="w-[70%] ">
        {/* <Navbar /> */}
        <div className="mt-24 ">
          <p className="text-3xl font-semibold   text-center">Onboarding Requests</p>
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
