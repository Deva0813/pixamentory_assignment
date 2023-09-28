// @flow 
import Navbar from '@/components/Navbar/Navbar';
import * as React from 'react';
import Image from 'next/image';
type Props = {
    
};
const not_found = (props: Props) => {
    return (
        <main>
      <Navbar/>
      <div className="grid place-content-center h-screen max-md:h-[93vh]">
      <div className=" text-3xl text-slate-600 font-bold w-fit text-center">
        <Image
          src={"/images/warning.svg"}
          width={250}
          className="h-auto w-auto"
          height={200}
          property="priority"
          alt="services"
        />
        <p className='text-red-500 -mb-5 animate-pulse ' >Error 404</p> <br />Page Not Found
      </div>
    </div>
    </main>
    );
};

export default not_found;