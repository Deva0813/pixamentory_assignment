import * as React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
type Props = {};
const Contact = (props: Props) => {
  return (
    <main>
      <Navbar />
      <div className="grid place-content-center h-screen max-md:h-[93vh]">
        <div className=" text-3xl text-slate-600 font-bold w-fit text-center">
          <Image
            src={"/images/rocket.svg"}
            width={200}
            height={200}
            alt="services"
          />
          Contact
        </div>
      </div>
    </main>
  );
};

export default Contact;
