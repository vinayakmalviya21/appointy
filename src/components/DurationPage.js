import React, { useState , useEffect } from "react";
import axios from "axios";
import SeatAvailability from "./SeatAvailability";

export default function DurationPage() {

    // const [durations, setDurations] = useState([]);
    // async function fetchData() {

    //     try {
    //       const response = await axios.get("http://api.internship.appointy.com:8000/space-payload/v1/durations")
    //       setDurations(response.data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    
    //   useEffect(() => {
    //     fetchData();
    //   },[])
    
    // useEffect(() => {
    //     fetch(`http://api.internship.appointy.com:8000/space-payload/v1/durations`)
    //      .then((response) => console.log(response));
    //    }, []);

    // useEffect(() => {
    //     async function getData() {
    //       const response = await fetch(
    //         `http://api.internship.appointy.com:8000/space-payload/v1/durations`
    //       )
      
    //       console.log(response)
    //     }
    //     getData()
    //   }, [])


  const [isToggled, setisToggled] = useState(false);

  const [active1, setActive1] = useState(true);
  const handleClick1 = () => {
    setActive1(!active1);
  };
  const [active2, setActive2] = useState(true);
  const handleClick2 = () => {
    setActive2(!active2);
  };
  const [active3, setActive3] = useState(true);
  const handleClick3 = () => {
    setActive3(!active3);
  };

  return (

    <>
      <div className="h-[32rem] w-[32rem] flex justify-center items-start ml-[32rem] absolute opacity-1 bg-slate-200 top-0 mt-28">
        <div className="mt-5">
          <h1 className="font-bolder text-2xl">Select Duration</h1>
          <p>For Rambha</p>
          <div className="flex flex-row justify-center mt-3">
            <div
              className="border-slate-400 border-2 rounded-xl w-28 p-2"
              onClick={handleClick1}
              style={{
                backgroundColor: active1
                  ? " rgb(226 232 240)"
                  : "rgb(96 165 250)",
              }}
            >
              <button>30 minutes</button>
            </div>
            <div
              className="border-slate-400 border-2 rounded-xl ms-4 w-28 p-2"
              onClick={handleClick2}
              style={{
                backgroundColor: active2
                  ? " rgb(226 232 240)"
                  : "rgb(96 165 250)",
              }}
            >
              <button>60 minutes</button>
            </div>
            <div
              className="border-slate-400 border-2 rounded-xl ms-4 w-28 p-2"
              onClick={handleClick3}
              style={{
                backgroundColor: active3
                  ? " rgb(226 232 240)"
                  : "rgb(96 165 250)",
              }}
            >
              <button>120 minutes</button>
            </div>
          </div>
        </div>
        <button
          className="mt-[28rem] bg-blue-400 p-2 rounded-lg"
          onClick={() => setisToggled(!isToggled)}
        >
          NEXT
        </button>
      </div>

      {isToggled && <SeatAvailability />}
      
    </>

  );
}
