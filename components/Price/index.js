import React, { useState } from "react";
import { Router } from "next/router";
const index = () => {

  const array = [];
  return (
    <>
      <div className="w-[90%] ">
        {/* <Navbar /> */}
        <div className="mt-8 ml-14">
          <p className="text-3xl font-semibold mt-28  text-center">Price Management</p>
          <div className="border border-bottom border-[#d4d4d4] w-full mt-10"></div>
          <div className="flex justify-center space-x-28 mt-2">
            <p className="text-xl font-semibold cursor-pointer">Base Clean</p>
            <p className="text-xl font-semibold cursor-pointer">Deep Clean</p>
            <p className="text-xl font-semibold cursor-pointer">Extras</p>
          </div>
          <div className="border border-bottom border-[#d4d4d4] w-full mt-2"></div>
          <div className="mt-10 mb-10">
       
        <div className="w-[70%] flex justify-between">
          <p className="text-xl font-bold">Base Price</p>
          <p className="border border-1 border-[#dedede] pr-8 rounded-xl pl-3 font-semibold">$140</p>

        </div>
        <div className="border border-bottom border-[#d4d4d4] w-[90%] mt-10"></div>
        <div className="flex justify-between w-[70%] mt-2 ml-10">
            <p className="text-xl cursor-pointer">Package Includes</p>
            <p className="text-xl cursor-pointer">Additional Room</p>
          </div>
          <div className="border border-bottom border-[#d4d4d4] w-[90%] mt-2"></div>

          <div className="flex justify-between w-[70%] mt-2 ml-10">
         
          <p className="text-lg">Bedrooms</p>
          <p className="border border-1 border-[#dedede] text-md pr-8 mr-9 rounded-xl pl-3 ">$20</p>
          </div>


          <div className="flex justify-between w-[70%] mt-2 ml-10">
         
          <p className="text-lg">Bathrooms</p>
          <p className="border border-1 border-[#dedede] text-md pr-8 mr-9 rounded-xl pl-3 ">$30</p>
          </div>



          <div className="flex justify-between w-[70%] mt-2 ml-10">
         
          <p className="text-lg">Half Bath</p>
          <p className="border border-1 border-[#dedede] text-md pr-8 mr-9 rounded-xl pl-3 ">$15</p>
          </div>


          <div className="flex justify-between w-[70%] mt-2 ml-10">
         
          <p className="text-lg">Kitchens</p>
          <p className="border border-1 border-[#dedede] text-md pr-8 mr-9 rounded-xl pl-3 ">$50</p>
          </div> 


          <div className="flex justify-between w-[70%] mt-2 ml-10">
         
          <p className="text-lg">Living Room</p>
          <p className="border border-1 border-[#dedede] text-md pr-8 mr-9 rounded-xl pl-3 ">$25</p>
          </div>


          <button className="bg-[#8cd790] text-white mt-10 w-[20%] flex justify-center mx-auto py-2 border rounded-xl">
            Save
          </button>





          
          
          </div>
          
        </div>
      </div>
    </>





    
  );
};

export default index;
