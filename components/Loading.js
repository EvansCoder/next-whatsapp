import React from "react";
import Image from "next/image";
import logo from "/public/whatsapp-icon-seeklogo.com.svg";
import { Circle } from "better-react-spinkit";

function Loading() {
  return (
    <div className="h-screen w-screen grid place-items-center  bg-gray-100">
      <div className="flex flex-col items-center">
        <Image
          src={logo}
          alt="Whatsapp image"
          width="200px"
          height="200px"
         
        />
        <Circle  color="#3CBC28" size={60}  className="mt-20" />
        <button className="mt-10 border py-2 px-6 bg-white">Log Out</button>
      </div>
    </div>
  );
}

export default Loading;
