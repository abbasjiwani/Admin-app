import React, { useState, useEffect } from "react";

const ApprovalCard = ({
  firstname,
  lastname,
  email,
  onOpenModal,
  data,
  ApprovedCall
}) => {
  return (
    <div
      className="pt-6 pb-6 mt-12 bg-white pl-12 rounded-3xl border shadow-lg"
    >
      <div className="flex w-full">
        <div className="w-1/12">
          <div className="bg-[#8cd790] text-[12px] underline cursor-pointer pt-3 text-center w-16 rounded-full h-16"  onClick={onOpenModal}>
            Click <br /> Here
          </div>
        </div>
        <div className="mt-2 w-7/12">
          <p className="text-xl font-medium ml-12">
            {firstname + " " + lastname}
          </p>
          <p className="text-md ml-12 text-gray-400 lowercase">{email}</p>
        </div>
        <div className="w-4/12 mt-2 flex ">
          <button className="bg-red-700 w-32 rounded-lg text-white h-12 uppercase font-semibold hover:bg-[#07530B]">
            Reject
          </button>
          <button onClick={() => ApprovedCall(data)} className="bg-[#8cd790] ml-5 w-32 rounded-lg text-white h-12 uppercase font-semibold hover:bg-[#07530B]">
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
