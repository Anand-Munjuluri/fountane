"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Product Strategy
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Validate the problem to identify, document and prioritize the feature requirements in order to create the most effective product roadmap
          </p>
        </div>
        <Image
          src="/Virtue.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4  grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Product Execution
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Partner with our global product delivery teams to accelerate your business and bring your digital products to life through rapid design and development sprints.
        </p>
      </WobbleCard>
      
    </div>
  );
}
