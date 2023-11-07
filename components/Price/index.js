import React, { useState } from "react";
import { Router } from "next/router";
const index = () => {

  const [option, setPackage] = useState(0)

  const array = [];
  return (
    <>
      <div className="w-[90%] ">
        {/* <Navbar /> */}
        <div className="mt-24   mx-auto justify-center">
          <p className="text-3xl font-semibold   text-center">Price Management</p>
          <div className="border border-bottom border-[#d4d4d4] w-full mt-10"></div>
          <div className="flex justify-center space-x-28 mt-2">
            <p onClick={() => setPackage(0)} className={`text-xl font-semibold cursor-pointer ${option === 0 ?  'text-black':'text-gray-500' } `}>Base Clean</p>
            <p onClick={() => setPackage(1)} className={`text-xl font-semibold cursor-pointer ${option === 1 ?  'text-black':'text-gray-500' } `}>Deep Clean</p>
            <p onClick={() => setPackage(2)} className={`text-xl font-semibold cursor-pointer ${option === 2 ?  'text-black':'text-gray-500' } `}>Extras</p>
          </div>
          <div className="border border-bottom border-[#d4d4d4] w-full mt-2"></div>
          <div className="mt-10 mb-10">
            {option !== 2 && (
              <>
                <div className="w-[70%] flex justify-between">
                  <p className="text-xl font-bold">Base Price </p>
                  <p className="border border-1 border-[#dedede] pr-8 rounded-xl pl-3 font-semibold">${option === 0 ? '140' : '160'}</p>

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
              </>
            )}
            {/* extras */}
              {option === 2 && (
                <>
                <div className="flex justify-between w-[70%] mt-2 ml-10">
                  <p className="text-xl cursor-pointer font-semibold">Extras</p>
                  <p className="text-xl cursor-pointer font-semibold">Price</p>
                </div>

                <div className="flex justify-between w-[70%] mt-6 ml-10">
                <p className="text-lg">Inside Oven</p>
                  <p className="border border-1 border-[#dedede] text-md pr-2 rounded-xl pl-3 ">$20</p>
                </div>



                <div className="flex justify-between w-[70%] mt-2 ml-10">
                <p className="text-lg">Inside Windows</p>
                  <p className="border border-1 border-[#dedede] text-md pr-2 rounded-xl pl-3 ">$30</p>
                </div>



                <div className="flex justify-between w-[70%] mt-2 ml-10">
                <p className="text-lg">Inside the Fridge</p>
                  <p className="border border-1 border-[#dedede] text-md pr-2 rounded-xl pl-3 ">$50</p>
                </div>




                <div className="flex justify-between w-[70%] mt-2 ml-10">
                <p className="text-lg">Inside the Cabinets</p>
                  <p className="border border-1 border-[#dedede] text-md pr-2 rounded-xl pl-3 ">$25</p>
                </div>




                <div className="flex justify-between w-[70%] mt-2 ml-10">
                <p className="text-lg">Organization</p>
                  <p className="border border-1 border-[#dedede] text-md pr-2 rounded-xl pl-3 ">$25</p>
                </div>


                <div className="flex justify-between w-[70%] mt-2 ml-10">
                <p className="text-lg">Inside the Dishwasher</p>
                  <p className="border border-1 border-[#dedede] text-md pr-2 rounded-xl pl-3 ">$25</p>
                </div>



                <div className="flex justify-between w-[70%] mt-2 ml-10">
                <p className="text-lg">Inside Garage</p>
                  <p className="border border-1 border-[#dedede] text-md pr-2 rounded-xl pl-3 ">$25</p>
                </div>



                <div className="flex justify-between w-[70%] mt-2 ml-10">
                <p className="text-lg">Microwave</p>
                  <p className="border border-1 border-[#dedede] text-md pr-2 rounded-xl pl-3 ">$25</p>
                </div>



                <div className="flex justify-between w-[70%] mt-2 ml-10">
                <p className="text-lg">Blinds</p>
                  <p className="border border-1 border-[#dedede] text-md pr-2 rounded-xl pl-3 ">$25</p>
                </div>


               
                </>

              )}


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
