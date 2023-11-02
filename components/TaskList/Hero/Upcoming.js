import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import UpcomingCard from "./UpcomingCard";

const Upcoming = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const filteredData = data.filter((item) => item.progress === "pending");
  return (
    <div className="bg-[#8cd790] rounded-xl w-11/12 mt-12 pt-8 pl-8 pr-8 pb-4">
      <p className="text-2xl font-semibold text-white">Upcoming</p>
      <Carousel responsive={responsive}>
        {filteredData.map((item) => {
          return (
            <UpcomingCard
              name={item.firstname}
              serviceprovider={item.serviceprovidername}
              date={item.date}
              servicetype={item.servicetype}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Upcoming;
