import React, { useState } from "react";

export default function SeatAvailability() {

  const seat1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const seat2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const [active1, setActive1] = useState(true);
  const handleClick1 = () => {
    setActive1(!active1);
  };

  return (

    <>

      <div className="h-[32rem] w-[32rem] flex justify-center items-start ml-[30rem] absolute opacity-1 bg-slate-200 top-0 mt-28">
        <div className="mt-5 ms-5 w-[20rem] absolute left-[10%]">
          <h1 className="font-bolder text-2xl">Select Number of seats</h1>
          <p>For Rambha - 30 mins</p>
          <img
            src="https://icons.veryicon.com/png/o/business/company-daily-icons/chair-23.png"
            className="mt-2 h-36 absolute left-[40%]"
            alt=""
          />
        </div>

        <div className="mt-[20rem] absolute left-[20%]">
          <div className="flex flex-col justify-start">
            <div className="flex flex-row cursor-pointer">
              {seat1.map((id) => (
                <span
                  className="flex flex-row ms-2 w-8 justify-center border-slate-400 p-1 border-2 rounded-full"
                  onClick={handleClick1}
                  style={{
                    backgroundColor: active1
                      ? " rgb(226 232 240)"
                      : "rgb(96 165 250)",
                  }}
                >
                  {id}
                </span>
              ))}
            </div>

            <div className="flex flex-row mt-2 cursor-pointer">
              {seat2.map((id) => (
                <span className="border-slate-400 ms-2 w-8 justify-center p-1 border-2 rounded-full">
                  {id}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[28rem] flex justify-start items-center">
          <button className="p-2 rounded-lg me-2">Cancel</button>
          <button
            className="bg-slate-400 ms-1 p-2 rounded-lg"
            onClick={handleClick1}
            style={{
              backgroundColor: active1
                ? " rgb(186 192 193)"
                : "rgb(96 165 250)",
            }}
          >
            Confirm
          </button>
        </div>
      </div>

    </>
    
  );
}
