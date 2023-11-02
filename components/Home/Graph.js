import React, { useState, useEffect } from "react";
// import Chart from "react-apexcharts";
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false }); // Use dynamic import

const Graph = () => {
  const state = {
    options: {
      colors: ["#8cd790", "#333333"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["March", "April", "May", "June", "July", "August"],
      },
      
    },
    series: [
      {
        name: "Total Users",
        data: [30, 40, 45, 50, 49, 60],
      },
      {
        name: "Total Cleaners",
        data: [23, 36, 33, 28, 34, 47],
      },
    ],
  };

  return (
    <div className="w-full  flex justify-center">
      
      
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="800"
            className="text-black"
          />
      </div>
      
  );
};

export default Graph;
