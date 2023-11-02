import React from "react";
import Navbar from "../TaskList/Navbar/navbar";
const index = () => {
  const array = [];
  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="mt-8 ml-14">
          <p className="text-3xl font-semibold uppercase">Request Changes</p>
          <div className="flex justify-end w-[90%] space-x-4">
            <button className="border border-1 border-[#8cd790] px-6 py-1 text-[#8cd790]">By Service Provider </button>
            <button className="border border-1 border-[#8cd790] px-6 py-1 text-[#8cd790]">By User</button>
          </div>
          <div className="mt-8">
            <table className="bg-[#D9D9D9]/[0.3] w-11/12">
              <thead>
                <tr className="w-full">
                  <td className="w-1/4 text-center text-[#000000]/[0.6] font-medium pt-2 pb-2">
                    Client Name
                  </td>
                  <td className="w-1/4 text-center text-[#000000]/[0.6] font-medium pt-2 pb-2">
                    Service Provider
                  </td>
                  <td className="w-1/4 text-center text-[#000000]/[0.6] font-medium pt-2 pb-2">
                    Request Date
                  </td>
                  <td className="w-1/4 text-center text-[#000000]/[0.6] font-medium pt-2 pb-2">
                    Cancellation Date
                  </td>
                </tr>
              </thead>
              <tbody>

                    <tr>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#000000] font-semibold">
                        Margaret
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#000000] font-semibold">
                        Margaret
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#8cd790] font-semibold">
                        06-06-2002
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#D60000] font-semibold">
                        06-06-2002
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3  ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-down"><path d="M15 6v6h4l-7 7-7-7h4V6h6z"/></svg>
                      </td>
                      
                    </tr>


                    <tr>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#000000] font-semibold">
                        Margaret
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#000000] font-semibold">
                        Margaret
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#8cd790] font-semibold">
                        06-06-2002
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#D60000] font-semibold">
                        06-06-2002
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3  ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-down"><path d="M15 6v6h4l-7 7-7-7h4V6h6z"/></svg>
                      </td>
                      
                    </tr>



                    <tr>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#000000] font-semibold">
                        Margaret
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#000000] font-semibold">
                        Margaret
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#8cd790] font-semibold">
                        06-06-2002
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#D60000] font-semibold">
                        06-06-2002
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3  ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-down"><path d="M15 6v6h4l-7 7-7-7h4V6h6z"/></svg>
                      </td>
                      
                    </tr>

                    <tr>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#000000] font-semibold">
                        Margaret
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#000000] font-semibold">
                        Margaret
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#8cd790] font-semibold">
                        06-06-2002
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#D60000] font-semibold">
                        06-06-2002
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3  ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-down"><path d="M15 6v6h4l-7 7-7-7h4V6h6z"/></svg>
                      </td>
                      
                    </tr>





                    <tr>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#000000] font-semibold">
                        Margaret
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#000000] font-semibold">
                        Margaret
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#8cd790] font-semibold">
                        06-06-2002
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#D60000] font-semibold">
                        06-06-2002
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3  ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-down"><path d="M15 6v6h4l-7 7-7-7h4V6h6z"/></svg>
                      </td>
                      
                    </tr>

                    <tr>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#000000] font-semibold">
                        Margaret
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#000000] font-semibold">
                        Margaret
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#8cd790] font-semibold">
                        06-06-2002
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#D60000] font-semibold">
                        06-06-2002
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3  ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-down"><path d="M15 6v6h4l-7 7-7-7h4V6h6z"/></svg>
                      </td>
                      
                    </tr>

                    <tr>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#000000] font-semibold">
                        Margaret
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#000000] font-semibold">
                        Margaret
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#8cd790] font-semibold">
                        06-06-2002
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3 text-[#D60000] font-semibold">
                        06-06-2002
                      </td>
                      <td className="w-1/4 text-center pt-3 pb-3  ">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-big-down"><path d="M15 6v6h4l-7 7-7-7h4V6h6z"/></svg>
                      </td>
                      
                    </tr>


                   

                    
                  
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
