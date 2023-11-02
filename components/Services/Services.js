import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Services = () => {
  const [base, setBase] = useState([]);
  const [deep, setDeep] = useState([]);

  const getBookings = async () => {
    const data = await fetch("/api/bookings");
    const res = await data.json();
    let result = res.data.result;
    const base = result.filter((item) => item.servicetype == "base");
    setBase(base);
    const deep = result.filter((item) => item.servicetype == "deep");
    setDeep(deep)
  };

  useEffect(() => {
    getBookings();
  }, []);
  const percentage = 66;
  return (
    <>
    <div>
      <p className="text-4xl font-semibold">Services</p>
      <div className="flex w-full">
        <div className="mt-4 pl-4 pr-3 bg-white rounded-xl w-1/2 pt-3 shadow-lg pb-4">
          <p className="text-xl font-medium">Deep Clean</p>
          <div className="mt-4 w-[60%] flex mx-auto place-content-center">
      <CircularProgressbar
        value={percentage}
        text="12k"
        styles={buildStyles({
          pathColor: '#8cd790', // Set the progress bar color
          textColor: '#000', // Set the text color
          trailColor: '#d6d6d6', // Set the background color
        })}
      />
    </div>
          
        </div>
        <div className="mt-4 ml-8 pl-4 pr-3 bg-white rounded-xl w-1/2 pt-3 shadow-lg pb-4">
          <p className="text-xl font-medium">Base Clean</p>
         
          <div className="mt-4 w-[60%] flex mx-auto place-content-center">
      <CircularProgressbar
        value={percentage}
        text="12k"
        styles={buildStyles({
          pathColor: '#8cd790', // Set the progress bar color
          textColor: '#000', // Set the text color
          trailColor: '#d6d6d6', // Set the background color
        })}
      />
    </div>
          
        </div>




        
      </div>
    </div>
    






    
      
      <div className="flex  mb-10">
        <div className="mt-4 pl-4 pr-3 bg-white rounded-xl w-1/2 pt-3 shadow-lg pb-4">
          <p className="text-xl font-medium">Add-ons</p>
          <div className="mt-4 w-[60%] flex mx-auto place-content-center">
      <CircularProgressbar
        value="68"
        text="12K"
        styles={buildStyles({
          pathColor: '#8cd790', // Set the progress bar color
          textColor: '#000', // Set the text color
          trailColor: '#d6d6d6', // Set the background color
        })}
      />
    </div>
          
        </div>
      




        
      </div>
    
    </>
  );
};

export default Services;
