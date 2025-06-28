import Navbar from "@/components/Navbar";
import Section2 from "@/components/Section2";
import { FaSpaceShuttle } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-[url('/space.jpeg')]  bg-cover bg-center h-screen text-white">
      <div >
        <Navbar/>
      </div>
      <div className="flex flex-col gap-1.5 text-6xl w-150 pl-8 mt-35">
        <h2>Coming Soon:</h2>
        <h2>DAKSphere-Your Goals</h2>
      </div>
      <div className="flex flex-col gap-3 mt-4 ml-1.5">
        <p className="w-150 pl-8 text-[#87898F]">Experience the future of goal-setting and achievement with DAKSphere, a revolutionary platform that empowers you to reach new heights</p>
        <div className=" flex ml-8 gap-8 mt-4.5">
          <button className="bg-[#E3C7E0] w-45 p-1.5 rounded-3xl text-[#0b072a]">Explore Now</button>
          <button className="bg-transparent border-1 w-45 rounded-3xl p-1.5">Join the Journey</button>
        </div>
      </div>
      </div>
      <div className="  w-auto h-80 mt-20 p-2 flex flex-row gap-12 justify-around">
        <Section2 img="echoes" name="dakkspheree"/>
        <Section2 img="card2" name="daikspherse" />
        <Section2 img="echoes" name="daddspherek"/>
        <Section2 img="card2" name="dakksphere"/>
      </div>
      <div className="flex mt-30 gap-20 justify-center ">
        <div>
          <img className="h-135 w-120" src="./somuch.jpeg" alt="person on moon "/>
        </div>
        <div className="flex flex-col gap-6 mt-10"> 
            <p className="text-[#060527] text-xl">Our Planetary Vision</p>
            <h2 className="text-6xl w-150">Redefine Your Horizons</h2>
            <p className="text-[#86858A] w-145">At DAKSphere, we are on a mission to transform the way you achieve your goals. Leveraging cutting-edge technology and a deep understanding of human motivation.</p>
            <div className="flex text-[#929094] gap-10 justify-between">
              <span className="w-60 flex gap-4 items-center"><FaSpaceShuttle className="text-2xl text-[#060527]"/><p className="w-40 ">Ignite Your Ambition with DAKSphere&apos;s</p></span>
              <p className="w-70">Elevate Your Mindset,Amplify Your Achievement</p>
            </div>
            <div className="flex text-[#86858A] justify-between">
              <p className="w-60">Uncover the Secrets of Sustainable Success with Our</p>
              <p className="w-70">Discover the Power of Data-Driven Goal Tracking</p>
            </div>
            <button className="bg-[#060527] text-white w-60 p-2 rounded-2xl mt-5 cursor-pointer">Start Your Journey</button>
        </div>
      </div>
      <div className="flex justify-center gap-20 mt-35">
        <div className="flex flex-col gap-10 justify-center">
          <h2 className="text-[#070f20] w-110 text-5xl font-bold">Empowering Your Dreams</h2>
          <p className="w-95 text-[#696969] font-semibold">At DAKSphere, we believe that every individual has the capacity to achieve extraordinary things. Our platform is designed to be your personal catalyst, providing you with the tools, insights</p>
          <button className="bg-[#060527] text-white w-60 p-2 rounded-2xl">Claim Your Future</button>
        </div>
        <div>
          <img className="w-120 h-130 rounded-2xl" src="/Starry.jpeg" alt="Space"/>
        </div>
      </div>
    </>

  );
}
