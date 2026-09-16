"use client";
import { useEffect, useRef, useState } from "react";

const founderStories = [
  {
    name: "Elite Folks",
    tagline:
      "AI-powered platform for coding, interview preparation, and developer skill-building.",
    description:
      "Elite Folks combines DSA practice, coding competitions, interview preparation, assessments, and developer learning into a single platform. The ecosystem includes an AI learning assistant, AI interviewer, live coding environment, and gamified learning experience for aspiring developers.",
    traction:
      "50,000+ global visitors; paid users from the United States. Funding not disclosed.",
    founders: "Kishi Vagarwal & Siddhart",
    classYear: "Class of 2024",

    // Replace this with the exact Polaris image URL.
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX_kTPq6hnTAtc2PASA_jquuM0jGMxU9uFWZs3v8-Emw&s=10",

    // Your temporary video URL
    videoUrl: "https://www.youtube.com/embed/qGw5AWwPfBU",
  },

  {
    name: "MergeShip",
    tagline:
      "Open-source workflow management platform for contributors and maintainers.",
    description:
      "MergeShip streamlines open-source collaboration through a unified workflow platform for project maintainers and contributors. Built during VibeCon, the platform addresses scalability, API orchestration, and multi-user project management challenges.",
    traction:
      "Built and deployed within 24 hours; selected to pitch before Z47 venture partners from 230+ participating teams.",
    founders: "Tuhin, Soumya & Harshita",
    classYear: "First-Year Engineering Students",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaaCFXabKvFwezTybVb4xx3WzsMsrsGbvygtzqn58cFQ&s=10",
    videoUrl: "https://www.youtube.com/embed/G7bCOu6Otn8",
  },

  {
    name: "Ejected Q",
    tagline:
      "Productivity-focused 3D runner game designed for mindful student breaks.",
    description:
      "Ejected Q is a browser-based 3D runner game built to provide intentional breaks without promoting addictive engagement. The game includes dynamic difficulty scaling, multiplayer functionality, obstacle combat, and progression mechanics.",
    traction:
      "Successfully launched as a production-ready 3D web game with positive peer adoption and campus feedback.",
    founders: "Garvit & Anurag",
    classYear: "First-Year Students",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0EdlVq9LfiwFLkl9Sj8vr0vdqdlDs0AA6NP6Q9nhDQ&s=10",
    videoUrl: "https://www.youtube.com/embed/IjlwmcX3jVA",
  },

  {
    name: "Nova Accounts",
    tagline:
      "Digital finance ledger for personal and small-business expense management.",
    description:
      "Nova Accounts digitizes traditional bookkeeping by automatically categorizing transactions and generating financial summaries. The platform provides spending analytics and visual dashboards that help users understand and manage their financial behavior.",
    traction:
      "MVP built in 3 weeks; completed 9–10 days of beta testing with active user feedback.",
    founders: "Shreyas & Utkarsh",
    classYear: "First-Year Students",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfczahhLKZl4ZgUwn0o2IQlFW8kNPDj7T-zBoIVQ10Ig&s=10",
    videoUrl: "https://www.youtube.com/embed/XaEps8RUSqg",
  },

  {
    name: "Verity",
    tagline:
      "AI-powered news platform delivering fact-first and unbiased reporting.",
    description:
      "Verity is an AI-powered news platform focused on delivering fact-first reporting and helping users consume information with greater context and clarity.",
    traction:
      "Functional platform under development; subscription-first business model; no external funding pursued.",
    founders: "Manav & Harshita",
    classYear: "First-Year Students",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rgHEG7k88j69rq07Rg7GnCc-uOq0Ww4A1LAgu0nO_A&s=10",
    videoUrl: "https://www.youtube.com/embed/bflZzbNbGGg",
  },

  {
    name: "NestHealth, Co-Founder",
    tagline:
      "Digital healthcare platform combining AI monitoring with human doctor consultations.",
    description:
      "Nest Health is a digital platform that combines 24/7 AI-powered health monitoring and symptom analysis with quick access to human doctor consultations to provide accessible, personalized healthcare.",
    traction:
      "The platform is actively deploying its automated AI medical assistant, Barton, which it provides completely free to patients as a hook to handle preliminary triage before routing users to human doctors.",
    founders: "Rajdeep Singh",
    classYear: "First-Year Student",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgDJWv70U31fQacxNBCn-k96arZhMf1ddwUkIodoVFYg&s=10",
    videoUrl: "https://www.youtube.com/embed/SPpyWplpD1U",
  },
];

