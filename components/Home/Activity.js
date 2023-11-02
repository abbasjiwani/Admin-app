import React, { useEffect, useState } from "react";
import Image from "next/image";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import TopRatedCard from "../ServiceProvider/TopRatedCard";

const Activity = () => {
  const [open, setOpen] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
    setFirstname("");
    setLastname("");
    setEmail("");
    setFile(null);
    setPreview(null);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = (event) => {
      setPreview(event.target.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      const base64String = await convertToBase64(file);

      try {
        const response = await fetch("/api/admin_post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname,
            lastname,
            email,
            image: base64String,
          }),
        });

        if (response.ok) {
          onCloseModal();
        } else {
          return "Profile Not Updated";
        }
      } catch (error) {
        console.error("Error updating profile:", error);
      }
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const [profileData, setProfileData] = useState([]);
  const fetchProfile = async () => {
    const data = await fetch("/api/admin_get", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: "ali@baloch.com" }),
    });

    const response = await data.json();
    const profile = response.data.result[0];
    const firstname = profile?.firstname;
    const lastname = profile?.lastname;
    const email = profile?.email;
    const image = profile?.image;

    const blob = new Blob(
      [Uint8Array.from(atob(image), (c) => c.charCodeAt(0))],
      { type: "image/jpeg" }
    );

    const imageUrl = URL.createObjectURL(blob);

    setProfileData({
      firstname: firstname,
      lastname: lastname,
      email: email,
      image: imageUrl,
    });
  };
  useEffect(() => {
    fetchProfile();
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
      <div className="flex place-content-center ml-8 mt-4 h-full pb-12 border-l border-[#000000]/[0.3] pl-4">
        <div className="mt-14">
          <div className="w-full h-80 border-1 border-gray-300 rounded-[30px] bg-[#8CD790]/[0.2]">
            <div className="flex place-content-center">
              <Image
                className="w-32 h-32 px-2 py-2 rounded-full border-4 border-gray-200 mt-12"
                src={profileData?.image}
                width={400}
                height={400}
                alt=""
              />
            </div>
            <p className="text-2xl font-bold mt-2 text-center">
              {profileData?.firstname + " " + profileData?.lastname}
            </p>
            <p className="text-lg font-normal text-center text-gray-700 lowercase">
              @{profileData.firstname}
            </p>
            <div className="flex place-content-center mt-6">
              <div
                className="border-2 border-black rounded-full cursor-pointer bg-white shadow-2xl"
                onClick={onOpenModal}
              >
                <Image
                  src="/images/edit.png"
                  width={400}
                  height={400}
                  alt=""
                  className="w-8 px-2 py-2"
                />
              </div>
            </div>
          </div>
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
              <form onSubmit={handleSubmit}>
                <div className="w-full flex mt-4">
                  <input
                    type="text"
                    className="border border-gray-400 h-12 rounded-lg pl-2 w-1/2"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                  <input
                    type="text"
                    className="border border-gray-400 h-12 ml-4 rounded-lg pl-2 w-1/2"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    className="border border-gray-400 h-12 rounded-lg pl-2 w-full"
                    placeholder="Last Name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>{" "}
                <div className="mt-4 w-full flex place-content-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="border rounded p-2 w-full"
                  />
                </div>
                <div className="mb-4 mt-4">
                  {preview && (
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-auto"
                    />
                  )}
                </div>
                <button
                  className="w-full h-12 uppercase text-lg font-semibold bg-[#8cd790] text-white rounded-lg border border-black"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </Modal>
          <div className="ml-5 mt-8">
            <div className="w-full flex">
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
          
        </div>
      </div>
    </>
  );
};

export default Activity;
