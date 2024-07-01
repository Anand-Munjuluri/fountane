import Image from "next/image";
import BackgroundDots from "./components/ui/dotbackground";
import { FlipWordsDemo } from "./components/ui/FlipWords";
import { WobbleCard } from "./components/ui/ui/wobble-card";
import { WobbleCardDemo } from "./components/ui/WobbleCard";
import { WobbleCardDemo2 } from "./components/ui/Wobblecard2";
import TwoColumnFooter from "./components/ui/footer";

export default function Home() {
  return (
    <div className="h-screen">
      <BackgroundDots />
      <div className="flex mt-5">
        <Image
          className="mx-5"
          src="/Logo.svg"
          width={150}
          height={150}
          alt="Picture of the author"
        />
      </div>
      <div className="hidden md:flex mx-5  mt-[-15px] items-center justify-end">
        <p className="mx-2 md:mx-5 font-['Poppins']">Home</p>
        <p className="mx-2 md:mx-5 font-['Poppins']">Who Are We</p>
        <p className="mx-2 md:mx-5 font-['Poppins']">What We Do</p>
        <p className="mx-2 md:mx-5 font-['Poppins']">Case Studies</p>
        <p className="mx-2 md:mx-5 font-['Poppins']">Life at Fountane</p>
        <p className="mx-2 md:mx-5 font-['Poppins']">Contact Us</p>
      </div>
      <div className="mt-5 flex">
        <FlipWordsDemo />
      </div>

      <div className="ml-4 pt-32 font-['Poppins']">
          <p className=" md:text-center text-3xl">One part Strategically Embedded Technology Partner,</p>
          <p className="md:text-center text-3xl">One part Venture Studio.</p>
        </div>

      <div className="ml-10 pt-32 font-['Poppins'] md:flex">
        <h1 className="text-3xl font-medium md:text-3xl"><span className="text-blue-500">Strategically Embedded </span> Technology Partner</h1>
        <p className="md:text-lg md:pt-4">
         Creating superior digital products with the best 
      <span className="font-bold"> global talent to maximize enterprise value.</span>
        </p>
      </div>

    <div className="mt-4 font-['Poppins']">
    <WobbleCardDemo/>
    </div>

    <div className="ml-10 pt-32 font-['Poppins'] md:flex">
        <h1 className="text-3xl font-medium md:text-3xl"><span className="text-blue-500">Venture </span>Studios</h1>
        <p className="md:text-lg md:pt-4 md:ml-32">
         Creating superior digital products with the best 
      <span className="font-bold"> global talent to maximize enterprise value.</span>
        </p>
      </div>
      <div className="mt-4 mb-24 font-['Poppins']">
     <WobbleCardDemo2/>
    </div>
    <div className="mx-4">
      <TwoColumnFooter/>
    </div>
    </div>
  );
}
