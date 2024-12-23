import Image from "next/image";
import Navbar from "./component/navbar";
import Link from "next/link";

export default function Home() {
  return (
  
      <div>

        <Navbar/>
        <div className=" justify-center items-center flex  h-screen">

        <div className="">
          <h1 className="font-bold flex justify-center text-[28px]">Welcome to the Assignment!</h1>
          <p className="w-[450px] text-gray-700 mt-4 sm:line-clamp-3 "> In this project, we have demonstrated how to fetch data from an API.This assignment showcases two different approaches to fetching data: client-side and server-side.</p>
      
        <div className="flex justify-center items-center">
          
          <button className=" font-bold rounded-[8px] hover:bg-[#beac5a] px-6 py-[12px] mt-5 text-white bg-[#c2952c]">
           <Link href={"/clientside"}>Client Side</Link> </button>
          <button className=" font-bold rounded-[8px] hover:bg-[#beac5a] ml-3 px-6 py-[12px] mt-5 text-white bg-[#c2952c]">
          <Link href={"/serverside"}>Server Side</Link></button>

        </div>
        </div>
      </div>
      </div>

  );
}
