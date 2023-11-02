import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/navbar";
import Card from "./Card";
import TopRatedCard from "./TopRatedCard";
import ApprovalCard from "./ApprovalCard";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { data } from "autoprefixer";

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
        console.log(reviews, "Reviews")
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
  let [approvalData, setApprovalData] = useState([]);
  const getAprrovalData = async () => {
    let getData = await fetch("/api/get_serviceproviders");
    let res = await getData.json();
    if (res.data.success) {
      console.log(res);
      let data = res.data.result.filter((item) => item.accepted === false);
      setApprovalData(data);
    }
  };
  useEffect(() => {
    getServiceProvider();
    getAprrovalData();
  }, []);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
  };

  const ApprovedCall = async (data) => {
    const bodyData = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      accepted: true,
    };
    const app = await fetch("/api/get_serviceproviders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });
    const responseApp = await app.json();
    if (responseApp) {
      window.location.reload();
    }
  };
  return (
    <>
      <div className="flex w-full">
        <div className="w-8/12 mb-12">
          <div className="w-full">
            <Navbar />
          </div>
          <div className="ml-14 mt-8">
            <p className="text-3xl font-bold">Service Providers</p>
            <div className="flex mt-2">
              <p className="text-2xl font-semibold">
                {serviceProvider.length},
              </p>
              <p className="text-lg font-normal mt-1 text-gray-400">
                &nbsp;total service Providers
              </p>
            </div>
          </div>
          <div className="ml-14 mt-8">
            {serviceProvider.map((item) => {
              return (
                <Card firstname={item.firstname} profile={item.profile} lastname={item.lastname} email={item.email} topRated={topRated} />
              );
            })}
          </div>
          <div className="w-full ml-14 mt-8">
            {approvalData.map((item) => {
              return (
                <div key={item._id}>
                  <ApprovalCard
                    firstname={item.firstname}
                    lastname={item.lastname}
                    document={item.document}
                    email={item.email}
                    onOpenModal={onOpenModal}
                    onCloseModal={onCloseModal}
                    data={item}
                    ApprovedCall={ApprovedCall}
                  />
                  <Modal
                    open={open}
                    onClose={onCloseModal}
                    center
                    classNames={{
                      modal: "bg-[#b2dbbf] w-[700px]",
                    }}
                  >
                    <p className="text-3xl text-center w-full font-semibold">
                      UPDATE PROFILE
                    </p>
                    <div>
                      <div className="w-full flex mt-4">
                        <input
                          type="text"
                          className="border border-gray-400 h-12 rounded-lg pl-2 w-1/2"
                          placeholder="First Name"
                          value={item.firstname}
                          disabled
                        />
                        <input
                          type="text"
                          className="border border-gray-400 h-12 ml-4 rounded-lg pl-2 w-1/2"
                          placeholder="Last Name"
                          value={item.lastname}
                          disabled
                        />
                      </div>
                      <div className="mt-4">
                        <input
                          type="text"
                          className="border border-gray-400 h-12 rounded-lg pl-2 w-full"
                          placeholder="Last Name"
                          value={item.email}
                          disabled
                        />
                      </div>{" "}
                      <div className="mb-4 mt-4">
                        {document && (
                          <img
                            src={`data:image/jpeg;base64,${item.document}`}
                            alt="Preview"
                            className="w-full h-auto"
                          />
                        )}
                      </div>
                      <div className="flex place-content-end w-full mt-2">
                        <button
                          onClick={onCloseModal}
                          className="w-32 h-12 bg-red-700 rounded-lg text-white font-medium uppercase"
                        >
                          Reject
                        </button>
                        <button className="w-32 h-12 bg-[#8cd790] ml-5 rounded-lg text-black font-medium uppercase">
                          Approve
                        </button>
                      </div>
                    </div>
                  </Modal>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-4/12 mt-4 pl-8 pr-4">
          <div className="w-full bg-[#8cd790] pt-4 pl-2 rounded-lg pb-4">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
