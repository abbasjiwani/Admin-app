// import React from "react";
// import Image from "next/image";

// const Card = ({ firstname, lastname, profile }) => {
//   return (
//     <div className="pt-6 pb-6 mt-12 bg-white pl-12 rounded-3xl border shadow-lg">
//       <div className="flex w-full">
//         <div className="w-1/12">
//           <div className="flex rounded-full cursor-pointer">
//             {profile == "" || profile == undefined ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-14 h-14 px-2 py-2 text-[#8cd790]"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
//                 />
//               </svg>
//             ) : (
//               <img
//                 src={`data:image/jpeg;base64,${profile}`}
//                 alt=""
//                 width="140"
//                 height="140"
//                 z
//                 className={"h-16 w-16 border-4 border-white"}
//                 style={{ borderRadius: "50%" }}
//               />
//             )}
//           </div>
//         </div>
//         <div className="mt-2 w-8/12">
//           <p className="text-xl font-medium ml-12">
//             {firstname + " " + lastname}
//           </p>
//           <p className="text-md ml-12 text-gray-400 lowercase">@{firstname}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;











import React,{useState} from "react";
import Image from "next/image";

const Card = () => {
  const [PopupRefund, setPopupRefund]=useState(false);
  const [PopupDelete,setPopupDelete]=useState(false);
  const [PopupBlock,setPopupBlock]=useState(false);
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
          
            
         <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>

      
          
          
            
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>
          
          </div>
          <p className="text-md flex justify-end w-[80%] text-gray-400 ">276 Orders</p>
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
          
            
         <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>

      
          
          
            
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>
          
          </div>
          <p className="text-md flex justify-end w-[80%] text-gray-400 ">276 Orders</p>
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
          
            
         <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>

      
          
          
            
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>
          
          </div>
          <p className="text-md flex justify-end w-[80%] text-gray-400 ">276 Orders</p>
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
          
            
         <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>

      
          
          
            
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>
          
          </div>
          <p className="text-md flex justify-end w-[80%] text-gray-400 ">276 Orders</p>
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
          
            
         <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>

      
          
          
            
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>
          
          </div>
          <p className="text-md flex justify-end w-[80%] text-gray-400 ">276 Orders</p>
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
          
            
         <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>

      
          
          
            
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-5 h-5 mr-1"
>
  <path d="M0 0h24v24H0V0z" fill="none" />
  <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
</svg>
          
          </div>
          <p className="text-md flex justify-end w-[80%] text-gray-400 ">276 Orders</p>
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
        <h2 className="place-content-center justify-center flex text-2xl font-semibold mb-4 text-[#8cd790]">Cleaner Details</h2>
        
         <div className="border border-bottom border-[#d4d4d4] w-full"></div>
         <div className="w-[70%] ml-4">

         


         <p className="mt-5 text-[#959595]">Cleaner's Name</p>
         <p>Margaret Cleaning Services</p>


         <p className="mt-5 text-[#959595]">Business Address</p>
         <p>20909 N 90th Pl, Scottsdale, Arkansas</p>



         <p className="mt-5 text-[#959595]">Contact</p>
         <p>+1549-69491-2632</p>
         <p>margaret@gmail.com</p>




         <p className="mt-5 text-[#959595]">Bank Account Details</p>
         <p>Lorum ipsum</p>



         <p className="mt-5 text-[#959595]">Perfomance</p>
         
         <div className="text-xl font-medium flex w-[80%]">
          
            
          <svg
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 24 24"
   className="w-5 h-5 mr-1"
 >
   <path d="M0 0h24v24H0V0z" fill="none" />
   <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
 </svg>
 
 <svg
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 24 24"
   className="w-5 h-5 mr-1"
 >
   <path d="M0 0h24v24H0V0z" fill="none" />
   <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
 </svg>
 <svg
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 24 24"
   className="w-5 h-5 mr-1"
 >
   <path d="M0 0h24v24H0V0z" fill="none" />
   <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
 </svg>
 
       
           
           
             
 <svg
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 24 24"
   className="w-5 h-5 mr-1"
 >
   <path d="M0 0h24v24H0V0z" fill="none" />
   <path d="M12 2l2.5 6.5L22 9l-5 4.5 1.5 6L12 15.5 6.5 20l1.5-6-5-4.5 7.5-0.5" fill="#b5bac3" />
 </svg>
           
           </div>
           <p>276 Jobs Completed</p>

           <p className="mt-5 text-[#959595]">Current Wallet Balance</p>
         <p>$2350</p>

         
         </div>
         <div className="flex justify-end w-[100%] space-x-5">
        <button
          className="bg-white  text-[#8cd790] border border-1 border-[#8cd790]  py-1 w-[20%]  "
          onClick={() =>{setPopupBlock(true),setPopupRefund(false)}}
        >
           Block
        </button>
        <button
          className="bg-[#8cd790]  text-white  py-1 w-[30%]  "
          onClick={() =>{setPopupDelete(true),setPopupRefund(false)}}
        >
          Delete Account
        </button>
        </div>
      </div>
    </div>








    
        </>
      )}








{PopupDelete && (
        <>
          <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-[30rem] p-4 rounded-lg shadow-lg">
        <div className="flex justify-end  mb-2">
           <button
                        className="bg-transparent  text-black place-content-end justify-end"
                        onClick={() =>setPopupDelete(false)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                      </button>
        </div>
        <div className="flex justify-center font-semibold text-2xl text-center w-[80%] mx-auto p-10">
          Are you sure you want to delete this account?

        </div>

         <div className="flex justify-center w-[100%] space-x-5 mb-10">
        <button
          className="bg-white  text-[#8cd790] border border-1 border-[#8cd790]  py-1 w-[30%]  "
          onClick={() =>{setPopupDelete(false)}}
        >
           No
        </button>
        <button
          className="bg-[#8cd790]  text-white  py-1 w-[30%]  "
          onClick={() =>{setPopupDelete(false)}}
        >
          Yes
        </button>
        </div>
      </div>
    </div>








    
        </>
      )}







{PopupBlock && (
        <>
          <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-[30rem] p-4 rounded-lg shadow-lg">
        <div className="flex justify-end  mb-2">
           <button
                        className="bg-transparent  text-black place-content-end justify-end"
                        onClick={() =>setPopupBlock(false)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                      </button>
        </div>
        <div className="flex justify-center font-semibold text-2xl text-center w-[80%] mx-auto p-10">
          Are you sure you want to block this account?

        </div>

         <div className="flex justify-center w-[100%] space-x-5 mb-10">
        <button
          className="bg-white  text-[#8cd790] border border-1 border-[#8cd790]  py-1 w-[30%]  "
          onClick={() =>{setPopupBlock(false)}}
        >
           No
        </button>
        <button
          className="bg-[#8cd790]  text-white  py-1 w-[30%]  "
          onClick={() =>{setPopupBlock(false)}}
        >
          Yes
        </button>
        </div>
      </div>
    </div>








    
        </>
      )}




    
  


    
    </>









    
  );
};

export default Card;
