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











import React from "react";
import Image from "next/image";
import Router from "next/router";

const Card = () => {
  return (
    <>
    

    <div className="pt-6 pb-6 mt-4 bg-white pl-12 rounded-3xl border shadow-lg cursor-pointer" onClick={()=>{Router.push("/profile")}}>
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
          
            
         
          
          </div>
         </div>
        </div>
      </div>
    </div>



    <div className="pt-6 pb-6 mt-4 bg-white pl-12 rounded-3xl border shadow-lg cursor-pointer" onClick={()=>{Router.push("/profile")}}>
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
          
            
         

      
          
          
            

          
          </div>
          </div>
        </div>
      </div>
    </div>



    <div className="pt-6 pb-6 mt-4 bg-white pl-12 rounded-3xl border shadow-lg cursor-pointer" onClick={()=>{Router.push("/profile")}}>
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
          
            
 
          
          </div>
          </div>
        </div>
      </div>
    </div>





    <div className="pt-6 pb-6 mt-4 bg-white pl-12 rounded-3xl border shadow-lg cursor-pointer" onClick={()=>{Router.push("/profile")}}>
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
          
            
      
          
          </div>
          </div>
        </div>
      </div>
    </div>



    <div className="pt-6 pb-6 mt-4 bg-white pl-12 rounded-3xl border shadow-lg cursor-pointer" onClick={()=>{Router.push("/profile")}}>
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
          
            
    
          
          </div>
         </div>
        </div>
      </div>
    </div>





    
    </>









    
  );
};

export default Card;
