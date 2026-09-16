"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const videos = [
  {
    title: "What if you could learn directly from Google, Microsoft & AWS?",
    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/mukuls%20highlight%20video.png",
    videoUrl: "https://www.youtube.com/",
  },
  {
    title: "Google Partnered with Polaris",
    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/Video%2001_01-1.png",
    videoUrl: "https://www.youtube.com/watch?v=SAJ6jeR3E_A",
  },
  {
    title: "30 Google Summer of Code Selections in Polaris",
    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/highlight%20video%2030%20gsoc%20sel.png",
    videoUrl: "https://www.youtube.com/",
  },
  {
    title: "We built a Fintech Startup in First Year",
    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/highlight%20video%20fintech.png",
    videoUrl: "https://www.youtube.com/",
  },
  {
    title: "Why Polaris Has a 300 Student Limit",
    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/300%20student%20limit.png",
    videoUrl: "https://www.youtube.com/",
  },
];

const showcaseImages = [
  {
    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/mukuls%20highlight%20video.png",
  },
  {
    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/Video%2001_01-1.png",
  },
  {
    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/highlight%20video%2030%20gsoc%20sel.png",
  },
  {
    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/highlight%20video%20fintech.png",
  },
  {
    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/300%20student%20limit.png",
  },
];

export default function NewAgeEngineering() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    setCurrentIndex((current) =>
      current === 0 ? videos.length - 1 : current - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((current) =>
      current === videos.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="overflow-hidden bg-[linear-gradient(to_bottom,#ffffff_0%,#ffffff_80%,#000000_80%,#000000_100%)] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
            This is what New Age Engineering looks like, at Polaris
          </h2>

          <p className="mt-6 text-sm uppercase tracking-[0.16em] text-neutral-500">
            From student outcomes to global partnerships - see what Polaris
            looks like
          </p>
        </div>

        {/* Video Carousel */}
        <div className="relative mt-12">
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-34 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-34 bg-gradient-to-l from-white/60 via-white/30 to-transparent" />
          {/* Previous Button */}
          <button
            type="button"
            onClick={previousSlide}
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-105"
            aria-label="Previous video"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Video Track */}
          <div className="overflow-hidden">
            <div
              className="flex gap-5 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 34}%)`,
              }}
            >
              {videos.map((video) => (
                <a
                  key={video.title}
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-[85%] sm:min-w-[66%] lg:min-w-[48%]"
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={video.image}
                      alt={video.title}
                      className="aspect-video w-full object-cover"
                    />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg">
                        <Play size={18} fill="currentColor" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-105"
            aria-label="Next video"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Image Showcase */}
        <div className="mt-16 overflow-hidden">
          <div className="flex items-start gap-5">
            {showcaseImages.map((item, index) => (
              <div
                key={item.image}
                className={`shrink-0 overflow-hidden rounded-3xl ${
                  index % 2 === 0 ? "mt-0" : "mt-16"
                }`}
                style={{
                  width: "220px",
                }}
              >
                <img
                  src={item.image}
                  alt={`Polaris showcase ${index + 1}`}
                  className="h-[300px] w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* fading horizontal line */}
      <div className="mt-16 h-px w-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.35)_20%,rgba(255,255,255,0.35)_80%,transparent)]" />
    </section>
  );
}
