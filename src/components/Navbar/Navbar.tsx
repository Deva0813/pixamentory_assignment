"use client";

import * as React from "react";
import { SideBar } from "../SideBar/SideBar";
import Link from "next/link";
import Image from "next/image";
type Props = {};
const Navbar = (props: Props) => {
  const handleOpen = () => {
    let ele = document.getElementById("sidebar")
    ele?.classList.toggle("left-[-100%]")
    let svg = document.getElementById("bars")
    svg?.classList.toggle("invert")
  };

  return (
    <div className="relative p-5 h-20 md:hidden ">
      <button className="p-2 fixed z-30 " onClick={handleOpen} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="20"
          viewBox="0 0 18 12"
          fill="none"
          id="bars"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0.75C0 0.335786 0.335786 0 0.75 0H17.25C17.6642 0 18 0.335786 18 0.75C18 1.16421 17.6642 1.5 17.25 1.5H0.75C0.335786 1.5 0 1.16421 0 0.75ZM0 6C0 5.58579 0.335786 5.25 0.75 5.25H17.25C17.6642 5.25 18 5.58579 18 6C18 6.41421 17.6642 6.75 17.25 6.75H0.75C0.335786 6.75 0 6.41421 0 6ZM0 11.25C0 10.8358 0.335786 10.5 0.75 10.5H17.25C17.6642 10.5 18 10.8358 18 11.25C18 11.6642 17.6642 12 17.25 12H0.75C0.335786 12 0 11.6642 0 11.25Z"
            fill="#0F172A"
          />
        </svg>
      </button>
      <Link href={"/"} className=" bg-slate-800 absolute right-5 top-5 px-4 py-1 rounded-full" > 
        <Image src={"/images/logo.png"} width={90} height={50} alt="logo"/>
       </Link>
      <SideBar className=" absolutes top-0 left-0 left-[-100%] transition-all duration-300 w-screen " id="sidebar" />
    </div>
  );
};

export default Navbar;
