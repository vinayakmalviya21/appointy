import React, { useState } from "react";
import DurationPage from "./DurationPage";

export default function () {

  const [isToggled, setisToggled] = useState(false);

  return (

    <>
    
      <div className="mt-24 flex flex-row justify-center items-start">
        <div className="flex flex-col justify-center items-start me-5 w-80">
          <div className="p-5 bg-orange-500 rounded text-white h-16 w-16">
            <p className="hidden">SP</p>
          </div>
          <h1 className="text-3xl mt-3 hidden">Space Payload Booking System</h1>
          <p className="mt-3 hidden">
            Conduct your own experiments using <br/> 
            specific payloads of Chandrayaan-3
          </p>
        </div>

        <div className="ms-5">
          <h2 className="font-bolder mb-8 mt-3">Select appointment type</h2>

          <div className="mt-5 justify-items-start">
            <div className="flex flex-row justify-around items-center mt-5 hover:bg-orange-100 p-2">
              <div className="p-2  bg-orange-500 rounded-full flex justify-center items-center  h-12 w-12 text-orange-500 hover:text-white">
                <p className="">R</p>
              </div>

              <h3 className="ms-3">RAMBHA</h3>
              <button
                className="border-2 p-1 rounded-lg border-blue-400 text-blue-400 ms-36  w-20 hover:text-white hover:bg-blue-400 "
                onClick={() => setisToggled(!isToggled)}
              >
                Select
              </button>
            </div>

            <div className="flex flex-row justify-around items-center mt-5 hover:bg-orange-100 p-2">
              <div className="p-2  bg-orange-500 rounded-full flex justify-center items-center  h-12 w-12 text-orange-500 hover:text-white">
                <p className="">C</p>
              </div>

              <h3 className="ms-3">ChaSTE</h3>
              <button
                className="border-2 p-1 rounded-lg border-blue-400 text-blue-400 ms-40  w-20 hover:text-white hover:bg-blue-400"
                onClick={() => setisToggled(!isToggled)}
              >
                Select
              </button>
            </div>

            <div className="flex flex-row justify-around items-center mt-5 hover:bg-orange-100 p-2">
              <div className="p-2  bg-orange-500 rounded-full flex justify-center items-center  h-12 w-12 text-orange-500 hover:text-white">
                <p className="">L</p>
              </div>

              <h3 className="ms-3">LRA</h3>
              <button
                className="border-2 p-1 rounded-lg border-blue-400 text-blue-400 ms-48  w-20 hover:text-white hover:bg-blue-400"
                onClick={() => setisToggled(!isToggled)}
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </div>

      {isToggled && <DurationPage />}

    </>

  );
}
