import React,{useState} from "react";
import Image from "next/image";
import Router from "next/router";


const Card = () => {
  const [PopupRefund, setPopupRefund]=useState(false);
  return (
    <>
    

    <div className="pt-6 pb-6 mt-4 bg-white pl-12 rounded-3xl border shadow-lg cursor-pointer" onClick={()=>{setPopupRefund(true)}}>
      <div className="flex w-full">
        <div className="">
          <div className="flex rounded-full cursor-pointer  border-2 border-black">
           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 px-2 py-2 text-[#8cd790]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
           
          </div>
        </div>
        <div className="flex justify-between w-full">
        <div className="mt-2 w-8/12">
          <p className="text-xl font-medium ml-12">
            Margaret
          </p>
          <p className="text-md ml-12 text-gray-400 lowercase">@Margaret</p>
        </div>
        <div className="mt-2 w-8/12">
         <div className="text-xl font-medium flex justify-end w-[80%]">
          <p className="text-[#8cd790]">$500</p>
            
         
          
          </div>
         </div>
        </div>
      </div>
    </div>



    <div className="pt-6 pb-6 mt-4 bg-white pl-12 rounded-3xl border shadow-lg cursor-pointer" onClick={()=>{setPopupRefund(true)}}>
      <div className="flex w-full">
        <div className="">
          <div className="flex rounded-full cursor-pointer  border-2 border-black">
           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 px-2 py-2 text-[#8cd790]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
           
          </div>
        </div>
        <div className="flex justify-between w-full">
        <div className="mt-2 w-8/12">
          <p className="text-xl font-medium ml-12">
            Margaret
          </p>
          <p className="text-md ml-12 text-gray-400 lowercase">@Margaret</p>
        </div>
        <div className="mt-2 w-8/12">
         <div className="text-xl font-medium flex justify-end w-[80%]">
          
         <p className="text-[#8cd790]">$500</p>
         

      
          
          
            

          
          </div>
          </div>
        </div>
      </div>
    </div>



    <div className="pt-6 pb-6 mt-4 bg-white pl-12 rounded-3xl border shadow-lg cursor-pointer" onClick={()=>{setPopupRefund(true)}}>
      <div className="flex w-full">
        <div className="">
          <div className="flex rounded-full cursor-pointer  border-2 border-black">
           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 px-2 py-2 text-[#8cd790]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
           
          </div>
        </div>
        <div className="flex justify-between w-full">
        <div className="mt-2 w-8/12">
          <p className="text-xl font-medium ml-12">
            Margaret
          </p>
          <p className="text-md ml-12 text-gray-400 lowercase">@Margaret</p>
        </div>
        <div className="mt-2 w-8/12">
         <div className="text-xl font-medium flex justify-end w-[80%]">
         <p className="text-[#8cd790]">$500</p>
            
 
          
          </div>
          </div>
        </div>
      </div>
    </div>





    <div className="pt-6 pb-6 mt-4 bg-white pl-12 rounded-3xl border shadow-lg cursor-pointer" onClick={()=>{setPopupRefund(true)}}>
      <div className="flex w-full">
        <div className="">
          <div className="flex rounded-full cursor-pointer  border-2 border-black">
           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 px-2 py-2 text-[#8cd790]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
           
          </div>
        </div>
        <div className="flex justify-between w-full">
        <div className="mt-2 w-8/12">
          <p className="text-xl font-medium ml-12">
            Margaret
          </p>
          <p className="text-md ml-12 text-gray-400 lowercase">@Margaret</p>
        </div>
        <div className="mt-2 w-8/12">
         <div className="text-xl font-medium flex justify-end w-[80%]">
         <p className="text-[#8cd790]">$500</p>
            
      
          
          </div>
          </div>
        </div>
      </div>
    </div>



    <div className="pt-6 pb-6 mt-4 bg-white pl-12 rounded-3xl border shadow-lg cursor-pointer" onClick={()=>{setPopupRefund(true)}}>
      <div className="flex w-full">
        <div className="">
          <div className="flex rounded-full cursor-pointer  border-2 border-black">
           
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 px-2 py-2 text-[#8cd790]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
           
          </div>
        </div>
        <div className="flex justify-between w-full">
        <div className="mt-2 w-8/12">
          <p className="text-xl font-medium ml-12">
            Margaret
          </p>
          <p className="text-md ml-12 text-gray-400 lowercase">@Margaret</p>
        </div>
        <div className="mt-2 w-8/12">
         <div className="text-xl font-medium flex justify-end w-[80%]">
         <p className="text-[#8cd790]">$500</p>
            
    
          
          </div>
         </div>
        </div>
      </div>
    </div>



    {PopupRefund && (
        <>
          <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-[30rem] p-4 rounded-lg shadow-lg">
        <div className="flex justify-end  mb-2">
           <button
                        className="bg-transparent  text-black place-content-end justify-end"
                        onClick={() =>setPopupRefund(false)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                      </button>
        </div>
        <h2 className="place-content-center justify-center flex text-2xl font-semibold mb-4 text-[#8cd790]">Review Withdrawal Request</h2>
        
         <div className="border border-bottom border-[#d4d4d4] w-full"></div>
         <div className="w-[70%] ml-4">




         <p className="mt-5 text-[#959595]">Cleaner's Name</p>
         <p>Margaret Cleaning Services</p>


         <p className="mt-5 text-[#959595]">Buisness Address</p>
         <p>20909 N 90th Pl, Scottsdale, Arkansas</p>

         <div className="flex justify-between">
            <div>
            <p className="mt-5 text-[#959595]">Contact No</p>
         <p>+1549-69491-2632</p>
            </div>
            <div>
            <p className="mt-5 text-[#959595]">Email ID</p>
         <p>margaret@gmail.com</p>
            </div>
         </div>



         <p className="mt-5 text-[#959595]">Bank Account Details</p>
         <p>Lorem upsem</p>
         <p>Lorem upsem</p>
         <p>Lorem upsem</p>




         <p className="mt-5 text-[#959595]">Current Wallet Blance</p>
         <p>$2350</p>

         <p className="mt-5 text-[#959595]">Date Requested</p>
         <p>MM/DD/YYYY</p>

         <p className="mt-5 text-[#959595]">Amount Requested</p>
         <p>$500</p>
         </div>
        <button
          className="bg-[#8cd790]  text-white w-[30%] py-1 flex justify-center mx-auto rounded-xl"
          onClick={() =>{setPopupRefund(false)}}
        >
          Accept
        </button>
      </div>
    </div>
        </>
      )}



    
    </>









    
  );
};

export default Card;
