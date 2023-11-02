import React,{useState,useEffect} from "react";
import Image from "next/image";
import { Modal } from "react-responsive-modal";

const Card = () => {
  const filledStarColor = "#FFD700"; // Color for filled stars
  const emptyStarColor = "#C4C4C4"; // Color for empty stars

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

  const renderStars = () => {
    const stars = [];
    const totalStars = 5;
    const averageRating=4

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
    <>



<div className="w-full h-80 border-1 border-gray-300 rounded-[30px] bg-[#8CD790]/[0.2]">
            <div className="flex place-content-center">
              <Image
                className="w-28 h-28 px-2 py-2 rounded-full mt-12"
                src="/images/Ellipse 53.png"
                width={200}
                height={200}
                alt=""
              />
            </div>
            <p className="text-2xl font-bold mt-2 text-center">
              Margaret
            </p>
            <p className="text-lg font-normal text-center text-gray-700 lowercase">
              @Margater
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
          <div className="py-8 text-center text-xl font-semibold">
            New Rating Request
          </div>
    <div className="bg-white rounded-2xl shadow-xl pb-4 mb-8">
      
     
     
     
     
      <div className="flex pt-4 pb-4 pl-4 w-[90%]">
        <div className="flex rounded-full cursor-pointer">
          
            <img
              src="/images/Ellipse 53.png"
              alt=""
              width="140"
              height="140"
              z
              className={"h-16 w-16 border-4 border-white"}
              style={{ borderRadius: "50%" }}
            />
          
        </div>
        <div className="ml-4 ">
          <p className="text-lg font-medium">Margaret</p>
          <p className="text-sm font-thin text-gray-400 lowercase">
            Marked the service as completed
          </p>
        </div>
    
      </div>
        <div className="flex justify-between w-[90%] mx-auto">
        <p className="text-sm font-thin text-gray-400">Buyer feedback</p>
        <div className="flex">{renderStars()}</div>
        </div>
      <div className="mt-2 w-[90%] mx-auto">
        <textarea
        className="w-full border h-16 bg-[#e8f7e9] border-[#8cd790] rounded-2xl"
        />
      </div>
      <div className="flex justify-between w-[80%] mx-auto mt-2">
        <button className="text-white bg-[#8cd790] px-4 py-1">Approve</button>
        <button className="text-[#8cd790] border border-1 border-[#8cd790] px-8 py-1">Deny</button>

      </div>

    </div>

    <div className="bg-white rounded-2xl shadow-xl pb-4 mb-8">
      
     
     
     
     
      <div className="flex pt-4 pb-4 pl-4 w-[90%]">
        <div className="flex rounded-full cursor-pointer">
          
            <img
              src="/images/Ellipse 53.png"
              alt=""
              width="140"
              height="140"
              z
              className={"h-16 w-16 border-4 border-white"}
              style={{ borderRadius: "50%" }}
            />
          
        </div>
        <div className="ml-4 ">
          <p className="text-lg font-medium">Margaret</p>
          <p className="text-sm font-thin text-gray-400 lowercase">
            Marked the service as completed
          </p>
        </div>
    
      </div>
        <div className="flex justify-between w-[90%] mx-auto">
        <p className="text-sm font-thin text-gray-400">Buyer feedback</p>
        <div className="flex">{renderStars()}</div>
        </div>
      <div className="mt-2 w-[90%] mx-auto">
        <textarea
        className="w-full border h-16 bg-[#e8f7e9] border-[#8cd790] rounded-2xl"
        />
      </div>
      <div className="flex justify-between w-[80%] mx-auto mt-2">
        <button className="text-white bg-[#8cd790] px-4 py-1">Approve</button>
        <button className="text-[#8cd790] border border-1 border-[#8cd790] px-8 py-1">Deny</button>

      </div>

    </div>


    




    
    </>
  );
};

export default Card;
