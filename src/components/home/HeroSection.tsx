// src/components/home/Hero.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const headlines = [
  "India's only 4-year CS program built for Global careers.",
  "Built in Partnership with Google, AWS & Microsoft",
  "Top 300 Students get in 2026. Are You One of Them?",
];

function AnimatedHeadline() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % headlines.length);
        setIsVisible(true);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className={`text-4xl font-bold leading-tight text-white transition-opacity duration-500 sm:text-5xl md:text-6xl ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {headlines[index]}
    </h1>
  );
}

export default function Hero() {
  return (
    <section
      className="relative -mt-[80px] flex min-h-screen items-center overflow-hidden bg-cover bg-center pt-[80px]"
      style={{
        backgroundImage:
          "url('https://storage.googleapis.com/notifications_app/bg%20%281%29.webp')",
      }}
    >
      {/* Fade layer — clear at the top, transitioning to black toward
          the bottom edge of the section. Adjust the "55%" and "90%"
          stops below to move where the darkening starts/ends. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 55%, rgba(0,0,0,0.85) 90%, #000 100%)",
        }}
      />

      <div className="relative z-10 max-w-2xl px-6 text-left sm:px-12">
        <div className="flex min-h-[160px] items-center sm:min-h-[220px]">
          <AnimatedHeadline />
        </div>

        <p className="mt-6 text-lg font-medium text-[#ffcc3f] sm:text-xl">
          Applied AI &nbsp;|&nbsp; Product Management &nbsp;|&nbsp; Cloud &amp; Big Data
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/admissions#pat"
            className="rounded-full bg-[#ffcc3f] px-8 py-3 text-center text-sm font-semibold text-[#0a0a0a] hover:bg-[#ffba20]"
          >
            Apply for PAT
          </Link>
          <Link
            href="/brochure"
            className="rounded-full border border-white/30 px-8 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
          >
            Download Brochure
          </Link>
        </div>
      </div>
    </section>
  );
}