function FounderCard({ story }: { story: (typeof founderStories)[number] }) {
  const openVideo = () => {
    if (!story.videoUrl) return;

    window.dispatchEvent(
      new CustomEvent("open-founder-video", {
        detail: story.videoUrl,
      }),
    );
  };

  return (
    <article className="relative flex h-[460px] w-full shrink-0 snap-center overflow-hidden rounded-[28px] bg-black text-white lg:h-[460px]">
      {/* LEFT — VIDEO / IMAGE */}
      <div className="relative h-full w-[50%] overflow-hidden bg-[#111] p-5">
        {story.imageUrl ? (
          <img
            src={story.imageUrl}
            alt={story.name}
            className="h-full w-full rounded-2xl object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#151515]">
            <span className="text-sm text-white/30">Add Polaris image URL</span>
          </div>
        )}

        {/* Image darkening */}
        <div className="absolute inset-0 bg-black/20" />

        {/* CENTERED WATCH BUTTON */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={openVideo}
            className="flex items-center gap-3 rounded-full border border-white/30 bg-black/50 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-black/70"
          >
            {/* PLAY ICON */}
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
              <span className="ml-[2px] text-[11px]">▶</span>
            </span>
            Watch Their Story
          </button>
        </div>
      </div>

      {/* RIGHT — INFORMATION */}
      <div className="flex w-[50%] flex-col px-8 py-8 lg:px-10 lg:py-9">
        <div>
          {/* STARTUP NAME */}
          <h3 className="text-3xl font-semibold tracking-[-0.03em]">
            {story.name}
          </h3>

          {/* YELLOW SECOND LINE */}
          <p className="mt-4 max-w-[470px] text-lg font-medium leading-7 text-[#FFCE1B]">
            {story.tagline}
          </p>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-full text-sm leading-6 text-white/65">
            {story.description}
          </p>
        </div>

        <div>
          {/* TRACTION / REVENUE */}
          <div className="rounded-2xl bg-[#351019] px-5 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FFCE1B]">
              Traction/Revenue
            </p>

            <p className="mt-2 text-sm leading-6 text-white/85">
              {story.traction}
            </p>
          </div>

          {/* FOUNDER */}
          <div className="mt-5 border-t border-white/15 pt-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Founder
            </p>

            <p className="mt-1.5 text-base font-semibold">{story.founders}</p>

            <p className="mt-1 text-sm text-white/45">{story.classYear}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function PolarisFounders() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const handleOpenVideo = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      setVideoUrl(customEvent.detail);
    };

    window.addEventListener("open-founder-video", handleOpenVideo);

    return () => {
      window.removeEventListener("open-founder-video", handleOpenVideo);
    };
  }, []);

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
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1450px] px-6 sm:px-8 lg:px-10">
        {/* HEADING */}
        <div className="max-w-4xl">
          <h2 className="text-4xl font-medium leading-[1] tracking-[-0.04em] text-black lg:text-6xl">
            Polaris Builds
            <span className="text-[#FFCE1B]">Founders,</span>
            <br />
            Not Just Engineers
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-7 text-black/60 lg:text-lg">
            Meet the startups being built right now, inside the CS program. We
            don&apos;t wait for graduation to start.
          </p>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[28px] bg-black">
          {/* PREVIOUS BUTTON */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={scrollPrevious}
              className="absolute left-5 top-1/2 z-20 -translate-y-1/2 text-4xl font-light leading-none text-white transition-opacity hover:opacity-70"
              aria-label="Previous story"
            >
              ‹
            </button>
          )}

          {/* NEXT BUTTON */}
          {canScrollRight && (
            <button
              type="button"
              onClick={scrollNext}
              className="absolute right-5 top-1/2 z-20 -translate-y-1/2 text-4xl font-light leading-none text-white transition-opacity hover:opacity-70"
              aria-label="Next story"
            >
              ›
            </button>
          )}

          {/* CAROUSEL */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory
    [-ms-overflow-style:none] [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden"
          >
            {founderStories.map((story) => (
              <FounderCard key={story.name} story={story} />
            ))}
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[28px] bg-black">
          {/* carousel */}
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
                  src={`${videoUrl}?autoplay=1`}
                  title="Founder Story"
                  className="h-full w-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
