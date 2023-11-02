import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/navbar";
import Services from "./Services";
import TopRatedCard from "../ServiceProvider/TopRatedCard";

const index = () => {
  const [serviceProvider, setServiceProvider] = useState([]);
  const [topRated, setTopRated] = useState([]);

  const getServiceProvider = async () => {
    const data = await fetch("/api/serviceprovider");
    const response = await data.json();
    setServiceProvider(response.data.result);
  };

  const getRating = async () => {
    const updatedTopRated = [];
    await Promise.all(
      serviceProvider.map(async (item) => {
        const data = await fetch("/api/GetReviews", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email: item.email }),
        });
        const response = await data.json();
        const reviews = response.data.result;
        const averageRating = calculateAverageRating(reviews);
        console.log(reviews, "Reviews");
        updatedTopRated.push({ provider: item, reviews, averageRating });
      })
    );
    setTopRated(updatedTopRated);
  };

  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) {
      return 0;
    }
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
  };

  useEffect(() => {
    getRating();
  }, [serviceProvider]);

  useEffect(() => {
    getServiceProvider();
  }, []);

  return (
    <>
      <div className="flex">
        <div className="w-8/12">
          <Navbar />
          <div className="ml-14 mt-4">
            <Services />
            {/* <AddingServices /> */}
          </div>
        </div>
        <div className="w-4/12 mt-4 pl-8 pr-4">
          {/* <div className="w-full bg-[#8cd790] pt-4 pl-2 rounded-lg pb-4">
            <p className="text-2xl text-center font-medium text-white">
              Top Rated
            </p>
            <div className="mt-5">
              {topRated
                .filter((item) => item.averageRating >= 4)
                .map((item, index) => (
                  <TopRatedCard
                    key={index}
                    provider={item.provider}
                    averageRating={item.averageRating}
                    completedJobs={item.reviews.length}
                  />
                ))}
                
            </div>
          </div> */}
          
          <div className="w-full bg-[#8cd790] pt-4 pl-2 rounded-lg pb-4">
            <p className="text-2xl text-center font-medium text-white">
              Top Rated
            </p>
            </div>
            <div className="mt-5 ">

                  <TopRatedCard/>
                
                
            </div>
            
    </div>
          

        </div>
      
    </>
  );
};

export default index;
