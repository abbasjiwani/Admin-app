import React from "react";
import Card from "./Card.js";
import { Router } from "next/router";
const   index = () => {
  const array = [];
  const filledStarColor = "#FFD700"; // Color for filled stars
  const emptyStarColor = "#C4C4C4"; // Color for empty stars
  const renderStars = () => {
    const stars = [];
    const totalStars = 5;
    const averageRating=4

    for (let i = 1; i <= totalStars; i++) {
      let starColor = emptyStarColor;

      if (averageRating >= i - 0.5) {
        starColor = filledStarColor;
      } else if (averageRating > i - 1) {
        const fillPercentage = (averageRating - (i - 1)) * 100;
        starColor = `linear-gradient(90deg, ${filledStarColor} ${fillPercentage}%, ${emptyStarColor} ${fillPercentage}%)`;
      }

      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={starColor}
          viewBox="0 0 24 24"
          className="w-5 h-5 mr-1"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5z" />
        </svg>
      );
    }

    return stars;
  };
  return (
    <>
      <div className=" ">
        {/* <Navbar /> */}
        <div className="mt-24 ">
          <p className="text-3xl font-semibold   text-center">New Review & Rating Requests</p>
          <div className=" border-2 border-bottom border-[#e2e2e2] mt-5"></div>
          <div className="mt-10 flex w-[90%] mx-auto justify-between ">
          <div className="bg-white w-[32%] rounded-2xl shadow-xl  pb-4 mb-8">
      
     
     
     
     
      <div className="flex pt-4 pb-4 pl-4 w-[90%]">
        <div className="flex rounded-full cursor-pointer">
          
            <img
              src="/images/Ellipse 53.png"
              alt=""
              width="140"
              height="140"
              z
              className={"h-16 w-16 border-4 border-white"}
              style={{ borderRadius: "50%" }}
            />
          
        </div>
        <div className="ml-4 ">
          <p className="text-lg font-medium">Margaret</p>
          <p className="text-sm font-thin text-gray-400 lowercase">
            Marked the service as completed
          </p>
        </div>
    
      </div>
        <div className="flex justify-between w-[90%] mx-auto">
        <p className="text-sm font-thin text-gray-400">Buyer feedback</p>
        <div className="flex">{renderStars()}</div>
        </div>
      <div className="mt-2 w-[90%] mx-auto">
        <textarea
        className="w-full border h-16 bg-[#e8f7e9] border-[#8cd790] rounded-2xl"
        />
      </div>
      <div className="flex justify-between w-[80%] mx-auto mt-2">
        <button className="text-white bg-[#8cd790] px-4 py-1">Approve</button>
        <button className="text-[#8cd790] border border-1 border-[#8cd790] px-8 py-1">Deny</button>

      </div>

    </div>




    <div className="bg-white w-[32%] rounded-2xl shadow-xl pb-4   mb-8">
      
     
     
     
     
      <div className="flex pt-4 pb-4 pl-4 w-[90%]">
        <div className="flex rounded-full cursor-pointer">
          
            <img
              src="/images/Ellipse 53.png"
              alt=""
              width="140"
              height="140"
              z
              className={"h-16 w-16 border-4 border-white"}
              style={{ borderRadius: "50%" }}
            />
          
        </div>
        <div className="ml-4 ">
          <p className="text-lg font-medium">Margaret</p>
          <p className="text-sm font-thin text-gray-400 lowercase">
            Marked the service as completed
          </p>
        </div>
    
      </div>
        <div className="flex justify-between w-[90%] mx-auto">
        <p className="text-sm font-thin text-gray-400">Buyer feedback</p>
        <div className="flex">{renderStars()}</div>
        </div>
      <div className="mt-2 w-[90%] mx-auto">
        <textarea
        className="w-full border h-16 bg-[#e8f7e9] border-[#8cd790] rounded-2xl"
        />
      </div>
      <div className="flex justify-between w-[80%] mx-auto mt-2">
        <button className="text-white bg-[#8cd790] px-4 py-1">Approve</button>
        <button className="text-[#8cd790] border border-1 border-[#8cd790] px-8 py-1">Deny</button>

      </div>

    </div>










    <div className="bg-white w-[32%] rounded-2xl shadow-xl pb-4  mb-8">
      
     
     
     
     
      <div className="flex pt-4 pb-4 pl-4 w-[90%]">
        <div className="flex rounded-full cursor-pointer">
          
            <img
              src="/images/Ellipse 53.png"
              alt=""
              width="140"
              height="140"
              z
              className={"h-16 w-16 border-4 border-white"}
              style={{ borderRadius: "50%" }}
            />
          
        </div>
        <div className="ml-4 ">
          <p className="text-lg font-medium">Margaret</p>
          <p className="text-sm font-thin text-gray-400 lowercase">
            Marked the service as completed
          </p>
        </div>
    
      </div>
        <div className="flex justify-between w-[90%] mx-auto">
        <p className="text-sm font-thin text-gray-400">Buyer feedback</p>
        <div className="flex">{renderStars()}</div>
        </div>
      <div className="mt-2 w-[90%] mx-auto">
        <textarea
        className="w-full border h-16 bg-[#e8f7e9] border-[#8cd790] rounded-2xl"
        />
      </div>
      <div className="flex justify-between w-[80%] mx-auto mt-2">
        <button className="text-white bg-[#8cd790] px-4 py-1">Approve</button>
        <button className="text-[#8cd790] border border-1 border-[#8cd790] px-8 py-1">Deny</button>

      </div>

    </div>
          
          </div>








          <div className="mt-10 flex w-[90%] mx-auto justify-between ">
          <div className="bg-white w-[32%] rounded-2xl shadow-xl  pb-4 mb-8">
      
     
     
     
     
      <div className="flex pt-4 pb-4 pl-4 w-[90%]">
        <div className="flex rounded-full cursor-pointer">
          
            <img
              src="/images/Ellipse 53.png"
              alt=""
              width="140"
              height="140"
              z
              className={"h-16 w-16 border-4 border-white"}
              style={{ borderRadius: "50%" }}
            />
          
        </div>
        <div className="ml-4 ">
          <p className="text-lg font-medium">Margaret</p>
          <p className="text-sm font-thin text-gray-400 lowercase">
            Marked the service as completed
          </p>
        </div>
    
      </div>
        <div className="flex justify-between w-[90%] mx-auto">
        <p className="text-sm font-thin text-gray-400">Buyer feedback</p>
        <div className="flex">{renderStars()}</div>
        </div>
      <div className="mt-2 w-[90%] mx-auto">
        <textarea
        className="w-full border h-16 bg-[#e8f7e9] border-[#8cd790] rounded-2xl"
        />
      </div>
      <div className="flex justify-between w-[80%] mx-auto mt-2">
        <button className="text-white bg-[#8cd790] px-4 py-1">Approve</button>
        <button className="text-[#8cd790] border border-1 border-[#8cd790] px-8 py-1">Deny</button>

      </div>

    </div>




    <div className="bg-white w-[32%] rounded-2xl shadow-xl pb-4   mb-8">
      
     
     
     
     
      <div className="flex pt-4 pb-4 pl-4 w-[90%]">
        <div className="flex rounded-full cursor-pointer">
          
            <img
              src="/images/Ellipse 53.png"
              alt=""
              width="140"
              height="140"
              z
              className={"h-16 w-16 border-4 border-white"}
              style={{ borderRadius: "50%" }}
            />
          
        </div>
        <div className="ml-4 ">
          <p className="text-lg font-medium">Margaret</p>
          <p className="text-sm font-thin text-gray-400 lowercase">
            Marked the service as completed
          </p>
        </div>
    
      </div>
        <div className="flex justify-between w-[90%] mx-auto">
        <p className="text-sm font-thin text-gray-400">Buyer feedback</p>
        <div className="flex">{renderStars()}</div>
        </div>
      <div className="mt-2 w-[90%] mx-auto">
        <textarea
        className="w-full border h-16 bg-[#e8f7e9] border-[#8cd790] rounded-2xl"
        />
      </div>
      <div className="flex justify-between w-[80%] mx-auto mt-2">
        <button className="text-white bg-[#8cd790] px-4 py-1">Approve</button>
        <button className="text-[#8cd790] border border-1 border-[#8cd790] px-8 py-1">Deny</button>

      </div>

    </div>










    <div className="bg-white w-[32%] rounded-2xl shadow-xl pb-4  mb-8">
      
     
     
     
     
      <div className="flex pt-4 pb-4 pl-4 w-[90%]">
        <div className="flex rounded-full cursor-pointer">
          
            <img
              src="/images/Ellipse 53.png"
              alt=""
              width="140"
              height="140"
              z
              className={"h-16 w-16 border-4 border-white"}
              style={{ borderRadius: "50%" }}
            />
          
        </div>
        <div className="ml-4 ">
          <p className="text-lg font-medium">Margaret</p>
          <p className="text-sm font-thin text-gray-400 lowercase">
            Marked the service as completed
          </p>
        </div>
    
      </div>
        <div className="flex justify-between w-[90%] mx-auto">
        <p className="text-sm font-thin text-gray-400">Buyer feedback</p>
        <div className="flex">{renderStars()}</div>
        </div>
      <div className="mt-2 w-[90%] mx-auto">
        <textarea
        className="w-full border h-16 bg-[#e8f7e9] border-[#8cd790] rounded-2xl"
        />
      </div>
      <div className="flex justify-between w-[80%] mx-auto mt-2">
        <button className="text-white bg-[#8cd790] px-4 py-1">Approve</button>
        <button className="text-[#8cd790] border border-1 border-[#8cd790] px-8 py-1">Deny</button>

      </div>

    </div>
          
          </div>
          
        </div>
      </div>
    </>
  );
};

export default index;
