import React, {useState, useEffect} from "react";
import RatedServiceProviderSection from "./RatedServiceProviderSection";

const TopRatedServiceProvider = () => {
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
    <div>
      <p className="text-2xl font-semibold mt-6">Top Rated Service Providers</p>
      {topRated
        .filter((item) => item.averageRating > 4)
        .map((item, index) => (
          <RatedServiceProviderSection
            key={index}
            provider={item.provider}
            averageRating={item.averageRating}
            completedJobs={item.reviews.length}
          />
        ))}
    </div>
  );
};

export default TopRatedServiceProvider;
