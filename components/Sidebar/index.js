import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const index = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected(window.location.pathname);
  }, []);

  return (
    // <div className="bg-slate-50 h-full pt-20"><div className="w-full flex place-content-center">
    //     <Image
    //       src="/images/main-logo.png"
    //       height={400}
    //       width={400}
    //       className="w-48"
    //       alt=""
    //     />
    //   </div>
    //   <div className="flex place-content-left mt-14 cursor-pointer">
    //     <div className="w-full">
    //       <Link href="/">
    //         <div className="w-full h-12 pt-3 pl-12 ">
    //           <div className="flex w-full">
    //             {/* <Image
    //               src="/images/home.png"
    //               width={200}
    //               height={200}
    //               alt=""
    //               className="w-6"
    //             /> */}
    //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    //             <p className={selected === "/" ? "pl-10 font-bold" : "pl-10"}>
    //               Home
    //             </p>
    //           </div>
    //         </div>
    //       </Link>
    //       <Link href="/task">
    //         <div className="w-full h-12 mt-2 pt-3 pl-12 ">
    //           <div className="flex w-full">
    //             {/* <Image
    //               src="/images/task.png"
    //               width={200}
    //               height={200}
    //               alt=""
    //               className="w-6"
    //             /> */}
    //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-checks"><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/></svg>
    //             <p
    //               className={selected === "/task" ? "pl-10 font-bold" : "pl-10"}
    //             >
    //               Task List
    //             </p>
    //           </div>
    //         </div>

    //       </Link>
    //       <Link href="/serviceprovider">
    //         <div className="w-full h-12 mt-2 pt-3 pl-12 ">
    //           <div className="flex w-full">
    //             <Image
    //               src="/images/serviceprovider.png"
    //               width={200}
    //               height={200}
    //               alt=""
    //               className="w-6"
    //             />
    //             <p
    //               className={
    //                 selected === "/serviceprovider"
    //                   ? "pl-10 font-bold"
    //                   : "pl-10"
    //               }
    //             >
    //               Service Providers
    //             </p>
    //           </div>
    //         </div>
    //       </Link>
    //       <Link href="/users">
    //         <div className="w-full h-12 mt-2 pt-3 pl-12 ">
    //           <div className="flex w-full">
    //             <Image
    //               src="/images/user.png"
    //               width={200}
    //               height={200}
    //               alt=""
    //               className="w-6"
    //             />
    //             <p
    //               className={
    //                 selected === "/users" ? "pl-10 font-bold" : "pl-10"
    //               }
    //             >
    //               Users
    //             </p>
    //           </div>
    //         </div>
    //       </Link>
    //       <Link href="/services">
    //         <div className="w-full h-12 mt-2 pt-3 pl-12 ">
    //           <div className="flex w-full">
    //             <Image
    //               src="/images/services.png"
    //               width={200}
    //               height={200}
    //               alt=""
    //               className="w-6"
    //             />
    //             <p
    //               className={
    //                 selected === "/services" ? "pl-10 font-bold" : "pl-10"
    //               }
    //             >
    //               Services
    //             </p>
    //           </div>
    //         </div>
    //       </Link>
    //       <Link href="/requests">
    //         <div className="w-full h-12 mt-2 pt-3 pl-12 ">
    //           <div className="flex w-full">
    //             <Image
    //               src="/images/request.png"
    //               width={200}
    //               height={200}
    //               alt=""
    //               className="w-6"
    //             />
    //             <p
    //               className={
    //                 selected === "/requests" ? "pl-10 font-bold" : "pl-10"
    //               }
    //             >
    //               Service Requests
    //             </p>
    //           </div>
    //         </div>
    //       </Link>
    //       <Link href="/requests">
    //         <div className="w-full h-12 mt-2 pt-3 pl-12 ">
    //           <div className="flex w-full">
    //             <Image
    //               src="/images/request.png"
    //               width={200}
    //               height={200}
    //               alt=""
    //               className="w-6"
    //             />
    //             <p
    //               className={
    //                 selected === "/requests" ? "pl-10 font-bold" : "pl-10"
    //               }
    //             >
    //               Payment Requests
    //             </p>
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    // </div>

<>
<div className="flex">
        <div className="bg-slate-50 pt-20"><div className="w-full flex place-content-center">
        <Image
          src="/images/main-logo.png"
          height={400}
          width={400}
          className="w-48"
          alt=""
        />
      </div>
      <div className="flex place-content-left mt-14 cursor-pointer">
        <div className="w-full">
          <Link href="/">
            <div className="w-full h-12 pt-3 pl-12 ">
              <div className="flex w-full">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <p className={selected === "/" ? "pl-10 font-bold" : "pl-10"}>
                  Home
                </p>
              </div>
            </div>
          </Link>
        
          <Link href="/users">
            <div className="w-full h-12 pt-3 pl-12 ">
              <div className="flex w-full">
                
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <p className={selected === "/users" ? "pl-10 font-bold" : "pl-10"}>
                  User Management
                </p>
              </div>
            </div>
          </Link>


          <Link href="/price">
            <div className="w-full h-12 pt-3 pl-12 ">
              <div className="flex w-full">
                
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-checks"><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/></svg>
                <p className={selected === "/price" ? "pl-10 font-bold" : "pl-10"}>
                  Price Management
                </p>
              </div>
            </div>
          </Link>

          <Link href="/withdraw">
            <div className="w-full h-12 pt-3 pl-12 ">
              <div className="flex w-full">
                
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dollar-sign"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
                <p className={selected === "/withdraw" ? "pl-10 font-bold" : "pl-10"}>
                  Withdrawals Requests
                </p>
              </div>
            </div>
          </Link>


          <Link href="/refund">
            <div className="w-full h-12 pt-3 pl-12 ">
              <div className="flex w-full">
                
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dollar-sign"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
                <p className={selected === "/refund" ? "pl-10 font-bold" : "pl-10"}>
                  Manage Refunds
                </p>
              </div>
            </div>
          </Link>
          
          
          <Link href="/notifications">
            <div className="w-full h-12 mt-2 pt-3 pl-12 ">
              <div className="flex w-full">
                <Image
                  src="/images/services.png"
                  width={200}
                  height={200}
                  alt=""
                  className="w-6"
                />
                <p
                  className={
                    selected === "/notifications" ? "pl-10 font-bold" : "pl-10"
                  }
                >
                  Push Notifications
                </p>
              </div>
            </div>
          </Link>

          <Link href="/review">
            <div className="w-full h-12 pt-3 pl-12 ">
              <div className="flex w-full">
                
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                <p className={selected === "/review" ? "pl-10 font-bold" : "pl-10"}>
                  Reviews & Ratings
                </p>
              </div>
            </div>
          </Link>



          <Link href="/onboard">
            <div className="w-full h-12 pt-3 pl-12 ">
              <div className="flex w-full">
                
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-2"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
                <p className={selected === "/onboard" ? "pl-10 font-bold" : "pl-10"}>
                  Onboard Requests
                </p>
              </div>
            </div>
          </Link>
        

        </div>
      </div>
      
    </div>
        <div className=" border-black h-screen"></div>




    </div>
    </>
  );
};

export default index;
