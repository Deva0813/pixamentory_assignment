import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import * as React from "react";
type Props = {};
const Services = (props: Props) => {
  return (
    <main>
      <Navbar/>
      <div className="grid place-content-center h-screen max-md:h-[93vh]">
      <div className=" text-3xl text-slate-600 font-bold w-fit text-center">
        <Image
          src={"/images/settings.svg"}
          width={250}
          className="h-auto w-auto"
          height={200}
          property="priority"
          alt="services"
        />
        Services
      </div>
    </div>
    </main>
  );
};

export default Services;
