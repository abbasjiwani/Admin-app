import React from "react";

const UpcomingCard = ({name, serviceprovider, date, servicetype}) => {
  return (
    <div className="mt-8 mb-5 pb-5 bg-white rounded-3xl ml-4 pl-8 pt-8">
      <div className="flex">
        <div className="bg-[#8cd790] w-12 h-12 rounded-full" />
        <p className="ml-8 text-xl font-medium pt-2">{servicetype}</p>
      </div>
      <div className="mt-2 flex w-full">
        <div className="w-1/2">
          <p className="text-gray-400">Client</p>
          <p className="font-medium text-lg">{name}</p>
        </div>
        <div className="w-1/2 pr-4">
          <p className="text-gray-400 text-center">Service Provider</p>
          <p className="font-medium text-lg text-right">{serviceprovider}</p>
        </div>
      </div>
      <div className="w-1/2 mt-5">
        <p className="text-gray-400">Date</p>
        <p className="font-medium text-lg">{date}</p>
      </div>
    </div>
  );
};

export default UpcomingCard;
