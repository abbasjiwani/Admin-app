import React, { useState, useEffect } from "react";
import Image from "next/image";
import Sales from "./Sales";
import Graph from "./Graph";
import { data } from "autoprefixer";
import  Router  from "next/router";

const index = () => {
  const [profileData, setProfileData] = useState([]);
  const fetchProfile = async () => {
    const data = await fetch("/api/admin_get", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: "ali@baloch.com" }),
    });

    const response = await data.json();
    const profile = response.data.result[0];
    const firstname = profile?.firstname;
    const lastname = profile?.lastname;
    const email = profile?.email;
    const image = profile?.image;

    const blob = new Blob(
      [Uint8Array.from(atob(image), (c) => c.charCodeAt(0))],
      { type: "image/jpeg" }
    );

    const imageUrl = URL.createObjectURL(blob);

    setProfileData({
      firstname: firstname,
      lastname: lastname,
      email: email,
      image: imageUrl,
    });
  };

  const [booking, setBooking] = useState([]);
  const getData = async () => {
    const data = await fetch("/api/GetTask");
    const response = await data.json();
    setBooking(response.data.result);
  };

  useEffect(() => {
    getData();
    fetchProfile();
  }, [data]);

  const [progress, setProgress] = useState(0);
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  useEffect(() => {
    const progress = booking.filter((item) => item.progress === "progress");
    setProgress(progress.length);
    const pending = booking.filter((item) => item.progress === "pending");
    setPending(pending.length);
    const completed = booking.filter((item) => item.progress === "completed");
    setCompleted(completed.length);
  }, [booking]);

  return (
    <>
      <div className="pl-16 mt-20">
        <div className="flex w-full">
          <div className="w-5/6">
            <p className="text-3xl font-bold font-sans">
              {/* Hello, {profileData.firstname + " " + profileData.lastname} */}
              Hello Margaret
            </p>
            {/* <p className="text-lg font-sans mt-1 text-gray-500">
              Track work progress here
            </p> */}
          </div>
          <div className="w-1/6  flex place-content-end ">
            <div>
              {/* <Image
                src="/images/Ellipse 53.png"
                width={400}
                height={400}
                className="w-20  px-2 py-2 rounded-md"
                alt=""
              /> */}
              <svg xmlns="http://www.w3.org/2000/svg" className="border- border-2 border-black rounded-full" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-2"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
            </div>
          </div>
        </div>
        <div className=" border-2 border-b border-[#d9d9d9]"></div>
        {/* <div className="pt-7 flex border-t-2 mt-14 border-[#000000]/[0.3] w-full border-b-2 pb-7">
          <div className="flex place-content-center w-1/3 border-r-2 border-[#D9D9D9]">
            <div className="mt-2">
              <Image
                src="/images/progress.png"
                width={400}
                height={400}
                className="w-12 px-3 py-3 bg-white rounded-full border border-black"
                alt=""
              />
            </div>
            <div className="pl-7">
              <p className="text-xl font-medium">In progress</p>
              <p className="pt-2 font-medium">{progress}</p>
            </div>
          </div>
          <div className="flex place-content-center w-1/3 border-r-2 border-[#D9D9D9]">
            <div className="mt-2">
              <Image
                src="/images/scheduled.png"
                width={400}
                height={400}
                className="w-12 px-3 py-3 bg-white rounded-full border border-black"
                alt=""
              />
            </div>
            <div className="pl-7">
              <p className="text-xl font-medium">Scheduled</p>
              <div className="flex w-full">
                <p className="pt-2 font-medium w-1/2">{pending}</p>
              </div>
            </div>
          </div>
          <div className="flex place-content-center w-1/3">
            <div className="mt-2">
              <Image
                src="/images/completed.png"
                width={400}
                height={400}
                alt=""
                className="w-12 px-3 py-3 bg-white rounded-full border border-black"
              />
            </div>
            <div className="pl-7">
              <p className="text-xl font-medium">Completed</p>
              <div className="flex w-full">
                <p className="pt-2 font-medium w-1/2">{completed}</p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="w-full flex justify-center p-16">
          <Graph/>
        </div>
        <div className="flex justify-between w-[90%] mb-5">
          <button className="bg-[#8cd790] text-white h-20 rounded-2xl w-[30%] py-4" onClick={()=>{Router.push('/users')}}>User Management </button>
          <button className="bg-[#8cd790] text-white h-20 rounded-2xl w-[30%] py-4" onClick={()=>{Router.push('/price')}}>Price Management</button>
          <button className="bg-[#8cd790] text-white h-20 rounded-2xl w-[30%] py-4" onClick={()=>{Router.push('/withdraw')}}>Manage Withdrawals</button>
        </div>

        <div className="flex justify-between w-[90%] mb-5">
          <button className="bg-[#8cd790] text-white h-20 rounded-2xl w-[30%] py-4" onClick={()=>{Router.push('/refund')}}>Manage Refund </button>
          <button className="bg-[#8cd790] text-white h-20 rounded-2xl w-[30%] py-4" onClick={()=>{Router.push('/notifications')}}>Push Notifications</button>
          <button className="bg-[#8cd790] text-white h-20 rounded-2xl w-[30%] py-4" onClick={()=>{Router.push('/onboard')}}>Onboarding Requests</button>
        </div>


        <div className="flex  w-[90%] mb-5">
          <button className="bg-[#8cd790] text-white h-20 rounded-2xl w-[30%] py-4" onClick={()=>{Router.push('/review')}}>Reviews & Ratings </button>
          </div>

      </div>
    </>

  );
};

export default index;
