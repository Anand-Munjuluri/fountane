import React from "react";
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
    const words = ["game changing", "cutting-edge", "revolutionary", "groundbreaking", "future-proof", "next-gen", "state-of-the-art", "trailblazing"];


  return (
    <div className="min-h-20 justify-start px-4 font-['Poppins']">
      <div className="text-4xl mx-auto font-normal text-black dark:text-black">
        <h1 className="mt-4 text-6xl">We are <p className="text-blue-500">Fountane.</p></h1>  <br />
        Turning Practical Problems into the
        <FlipWords words={words} /> <br/>
         Digital Businesses and Products of Tomorrow.
      </div>

      
    </div>
  );
}
