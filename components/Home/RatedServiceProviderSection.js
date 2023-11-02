import React, {useState} from "react";
import Image from "next/image";

const RatedServiceProviderSection = ({
  provider,
  averageRating,
  completedJobs,
}) => {
  const filledStarColor = "#FFD700"; // Color for filled stars
  const emptyStarColor = "#C4C4C4"; // Color for empty stars

  const renderStars = () => {
    const stars = [];
    const totalStars = 5;

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
    <div>
      <div className="mt-8">
        <div className="flex w-full">
          <div className="w-20 h-20 bg-slate-300 rounded-full" />
          <div className="ml-4 mt-3.5 w-4/12">
            <p className="text-xl font-medium">{provider.firstname}</p>
            <div className="flex mt-1">
            {renderStars()}
            </div>
          </div>
          <div className="mt-7 w-3/12">
            <p className="text-md text-gray-500">{completedJobs} job completed</p>
          </div>
          <div className="mt-7 w-3/12">
            <Image
              src="/images/toprated.png"
              width={400}
              height={400}
              className="w-8"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatedServiceProviderSection;
