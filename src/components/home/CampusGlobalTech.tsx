"use client";

import { useState } from "react";

export default function CampusGlobalTech() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const companies = [
    {
      name: "OpenAI",
      image:
        "https://storage.googleapis.com/polaris-website-framer/Website%20Images/OpenAI.avif",

      // Add the single image containing OpenAI logo + name
      companyImage:
        "https://framerusercontent.com/images/HSmKm20rHcWOwyHARNvglE4HPo.webp?width=133&height=36",

      // Add your MP4 URL here
      mp4: "https://www.youtube.com/watch?v=166iX6RF07E",
    },
    {
      name: "Replit",
      image:
        "https://storage.googleapis.com/polaris-website-framer/Website%20Images/Replit%20video%20cover.avif",

      // Add the single image containing Replit logo + name
      companyImage:
        "https://framerusercontent.com/images/ipUDdqTcQ2vvpev6hwakpMwKcRo.webp?width=142&height=36",

      // Add your MP4 URL here
      mp4: "https://www.youtube.com/watch?v=166iX6RF07E",
    },
    {
      name: "Emergent",
      image:
        "https://storage.googleapis.com/polaris-website-framer/Website%20Images/Emergent%20Video%20cover.avif",

      // Add the single image containing Emergent logo + name
      companyImage:
        "https://framerusercontent.com/images/aLUA9oAVDmNBdbcP1VUAxxxK5k4.png?width=161&height=44",

      // Add your MP4 URL here
      mp4: "https://www.youtube.com/watch?v=166iX6RF07E",
    },
    {
      name: "Y Combinator",
      image:
        "https://storage.googleapis.com/polaris-website-framer/Website%20Images/Y%20Combinator%20cover.avif",

      // Add the single image containing Y Combinator logo + name
      companyImage:
        "https://framerusercontent.com/images/VYrnGkfgVt9Brslk8JxouN1Mh4.png?scale-down-to=512&width=2905&height=624",

      // Add your MP4 URL here
      mp4: "https://www.youtube.com/watch?v=166iX6RF07E",
    },
  ];

  return (
    <>
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1250px]">
          {/* Heading + Paragraph */}
          <div className="max-w-5xl">
            <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
              The Campus That
              <br />
              <span className="text-[#FFCE1B] italic">Global Tech</span> Comes To.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-7 text-black sm:text-lg">
              To become a Global Engineer, a strong syllabus is not enough. You
              need hands-on experience and real-world work. At Polaris, we
              collaborate with global tech companies, VCs and industry leaders
              to give every student exactly that. Polaris puts you in the room
              with them.
            </p>
          </div>

          {/* Four Video Cards */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {companies.map((company) => (
              <button
                key={company.name}
                type="button"
                onClick={() => {
                  if (company.mp4) {
                    setActiveVideo(company.mp4);
                  }
                }}
                className="group overflow-hidden rounded-[24px] border border-white/10 bg-black text-left"
              >
                {/* Video Cover - approximately 80% */}
                <div className="p-3">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px]">
                    <img
                      src={company.image}
                      alt={company.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg">
                        <div className="ml-1 h-0 w-0 border-y-[9px] border-y-transparent border-l-[14px] border-l-black" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Company Row */}
                <div className="flex h-[64px] items-center justify-between px-4">
                  {/* Logo + Company Name Image */}
                  <div className="flex h-full min-w-0 items-center">
                    {company.companyImage ? (
                      <img
                        src={company.companyImage}
                        alt={company.name}
                        className="max-h-8 max-w-[150px] object-contain"
                      />
                    ) : (
                      <span className="text-base font-medium text-white">
                        {company.name}
                      </span>
                    )}
                  </div>

                  {/* Arrow */}
                  <div className="ml-3 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-lg text-white transition-all duration-200 group-hover:bg-white group-hover:text-black">
                    →
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-5 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute -right-3 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl font-medium text-black"
            >
              ×
            </button>

            {/* Video */}
            <iframe
              src={`https://www.youtube.com/embed/166iX6RF07E?autoplay=1`}
              title="Polaris Campus Tour"
              className="aspect-video w-full rounded-2xl"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
