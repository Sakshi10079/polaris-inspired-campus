"use client";

const leftOutcomes = [
  {
    title: "Native AI",
    description:
      "Building production-grade AI products - including companies like Eazy AI, revrag.ai, DreamBig AI, and Absolute.ai.",
  },
  {
    title: "Global Open Source",
    description:
      "Contributing to codebases used by millions worldwide - including MIT App Inventor, VLC, Linux Foundation, Fossology, and CC Extractor.",
  },
  {
    title: "International Tech",
    description:
      "Interning with companies across 7 countries from Year 1 - including Zuvees and Mstack in Dubai, BreadButter in the USA, and UN Habitat in Kenya.",
  },
  {
    title: "Consumer Tech & SaaS",
    description:
      "Working inside India's fastest-growing startups - including SquadStack, Tectonic, Tamasha, Attentive AI, and GNA.",
  },
];

const rightOutcomes = [
  {
    title: "VC & Founders Office",
    description:
      "Getting inside the rooms where companies are built and funded - including Antler, one of the world's most active early-stage VC funds, and Weekday.",
  },
  {
    title: "Web3 & Blockchain",
    description:
      "Building on the financial internet from Year 1 - including Bitshala, Summer of Bitcoin, and the Flare Network.",
  },
  {
    title: "Travel & Logistics",
    description:
      "Shipping real products inside India's emerging travel and supply chain ecosystem - including Passprt Trips, Gumohh Travel Tech, and OZU Logistics.",
  },
  {
    title: "EdTech & Creator Economy",
    description:
      "Shaping how the next generation learns and creates - including Unacademy, Coding Juniors, and The Cultr.",
  },
];

function OutcomeItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border-b border-white/20 py-7">
      <h3 className="text-2xl font-semibold tracking-[-0.02em] text-white">{title}</h3>

      <p className="mt-3 max-w-[520px] text-sm leading-6 text-white/65">
        {description}
      </p>
    </div>
  );
}

export default function RealOutcomes() {
  return (
    <section className="bg-[linear-gradient(to_bottom,#000000_0%,#080306_5%,#1a070b_12%,#320b12_20%,#3a0c14_30%,#3a0c14_70%,#320b12_80%,#1a070b_88%,#080306_95%,#000000_100%)] py-24">
      <div className="mx-auto max-w-[1450px] px-6 sm:px-8 lg:px-10">
        <h2 className="max-w-2xl text-4xl font-medium italic leading-[1] tracking-[-0.04em] lg:text-5xl text-white">
          <span className="text-[#FFCE1B]">Real Outcomes.</span>From Year 1.
        </h2>

        <div className="mt-16 grid items-start lg:grid-cols-[1fr_480px_1fr] lg:gap-12">
          {/* LEFT */}
          <div>
            {leftOutcomes.map((item) => (
              <OutcomeItem
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          {/* CENTER */}
          <div className="relative lg:mt-10">
            <div className="relative h-[740px] w-full overflow-hidden rounded-[28px] shadow-[-18px_-18px_35px_rgba(0,0,0,0.45)]">
              <img
                src="https://storage.googleapis.com/polaris-website-framer/Website%20Images/real%20outcome%20img%20orig%20boy%20girl.webp"
                alt="Polaris students"
                className="h-full w-full object-cover"
              />

              {/* Dark/faded overlay */}
              <div className="absolute inset-0 bg-black/65" />

              {/* STATS */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-35 px-10 text-center">
                <div>
                  <p className="text-7xl font-bold tracking-[-0.04em] text-[#FFCE1B]">
                    ₹50k <span className="text-2xl font-bold tracking-[-0.04em] text-[#FFCE1B]">per month</span>
                  </p>
                  <p className="mt-2 text-xl font-medium text-white">
                    Average Stipend
                  </p>
                </div>

                <div>
                  <p className="text-6xl font-bold tracking-[-0.05em] text-[#FFCE1B]">
                    79%
                  </p>
                  <p className="mt-2 max-w-[180px] text-xl font-medium leading-5 text-white">
                    Interns Earned more
                    <br />
                    than ₹1Lakh
                  </p>
                </div>

                <div>
                  <p className="text-7xl font-bold tracking-[-0.04em] text-[#FFCE1B]">
                    ₹2L <span className="text-2xl font-bold tracking-[-0.04em] text-[#FFCE1B]">per month</span>
                  </p>
                  <p className="mt-2 text-xl font-medium text-white">
                    Highest Stipend
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:pt-[105px]">
            {rightOutcomes.map((item) => (
              <OutcomeItem
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* fading horizontal line */}
      <div className="mt-16 h-px w-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.35)_20%,rgba(255,255,255,0.35)_80%,transparent)]" />
    </section>
  );
}
