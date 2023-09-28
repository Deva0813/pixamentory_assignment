"use client";
import { useState } from "react";
type Props = {};
const Body = (props: Props) => {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  const getLocation = () =>{
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          setLat(position.coords.latitude as any);
          setLong(position.coords.longitude as any );
        });
      } else {
        console.log("Geolocation is not available.");
      }
  }

  return (
    <div className=" p-3 pt-0  ">
      <p className="text-xl font-semibold px-5 pt-5">Get Weather</p>
      <div className=" flex max-md:flex-col">
        <form action="" className="p-5 flex gap-4 max-md:flex-col rounded-lg">
          <input
            className="border-2 p-2 px-4 rounded-lg max-md:w-full "
            type="text"
            onChange={(e) => setLat(e.target.value)}
            placeholder="Latitude"
            name="lat"
            id="lat"
            value={lat}
          />
          <input
            className="border-2 p-2 px-4 rounded-lg max-md:w-full "
            type="text"
            onChange={(e) => setLong(e.target.value)}
            placeholder="Longitude"
            name="long"
            id="long"
            value={long}
          />
          <button type="button" className=" bg-slate-800 text-white p-2 px-4 rounded-lg  " onClick={getLocation} > Get Location </button>
          <button type="button" className=" bg-green-600 text-white p-2 px-4 rounded-lg  " >
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Body;
