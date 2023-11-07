import React, { useState } from "react";
import Router from "next/router";
// import Card from "./Card";
const index = () => {
  const array = [];
  const [Popup,setPopup]=useState(false);
  return (
    <>
      <div className="w-[90%] mb-10">
       
        <div className=" mt-24 ml-14">
         <div className="flex  justify-between">
          <p className="text-3xl flex font-semibold ">Profile</p>
          <div className="flex space-x-4">
            <button className="bg-[#8cd790] text-white px-4 border rounded border-2xl" onClick={()=>{Router.push('/onboard')}}>Approve</button>
            <button className="bg-white text-[#8cd790] px-8 border border-[#8cd790] rounded border-2xl" onClick={()=>setPopup(true)}>Deny</button>
          </div>
          </div>

          <div className="border mt-10 rounded-2xl border-[#dedede] p-5">
          <p className="text-2xl flex font-semibold ">Personal Information</p>
          <div className="flex justify-between w-1/2 mt-5">
            <div>
              <p className="text-[#a9a9a9]">First name</p>
              <p>Margaret</p>
            </div>
            <div>
              <p className="text-[#a9a9a9]">Last name</p>
              <p>Ann</p>
            </div>

          </div>


          <div className="flex justify-between w-[57%] mt-5">
            <div>
              <p className="text-[#a9a9a9]">Email address</p>
              <p>margaret@gmail.com</p>
            </div>
            <div className="">
              <p className="text-[#a9a9a9]">Phone</p>
              <p>+1256-98549-6135</p>
            </div>

          </div>
         

          </div>







          <div className="border mt-10 rounded-2xl border-[#dedede] p-5">
          <p className="text-2xl flex font-semibold ">Address</p>
          <div className="flex justify-between w-1/2 mt-5">
            <div>
              <p className="text-[#a9a9a9]">Street Address</p>
              <p>123 Random Street</p>
            </div>
            <div>
              <p className="text-[#a9a9a9]">City</p>
              <p>Manhattan</p>
            </div>

          </div>


          <div className="flex justify-between w-[48%] mt-5">
            <div>
              <p className="text-[#a9a9a9]">State</p>
              <p>New York</p>
            </div>
            <div className="">
              <p className="text-[#a9a9a9]">Zip Code</p>
              <p>33259</p>
            </div>

          </div>
         

          </div>





          <div className="border mt-10 rounded-2xl border-[#dedede] p-5">
          <p className="text-2xl flex font-semibold ">Documentation</p>
         <div className="flex justify-between w-[90%] mx-auto">
          <div className="flex justify-between bg-[#dedede] border w-[40%] rounded-2xl py-24 mt-5">
            

          </div>
          <div className="flex justify-between bg-[#dedede] border w-[40%] rounded-2xl py-24 mt-5">
            

          </div>
          </div>

          
         

          </div>
          
        </div>
      </div>


      {Popup && (
        <>
          <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-[30rem] p-4 rounded-lg shadow-lg">
        <div className="flex justify-end  mb-2">
           <button
                        className="bg-transparent  text-black place-content-end justify-end"
                        onClick={() =>setPopup(false)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                      </button>
        </div>
        <h2 className="place-content-center justify-center flex text-2xl font-semibold mb-4">Enter the Denial Reason</h2>
         
        <textarea
          // value={aboutText}
          // onChange={(e) => setAboutText(e.target.value)}
          className="w-full h-56 border p-2 mb-4 rounded-md shadow-lg bg-[#e8f7e9]"
          // placeholder="TYPE HERE"
        />
        <button
          className="bg-[#8cd790]  text-white w-[20%] py-1 flex justify-center mx-auto rounded-xl"
          onClick={() =>{setPopup(false),Router.push('/onboard')}}
        >
          Save
        </button>
      </div>
    </div>
        </>
      )}
    </>
  );
};

export default index;
