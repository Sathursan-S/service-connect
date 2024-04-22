import React from "react";
import { GrLocation } from "react-icons/gr";

export default function TaskRequests({request}) {
  return (
    <div className="inline-flex flex-row sm:flex-col  bg-[rgba(157,172,211,0.6)] rounded-xl py-6 px-4 sm:px-6 lg:px-8">
      <div className="inline-flex flex-col sm:flex-col items-center">
        <div className="text-[#0a0335] text-2xl sm:text-4xl font-bold">
          {request.servicetype}
        </div>
        <div className="flex justify-center text-[#767575] text-lg mt-4">
          <GrLocation
            className=" rounded-full h-8 w-8  text-[#9d9d9d] p-1 mr-2"
            alt="Location undefined"
            src="glyph-undefined.svg"
          />
          Address: {request.address}
          <div className="text-[#767575] text-lg mt-4">
          Provider Name: {request.name}
          Contact: {request.phoneNumber}
          </div>
        </div>
        <div className="mt-4 sm:mt-0 flex items-center space-x-4">
          {/* <button className="px-4 py-2 bg-[#00a8e8] text-white text-xl sm:text-2xl font-bold rounded-full shadow-md hover:shadow-lg">
            View
          </button> */}
          <button className="px-4 py-2 bg-[#3cd9bd] text-white text-xl sm:text-2xl font-bold rounded-full shadow-md hover:shadow-lg">
            Edit
          </button>
          <button className="px-4 py-2 bg-[#f9434e] text-white text-xl sm:text-2xl font-bold rounded-full shadow-md hover:shadow-lg">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
