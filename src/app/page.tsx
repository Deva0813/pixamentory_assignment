import Navbar from "@/components/Navbar/Navbar";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Head from "../components/featuers/Head";
import Body from "@/components/featuers/Form";

const poppins = Poppins({
  weight: ["100", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Home() {

  return (
    <main className={poppins.className}>
      <Navbar />
      <div className="">
        <Head/>
        <Body/>
        </div>
    </main>
  );
}
