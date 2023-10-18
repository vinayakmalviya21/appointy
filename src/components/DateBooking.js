import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function DateBooking() {

  return (

    <>
    
      <div className="mt-24 flex flex-row justify-center items-start">
        <div className="flex flex-col justify-center items-start me-5 w-80">
          <div className="p-5 bg-orange-500 rounded text-white h-16 w-16">
            <p>SP</p>
          </div>
          <h1 className="text-3xl mt-3">Space Payload Booking System</h1>
          <p className="mt-3">
            Conduct your own experiments using <br /> specific payloads of
            Chandrayaan-3
          </p>
        </div>

        <div className="ms-5">
          <div>
            <p className="font-bold">Select Date and Time</p>
            <p className="text-gray-500">For Rambha - 30 mins - 4 Seats</p>
            <hr className="w-96 color-black" />
          </div>
          <div className="mt-5">
            <Calendar />
          </div>
        </div>
      </div>

    </>

  );
}
