import React from "react";
// import Card from "./Card";
import Router  from "next/router";
const index = () => {
  const array = [];
  return (
    <>
      <div className="w-[90%] mx-auto">
        {/* <Navbar /> */}
        <div className="mt-24 ">
          <p className="text-3xl font-semibold   text-center">Push Notifications</p>
          <div className="mt-10">
        <div className="border-2 border-bottom border-[#e2e2e2]"></div>
       <div className="w-[95%]">
        <button className="mt-5 text-[#8cd790] border border-[#8cd790] px-3 py-1  float-right" onClick={()=>{Router.push("/createnotification")}}>
            Create New 
        </button></div>
        <div className="pt-6 pb-6 text-[#858585] text-xl w-[72%] mt-10  pl-12 text-center  flex justify-between">
            <p >Title</p>
            <p>Date</p>
            <p>Status</p>
           
    </div>
        <div className="pt-6 pb-6 font-semibold bg-white pl-12 rounded-2xl border shadow-lg flex justify-between">
            <p >Notification Title</p>
            <p className="mr-6">MM/DD/YYYY</p>
            <p className="mr-6">Delivered</p>
            <p className="mr-10 cursor-pointer" onClick={()=>{Router.push("/createnotification")}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-edit"><path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"/><polyline points="14 2 14 8 20 8"/><path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"/></svg></p>
      
    </div>
    <div className="pt-6 pb-6 mt-5 font-semibold bg-white pl-12 rounded-2xl border shadow-lg flex justify-between">
            <p >Notification Title</p>
            <p className="mr-6">MM/DD/YYYY</p>
            <p className="mr-6">Delivered</p>
            <p className="mr-10 cursor-pointer" onClick={()=>{Router.push("/createnotification")}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-edit"><path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"/><polyline points="14 2 14 8 20 8"/><path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"/></svg></p>
      
    </div>



    <div className="pt-6 pb-6 mt-5 font-semibold bg-white pl-12 rounded-2xl border shadow-lg flex justify-between">
            <p >Notification Title</p>
            <p className="mr-6">MM/DD/YYYY</p>
            <p className="mr-6">Delivered</p>
            <p className="mr-10 cursor-pointer" onClick={()=>{Router.push("/createnotification")}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-edit"><path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"/><polyline points="14 2 14 8 20 8"/><path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"/></svg></p>
      
    </div>


    <div className="pt-6 pb-6 mt-5 mb-10 font-semibold bg-white pl-12 rounded-2xl border shadow-lg flex justify-between">
            <p >Notification Title</p>
            <p className="mr-6">MM/DD/YYYY</p>
            <p className="mr-6">Delivered</p>
            <p className="mr-10 cursor-pointer" onClick={()=>{Router.push("/createnotification")}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-edit"><path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"/><polyline points="14 2 14 8 20 8"/><path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"/></svg></p>
      
    </div>

    
          
          
          </div>
          
        </div>
      </div>
    </>
  );
};

export default index;
