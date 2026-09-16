"use client";

import { useEffect, useRef, useState } from "react";

const conversations = [
  {
    quote:
      "What's happening at Polaris is exactly the kind of thing the rest of the world should be paying attention to.",
    name: "Jared Friedman",
    role: "Partner",

    // Add the official Polaris image URL here
    imageUrl:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/Jared%20Option%2001.png",

    // Add the official video URL here
    videoUrl: "https://www.youtube.com/embed/8NWh1iqGwRs",
  },

  {
    imageUrl:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/Razorpay%20Founder%2001.png",
    videoUrl: "https://www.youtube.com/embed/b6DadH5amHs",
  },

  {
    imageUrl:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/Mukund%20Jha%2002.png",
    videoUrl: "https://www.youtube.com/embed/x-tXCJjPGTY",
  },

  {
    imageUrl:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/Kavikrut%2001.png",
    videoUrl: "https://www.youtube.com/embed/deAPhpQuLCk",
  },
];

function VideoCard({
  conversation,
  onWatch,
}: {
  conversation: (typeof conversations)[number];
  onWatch: (url: string) => void;
}) {
  return (
    <article className="w-[calc((100%-20px)/2)] shrink-0 snap-center">
      <button
        type="button"
        onClick={() => {
          if (conversation.videoUrl) {
            onWatch(conversation.videoUrl);
          }
        }}
        className="group block w-full text-left"
      >
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#171717]">
          {conversation.imageUrl ? (
            <img
              src={conversation.imageUrl}
              alt={conversation.name || "Polaris conversation"}
              className="h-full w-full object-cover "
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-white/30">
              Add Polaris image URL
            </div>
          )}

          <div className="absolute inset-0 bg-black/10 transition group-hover:bg-black/30" />

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black opacity-90 transition group-hover:scale-105">
              <span className="ml-[2px] text-sm">▶</span>
            </span>
          </div>
        </div>

        {conversation.name && (
          <p className="mt-4 text-base font-medium text-white">
            {conversation.name}
          </p>
        )}
      </button>
    </article>
  );
}

export default function SiliconValley() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const updateArrowState = () => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    setCanScrollLeft(carousel.scrollLeft > 5);
    setCanScrollRight(carousel.scrollLeft < maxScrollLeft - 5);
  };

  const scrollNext = () => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    carousel.scrollBy({
      left: carousel.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollPrevious = () => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    carousel.scrollBy({
      left: -carousel.clientWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    updateArrowState();

    carousel.addEventListener("scroll", updateArrowState);
    window.addEventListener("resize", updateArrowState);

    return () => {
      carousel.removeEventListener("scroll", updateArrowState);
      window.removeEventListener("resize", updateArrowState);
    };
  }, []);

  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-[1450px] px-6 sm:px-8 lg:px-10">
        {/* HEADING */}
        <div className="max-w-5xl">
          <h2 className="text-4xl font-medium leading-[1] tracking-[-0.04em] text-white lg:text-6xl">
            Silicon Valley,
            <span className="text-[#FFCE1B]">Right Here at Polaris</span>
          </h2>

          <p className="mt-7 max-w-3xl text-base leading-7 text-white/60 lg:text-lg">
            Conversations with the people building the world&apos;s most
            important technology
          </p>
        </div>

        {/* FEATURED CONVERSATION */}
        <div className="mt-14 overflow-hidden rounded-[28px] bg-[radial-gradient(circle_at_8%_8%,_#6b3b16_0%,_#3b2112_22%,_#17100c_45%,_#050505_78%,_#000000_100%)]">
          <div className="flex min-h-[400px] flex-col lg:flex-row">
            {/* LEFT — QUOTE */}
            <div className="flex w-full flex-col justify-center px-4 py-10 sm:px-8 lg:w-[65%] lg:px-8 lg:py-14">
              <p className="max-w-4xl text-xl font-medium leading-[1.12] tracking-[-0.03em] text-white lg:text-4xl">
                &quot;{conversations[0].quote}&quot;
              </p>

              <div className="mt-10">
                <p className="text-xl font-semibold text-white">
                  {conversations[0].name}
                </p>

                <p className="mt-2 text-base text-white/45">
                  {conversations[0].role}
                </p>
              </div>
            </div>

            {/* RIGHT — VIDEO */}
            <button
              type="button"
              onClick={() => {
                if (conversations[0].videoUrl) {
                  setVideoUrl(conversations[0].videoUrl);
                }
              }}
              className="group relative min-h-[320px] w-full overflow-hidden rounded-[20px] bg-[#111] lg:min-h-0 lg:w-1/2 lg:my-5 lg:mr-5"
            >
              {conversations[0].imageUrl ? (
                <img
                  src={conversations[0].imageUrl}
                  alt={conversations[0].name}
                  className="absolute inset-0 h-full w-full rounded-[20px] object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-sm text-white/30">
                  Add Polaris image URL
                </div>
              )}

              <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/35" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-xl transition group-hover:scale-105">
                  <span className="ml-[3px] text-lg">▶</span>
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* SERIES INTRO */}
        <p className="mt-16 text-xl font-medium tracking-[-0.02em] text-white/80 lg:text-2xl">
          And that&apos;s just one conversation. Here&apos;s the full series.
        </p>

        {/* VIDEO CAROUSEL */}
        <div className="relative mt-8 overflow-hidden rounded-[28px] bg-black">
          {/* LEFT CHEVRON */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={scrollPrevious}
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 text-4xl font-light leading-none text-white transition-opacity hover:opacity-70"
              aria-label="Previous conversation"
            >
              ‹
            </button>
          )}

          {/* RIGHT CHEVRON */}
          {canScrollRight && (
            <button
              type="button"
              onClick={scrollNext}
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 text-4xl font-light leading-none text-white transition-opacity hover:opacity-70"
              aria-label="Next conversation"
            >
              ›
            </button>
          )}

          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {conversations.slice(1).map((conversation, index) => (
              <VideoCard
                key={index}
                conversation={conversation}
                onWatch={setVideoUrl}
              />
            ))}
          </div>
          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black via-black/80 to-transparent" />
        </div>
      </div>

      {/* VIDEO MODAL */}
      {videoUrl && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          onClick={() => setVideoUrl(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setVideoUrl(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl text-white backdrop-blur-md transition hover:bg-black"
              aria-label="Close video"
            >
              ×
            </button>

            <div className="aspect-video w-full">
              <iframe
                src={`${videoUrl}?autoplay=1&rel=0`}
                title="Polaris conversation"
                className="h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
      {/* fading horizontal line */}
      <div className="mt-16 h-px w-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.35)_20%,rgba(255,255,255,0.35)_80%,transparent)]" />
    </section>
  );
}
