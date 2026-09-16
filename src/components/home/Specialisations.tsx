"use client";

const specialisations = [
  {
    title: "CSE: Applied AI",
    partner: "with Microsoft",

    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/applied%20ai%20crard%20image.avif",

    description:
      "Design, build, and deploy AI systems that address the world's most pressing challenges. Launched in direct collaboration with leading AI companies",

    learn: [
      "Machine Learning",
      "Deep Learning",
      "GenAI",
      "Computer Vision",
      "AI Ethics",
      "MLOps",
    ],

    careers: [
      "AI Engineer",
      "Software Development Engineer",
      "Applied AI Researcher",
      "ML Platform Engineer",
    ],

    more: [
      "Upto $10k in AI and Computing Credits",
      "Flagship AI Curriculum",
    ],

    learnMore: "/programs/applied-artificial-intelligence",
  },

  {
    title: "CSE: Product Management",
    partner: "with Amazon Web Services",

    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/pm%20card",

    description:
      "The only engineering degree that teaches you how companies are built - not just how software is written.",

    learn: [
      "Product Strategy",
      "System Design",
      "UX",
      "Experimentation",
      "Full-Stack Dev",
      "Growth Marketing",
    ],

    careers: [
      "Product Manager",
      "Product Engineer",
      "Tech Lead",
      "Startup Founder",
    ],

    more: [
      "AWS Certification",
      "Up to ₹1 Cr exclusive startup fund",
      "Tech + Business Faculty",
      "Tech Content Creation",
    ],

    learnMore: "/programs/product-management-engineering",
  },

  {
    title: "CSE: Cloud & Big Data",
    partner: "with Google Cloud, Amazon Web Services & Microsoft",

    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/cloud%20google%20card.avif",

    description:
      "The infrastructure the world runs on - designed, built, and operated by you. With Google in the room.",

    learn: [
      "Cloud Architecture",
      "Big Data",
      "DevOps",
      "Distributed Systems",
      "Data Engineering",
    ],

    careers: [
      "Cloud Architect",
      "Data Engineer",
      "Platform Engineer",
      "Solutions Architect",
    ],

    more: [
      "Google Certification",
      "AWS Certification",
      "Direct Access to Google Team",
      "Exclusive Google Credits",
    ],

    learnMore: "#",
  },
];

function PillList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="mt-8">
      <h4 className="mb-4 text-sm font-medium text-white/60">
        {title}
      </h4>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/20 px-3.5 py-2 text-xs leading-4 text-white/80"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Specialisations() {
  return (
    <section className="w-full bg-black px-5 py-24 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1250px]">

        {/* Heading */}
        <div className="max-w-5xl">
          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Three Specialised Tracks. Designed for The Next Gen.
          </h2>

          <p className="mt-8 max-w-4xl text-base leading-7 text-white/60 lg:text-[17px]">
            Most CS degrees make you a generalist. You graduate knowing a
            little of everything and a master of nothing. At Polaris, you go
            deep. You pick one specialisation and you own it: with the
            curriculum, the mentors, the projects and the industry exposure
            all built around that one specialisation.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">

          {specialisations.map((track) => (
            <article
              key={track.title}
              className="flex h-full min-w-0 flex-col overflow-hidden rounded-[28px] border border-white/10 bg-black"
            >

              {/* Image */}
              <div className="w-full overflow-hidden">
                <img
                  src={track.image}
                  alt={track.title}
                  className="block aspect-[16/9] w-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-7 sm:p-8">

                {/* Title */}
                <h3 className="text-2xl font-bold leading-tight tracking-[-0.03em] text-white">
                  {track.title}
                </h3>

                {/* Partner */}
                <p className="mt-2 text-sm font-medium text-white/50">
                  {track.partner}
                </p>

                {/* Description */}
                <p className="mt-6 text-sm leading-6 text-white/60">
                  {track.description}
                </p>

                {/* What You'll Learn */}
                <PillList
                  title="What you’ll learn"
                  items={track.learn}
                />

                {/* Careers */}
                <PillList
                  title="Careers"
                  items={track.careers}
                />

                {/* What's More */}
                <PillList
                  title="What's more"
                  items={track.more}
                />

                {/* Buttons */}
                <div className="mt-auto flex flex-col gap-3 pt-10">

                  <a
                    href={track.learnMore}
                    className="flex min-h-12 items-center justify-center rounded-full border border-white/30 bg-black px-5 py-3 text-center text-sm font-medium text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-black"
                  >
                    Learn more about{" "}
                    {track.title.includes("Applied AI")
                      ? "AI Major"
                      : track.title.includes("Product")
                        ? "PM&E Major"
                        : "Cloud Major"}
                  </a>

                  <a
                    href="#"
                    className="flex min-h-12 items-center justify-center rounded-full border border-white/30 bg-black px-5 py-3 text-center text-sm font-medium text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-black"
                  >
                    Download Brochure
                  </a>

                </div>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}