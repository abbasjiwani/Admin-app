import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/navbar";
import Card from "./Card";
import TopRatedCard from "./TopRatedCard";

const index = () => {
  const [users, setUsers] = useState([]);
  
  const getUsers = async () => {
    const data = await fetch("/api/users");
    const response = await data.json();
    setUsers(response.data.result);
  };

  useEffect(() => {
    getUsers();
  }, []);

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
    getServiceProvider();
  }, []);

  useEffect(() => {
    getRating();
  }, [serviceProvider]);
  return (
    <>
      <div className="flex">
        <div className="w-8/12 mb-12">
          {/* <div className="w-full">
            <Navbar />
          </div> */}
          <div>
            {/* <p className="text-2xl mt-20 flex justify-center font-semibold">User Management</p> */}
            
          <p className="text-3xl font-semibold mt-28  text-center">Withdrawal Requests</p>
          <div className="border border-bottom border-[#d4d4d4] w-full mt-10"></div>
            <div className="flex justify-center space-x-28 mt-2">
            <p className="text-xl font-semibold cursor-pointer">Cleaners</p>
            <p className="text-xl font-semibold cursor-pointer">Users</p>
          </div>
          <div className="border border-bottom border-[#d4d4d4] w-full mt-2"></div>
          </div>
          <div className="ml-14">
            <div className="flex mt-2">
              <p className="text-2xl font-semibold">117,</p>
              <p className="text-lg font-normal mt-1 text-gray-400">
                 total users
              </p>
            </div>
          </div>
          <div className="ml-14 mt-8">
            
                <Card  />
             
          </div>
         
        </div>
        
        
        {/* <div className="w-4/12 mt-4 pl-8 pr-4">
          <div className="w-full bg-[#fafafa]  pl-2 rounded-lg pb-4">
          

                <TopRatedCard/>

          </div>
        </div> */}


      </div>

      
    </>
  );
};

export default index;
