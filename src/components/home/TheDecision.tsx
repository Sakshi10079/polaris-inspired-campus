"use client";

import { useState } from "react";

const videoImageUrl = "https://storage.googleapis.com/polaris-website-framer/Website%20Images/Parent%20Video%201280x450%20(1).png";
const videoUrl = "https://www.youtube.com/embed/Ivm2Vl4UtNw";

export default function TheDecision() {
const [isVideoOpen, setIsVideoOpen] = useState(false);

return ( <section className="bg-black py-24 text-white"> <div className="mx-auto max-w-[1450px] px-6 sm:px-8 lg:px-10">
{/* HEADING */} <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.04em] lg:text-6xl">
The Decision <span className="text-[#FFCE1B]">That Changed Everything</span> </h2>
    {/* DESCRIPTION */}
    <p className="mt-6 max-w-[900px] text-base leading-relaxed text-white/70 lg:text-lg">
      Choosing Polaris over a conventional engineering college isn&apos;t easy.
      Especially for parents. Here&apos;s what families say - in their own words
    </p>

    {/* VIDEO CARD */}
    <button
      type="button"
      onClick={() => setIsVideoOpen(true)}
      className="group relative mt-14 block w-full overflow-hidden rounded-2xl text-left"
    >
      <div className="relative aspect-[16/6] w-full bg-[#111111]">
        <img
          src={videoImageUrl}
          alt="The Decision That Changed Everything"
          className="h-full w-full object-cover"
        />

        {/* FADED VIDEO OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />

        {/* PLAY BUTTON */}
        <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95">
          <span className="ml-1 text-3xl leading-none text-black">
            ▶
          </span>
        </div>
      </div>
    </button>
  </div>

  {/* VIDEO MODAL */}
  {isVideoOpen && (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6"
      onClick={() => setIsVideoOpen(false)}
    >
      <div
        className="relative w-full max-w-[1200px]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={() => setIsVideoOpen(false)}
          className="absolute -right-2 -top-12 flex h-9 w-9 items-center justify-center text-2xl text-white"
          aria-label="Close video"
        >
          ×
        </button>

        {/* YOUTUBE VIDEO */}
        <div className="aspect-[16/7] w-full overflow-hidden rounded-xl bg-black">
          <iframe
            src={`${videoUrl}?autoplay=1&rel=0`}
            title="The Decision That Changed Everything"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )}
</section>

);
}