import React,{useState} from "react";
// import Card from "./Card";
import Router from "next/router";
const index = () => {
  const array = [];
  
  return (
    <>
      <div className="w-[90%] mx-auto">
        {/* <Navbar /> */}
        <div className="mt-24 ">
          <p className="text-3xl font-semibold text-center">Push Notifications</p>
          <div className="mt-6">
        <div className="border-2 border-bottom border-[#e2e2e2]"></div>
        <div>
            <p className="font-semibold text-lg mt-10">Notification Title</p>
            <input
            placeholder="Download our new Update"
            className="border rounded-xl w-[70%] py-2 mt-2 p-4 border-[#cccccc]"
            />

<p className="font-semibold text-lg mt-5">Notification Message</p>
            <textarea
            placeholder="Have you seen the new feature on our platform,check out our new update and get involved...."
            className="border rounded-xl  w-[70%] py-7 mt-2 p-4 border-[#cccccc]"
            />
            <p className="font-semibold text-lg mt-5">Notification Date</p>
            <input
            placeholder="MM/DD/YYYY"
            className="border rounded-xl w-[70%] py-2 mt-2 p-4 border-[#cccccc]"
            />
            <div className="flex justify-between w-[70%] ">
                <div>
                <p className="font-semibold text-lg  mt-5">Notification Time</p>
            <input
            placeholder="HH:MM:SS"
            className="border rounded-xl w-[100%] py-2 mt-2 p-4 border-[#cccccc]"
            />
                </div>
                <div>
                <p className="font-semibold text-lg mt-5">Time Zone</p>
            <input
            placeholder="EST"
            className="border rounded-xl w-[100%] py-2 mt-2 p-4 border-[#cccccc]"
            />
                </div>

            </div>
            <p className="font-semibold text-lg  mt-5">Audience</p>
            <div className="flex justify-between w-[70%] mt-3">
            <label >
  <input type="radio" />
  <span className="ml-2">Send to All</span>
</label>


<label >
  <input type="radio" />
  <span className="ml-2">Send to Cleaner</span>
</label>



<label >
   <input type="radio" />
   <span className="ml-2">Send to Customers</span>
</label>
</div>
<div className=" flex justify-center mb-5 mt-5">
<button className="bg-[#8cd790] text-white px-5 rounded-lg py-2  mt-5 " onClick={()=>{Router.push("/notifications")}}>
    Schedule Notification
</button></div>



        </div>
      

    
          
          
          </div>
          
        </div>
      </div>
    </>
  );
};

export default index;
