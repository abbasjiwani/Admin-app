import React from "react";
import Image from "next/image";

const Card = ({ firstname, lastname, email, topRated, profile }) => {
  let ratings = topRated.filter((item) => item.provider.email == email);
  const filledStarColor = "#FFD700"; // Color for filled stars
  const emptyStarColor = "#C4C4C4"; // Color for empty stars

  const renderStars = () => {
    const stars = [];
    const totalStars = 5;

    for (let i = 1; i <= totalStars; i++) {
      let starColor = emptyStarColor;

      if (ratings[0]?.averageRating >= i - 0.5) {
        starColor = filledStarColor;
      } else if (ratings[0]?.averageRating > i - 1) {
        const fillPercentage = (ratings[0]?.averageRating - (i - 1)) * 100;
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
    <div className="pt-6 pb-6 mt-12 bg-white pl-12 rounded-3xl border shadow-lg">
      <div className="flex w-full">
        <div className="w-1/12">
          <div className="flex rounded-full cursor-pointer">
            {profile == "" || profile == undefined ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 px-2 py-2 text-[#8cd790]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            ) : (
              <img
                src={`data:image/jpeg;base64,${profile}`}
                alt=""
                width="140"
                height="140"
                z
                className={"h-16 w-16 border-4 border-white"}
                style={{ borderRadius: "50%" }}
              />
            )}
          </div>
        </div>
        <div className="mt-2 w-8/12">
          <p className="text-xl font-medium ml-12">
            {firstname + " " + lastname}
          </p>
          <p className="text-md ml-12 text-gray-400 lowercase">@{firstname}</p>
        </div>
        <div className="w-3/12 mt-2">
          <div className="flex">{renderStars()}</div>
          <p className="pt-0.5 text-gray-500 text-sm">
            {ratings[0]?.reviews.length} jobs completed
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
