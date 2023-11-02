import React, { useState, useEffect } from "react";
import Search from "./search";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";

const Navbar = () => {
  const [startDate, setStartDate] = useState(new Date());
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
    const firstname = profile.firstname;
    const lastname = profile.lastname;
    const email = profile.email;
    const image = profile.image;

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
  return (
    <div className="mt-10 ml-14 w-11/12 border-b pb-4">
      <div className="w-full flex">
        <div className="w-2/4">
          <Search />
        </div>
        <div className="w-2/4 flex place-content-end">
          <div className="mt-1">
            <Image
              src="/images/notification.png"
              width={400}
              height={400}
              alt=""
              className="w-10 bg-[#8cd790] rounded-lg pt-2 pb-2 pl-2 pr-2"
            />
          </div>
          <div>
            <Image
              className="w-14 h-14 px-1 py-1 rounded-full  -mt-1 ml-12"
              src="/images/Ellipse 53.png"
              width={400}
              height={400}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
