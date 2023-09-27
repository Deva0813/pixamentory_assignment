import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
type Props = {
    className:string
    id?:string
};
export const  SideBar = (props: Props) => {
  return (
    <div className={clsx(" max-md:fixed h-screen bg-slate-800",props.className)} id={props.id}>
      <div className="flex justify-center items-center">
        <Image src={"/images/logo.png"} className="py-10" width={200} height={70} alt="logo" />
      </div>
      <div className="flex flex-col">
        <Link
          href={"/"}
          className="text-white bg-slate-500 text-sm my-2 mx-4 py-3 px-6 rounded-md hover:bg-slate-600 transition-all "
        >
          Home
        </Link>
        <Link
          href={"/services"}
          className="text-white  bg-slate-500  text-sm my-2 mx-4 py-3 px-6 rounded-md hover:bg-slate-600 transition-all"
        >
          Services
        </Link>
        <Link
          href={"/about"}
          className="text-white  bg-slate-500  text-sm my-2 mx-4 py-3 px-6 rounded-md hover:bg-slate-600 transition-all"
        >
          About
        </Link>
        <Link
          href={"/contact"}
          className="text-white  bg-slate-500  text-sm my-2 mx-4 py-3 px-6 rounded-md hover:bg-slate-600 transition-all"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
