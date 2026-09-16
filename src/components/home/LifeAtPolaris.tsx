"use client";

import { useState } from "react";

const lifeData = {
  "Labs & Makerspace": [
    "http://storage.googleapis.com/polaris-website-framer/Website%20Images/gallery%20grid%20img%201.avif",
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/gallery%20grid%20img%202.avif",
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/gallery%20grid%20img%203.webp",
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/gallery%20grid%20img%204.avif",
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/gallery%20grid%20img%205.avif",
  ],

  "Campus & Hostel": [
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/campus%201.avif",
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/campus%202.avif",
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/campus%203.avif",
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/campus%204.avif",
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/campus%205.avif",
  ],

  "Events & Fests": [
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/events%201.avif",
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/events%202.avif",
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/events%203.avif",
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/events%204.avif",
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/events%205.avif",
  ],

  "Clubs & Societies": [
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/clubs%201.avif",
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/clubs%202.avif",
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/clubs%203.avif",
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/clubs%204.avif",
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/clubs%205.avif",
  ],

  "Sports & Wellness": [
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/sports%201.avif",
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/sports%202.avif",
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/sports%203.avif",
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/sports%204.avif",
    "https://storage.googleapis.com/polaris-website-framer/Website%20Images/sports%205.avif",
  ],
};

const tabs = Object.keys(lifeData) as Array<keyof typeof lifeData>;

export default function LifeAtPolaris() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof lifeData>("Labs & Makerspace");

  const images = lifeData[activeTab];

  return (
    <section className="bg-white py-24 text-black">
      <div className="mx-auto max-w-[1450px] px-6 sm:px-8 lg:px-10">

        {/* HEADING */}
        <h2 className="text-2xl font-medium leading-none tracking-[-0.04em] lg:text-5xl">
          <span className="text-[#FFCE1B]">Life At</span> POLARIS
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-6 max-w-[850px] text-lg font-medium leading-relaxed text-black/65 lg:text-xl">
          At Polaris, learning doesn&apos;t stop at the classroom door. Our fully
          residential campus is designed for curiosity - with cutting-edge
          labs, collaborative makerspaces, sports facilities, and a community
          of students who push each other to grow.
        </p>

        {/* TABS */}
        <div className="mt-10 flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full border px-8 py-3.5 text-lg transition-all duration-300 ${
                activeTab === tab
                  ? "border-[#FFCE1B] bg-[#FFCE1B] text-black"
                  : "border-[#FFCE1B] bg-white text-black hover:border-[#FFCE1B]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* IMAGE GRID */}
        <div className="mt-12 grid h-[500px] grid-cols-[1fr_1fr_1fr] gap-4">

          {/* LEFT COLUMN */}
          <div className="grid min-h-0 grid-rows-2 gap-4">

            {/* LEFT TOP */}
            <div className="min-h-0 overflow-hidden rounded-2xl">
              <img
                src={images[0]}
                alt={`${activeTab} 1`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* LEFT BOTTOM */}
            <div className="min-h-0 overflow-hidden rounded-2xl">
              <img
                src={images[1]}
                alt={`${activeTab} 2`}
                className="h-full w-full object-cover"
              />
            </div>

          </div>

          {/* CENTER COLUMN */}
          <div className="min-h-0 overflow-hidden rounded-2xl">

            <img
              src={images[2]}
              alt={`${activeTab} 3`}
              className="h-full w-full object-cover"
            />

          </div>

          {/* RIGHT COLUMN */}
          <div className="grid min-h-0 grid-rows-2 gap-4">

            {/* RIGHT TOP */}
            <div className="min-h-0 overflow-hidden rounded-2xl">
              <img
                src={images[3]}
                alt={`${activeTab} 4`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* RIGHT BOTTOM */}
            <div className="min-h-0 overflow-hidden rounded-2xl">
              <img
                src={images[4]}
                alt={`${activeTab} 5`}
                className="h-full w-full object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}