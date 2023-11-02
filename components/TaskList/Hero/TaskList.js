import React from "react";

// const TaskList = ({ data, selected }) => {

  const TaskList = () => {

  // const filteredData = data.filter((item) => item.progress === selected);

  return (
    // <div className="w-11/12 mt-12">
    //   <table className="w-full">
    //     <thead>
    //       <tr className="w-full border-t border-b">
    //         <td className="w-1/5 text-center text-lg font-medium pt-4 pb-4">
    //           Client
    //         </td>
    //         <td className="w-1/5 text-center text-lg font-medium">
    //           Service Provider
    //         </td>
    //         <td className="w-1/5 text-center text-lg font-medium">
    //           Service Type
    //         </td>
    //         <td className="w-1/5 text-center text-lg font-medium">Status</td>
    //         <td className="w-1/5 text-center text-lg font-medium">Date</td>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {filteredData.map((item) => (
    //         <tr key={item.id}>
    //           {/* Your table cell components */}
    //           <td className="pt-4 pb-4 text-center text-lg font-normal">
    //             {item.firstname}
    //           </td>
    //           <td className="flex place-content-center pt-4 pb-4 text-center text-lg font-normal">
    //             <div className="w-6 h-6 mr-2 mt-0.5 rounded-full bg-[#8cd790]" />
    //             {item.serviceprovidername}
    //           </td>
    //           <td className="pt-4 pb-4 text-center text-lg font-normal">
    //             {item.servicetype}
    //           </td>
    //           <td className="pt-4 text-[#8cd790] pb-4 text-center text-lg font-medium">
    //             {item.progress}
    //           </td>
    //           <td className="pt-4 pb-4 text-center text-lg font-normal">
    //             {item.date}
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>



    <div className="w-11/12 mt-12">
      <table className="w-full">
        <thead>
          <tr className="w-full border-t border-b">
            <td className="w-1/5 text-center text-lg font-medium pt-4 pb-4">
              Client
            </td>
            <td className="w-1/5 text-center text-lg font-medium">
              Service Provider
            </td>
            <td className="w-1/5 text-center text-lg font-medium">
              Service Type
            </td>
            <td className="w-1/5 text-center text-lg font-medium">Status</td>
            <td className="w-1/5 text-center text-lg font-medium">Date</td>
          </tr>
        </thead>
        <tbody className="">
          
            <tr className="bg-[#ffffff] shadow-xl  py-3 ">
              {/* Your table cell components */}
              <td className="pt-4 pb-4 text-center text-lg font-normal">
                test
              </td>
              <td className="flex place-content-center pt-4 pb-4 text-center text-lg font-normal">
                <div className="w-6 h-6 mr-2 mt-0.5 rounded-full bg-[#8cd790]" />
                test
              </td>
              <td className="pt-4 pb-4 text-center text-lg font-normal">
                test
              </td>
              <td className="pt-4 text-[#8cd790] pb-4 text-center text-lg font-medium">
                test
              </td>
              <td className="pt-4 pb-4 text-center text-lg font-normal">
                test
              </td>
            </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
