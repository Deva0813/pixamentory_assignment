import * as React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
type Props = {};

const About = (props: Props) => {
  return (
    <main>
      <Navbar/>
      <div className="grid place-content-center h-screen max-md:h-[93vh]">
      <div className=" text-3xl text-slate-600 font-bold w-fit text-center">
        <Image
          src={"/images/secured.svg"}
          width={200}
          height={100}
          alt="services"
        />
        About
      </div>
    </div>
    </main>
  );
};

export default About;
