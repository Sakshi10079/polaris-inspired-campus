"use client";

import { useRef } from "react";

const students = [
  {
    name: "Nidhi",
    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/nidhi.webp",
    testimonial:
      "At Polaris, we swapped Physics and Chemistry for JavaScript on Day 1. As a beginner, the supportive mentors built my foundations right. Now a Full Stack Developer at Swyftin, I’m shipping real-world code daily. Seeing traditional interns struggle with basics proved the massive difference in how we’re taught.",
  },
  {
    name: "Anshuman",
    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/k%20crunch%20guy.webp",
    testimonial:
      "Intrigued by Gen AI, I chose Polaris over traditional colleges to build real foundations. While friends studied Physics, I learned directly from tech founders and industry leaders. That edge helped me secure a ₹2.1L paid internship by my second semester- shipping real-world code while my friends in other colleges were still in classrooms.",
  },
  {
    name: "Deepanshi",
    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/deepanshi.png",
    testimonial:
      "After two JEE failures, I felt lost coming from a non-tech background. Polaris changed that, teaching me to go beyond the surface. Now an intern at Mstack, I’ve earned ₹1.5L working with AI and Agents. Gifting my father a watch with my first stipend validated my path: you don't need an IIT to outpace the industry.",
  },
  {
    name: "Nivedita",
    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/niveditha.jpg",
    testimonial:
      "Starting at Polaris with a clean slate, I moved past theory to build real tools: a hospital management system and a fitness tracker. That hands-on grind earned me an international internship at Zuvees with a ₹2L stipend in my first year. I’ve realized that being 'industry-ready' isn't about where you start, but the complexity of what you build.",
  },
  {
    name: "Saahi",
    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/Sahi-Dubey.JPG",
    testimonial:
      "Ranked 1,328 in JEE Advanced, I chose Polaris over IIT Bombay to pursue Computer Science from Day 1. It was a bold call, but it validated itself when I cracked Google Summer of Code in my first year with a ₹2.55L stipend. At Polaris, I’m not just earning a degree; I’m building a high-growth tech career.",
  },
];

export default function HearItFromStudents() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;

    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !carouselRef.current) return;

    e.preventDefault();

    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;

    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-[1450px] px-6 sm:px-8 lg:px-10">

        {/* HEADING */}
        <div className="flex items-end justify-between">
          <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.04em] lg:text-6xl">
            Hear it directly.{" "}
            <span className="text-[#F5C400]">From The Students</span>
          </h2>

          {/* ARROW INDICATORS */}
          <div className="hidden items-center gap-3 text-2xl text-white lg:flex">
            <span>←</span>
            <span>→</span>
          </div>
        </div>

        {/* CAROUSEL */}
        <div
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          className="
            mt-14
            flex
            cursor-grab
            gap-5
            overflow-x-auto
            select-none
            active:cursor-grabbing
            [&::-webkit-scrollbar]:hidden
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {students.map((student) => (
            <article
              key={student.name}
              className="
                flex
                min-h-[360px]
                w-[640px]
                shrink-0
                gap-8
                rounded-2xl
                bg-[#151515]
                p-6
                lg:p-7
              "
            >
              {/* LEFT — IMAGE */}
              <div className="flex w-[300px] shrink-0">
                <div className="h-[360] w-full overflow-hidden rounded-xl">
                  <img
                    src={student.image}
                    alt={student.name}
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* RIGHT — TESTIMONIAL + NAME */}
              <div className="flex min-w-0 flex-1 flex-col py-1">
                <p className="max-w-[390px] text-base leading-[1.35] tracking-[-0.02em] text-white/90 lg:text-[18px]">
                  {student.testimonial}
                </p>

                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-white">
                    {student.name}
                  </h3>

                  <p className="mt-1 text-sm text-white/45">
                    Student
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}