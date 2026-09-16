"use client";

const leaders = [
  {
    name: "Prerna Raman",
    role: "Co-Founder, Circle Health",
    education: "IIM Indore",
    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/faculty/prerna%20raman.avif",
    linkedin: "https://www.linkedin.com/in/prernaraman/",
  },
  {
    name: "Sajith Pai",
    role: "VC, Blume Ventures",
    education: "IIM Ahmedabad",
    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/faculty/sajith%20pai.avif",
    linkedin: "https://www.linkedin.com/in/sajithpai/",
  },
  {
    name: "Vaibhav Sisinty",
    role: "Founder, GrowthSchool",
    education: "GITAM Deemed University",
    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/faculty/vaibhav%20sisinty.avif",
    linkedin: "https://www.linkedin.com/in/vaibhavsisinty/",
  },
  {
    name: "Jacob Singh",
    role: "Ex CTO, Blinkit & VC, Sequoia India",
    education: "Berkeley City College",
    image:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/faculty/jacob%20singh.jpg",
    linkedin: "https://www.linkedin.com/in/jacobsingh/",
  },
];

export default function VisionTechLeaders() {
  return (
    <section className="bg-black py-20">
      {/* Heading */}
      <div className="mx-auto max-w-[1250px] px-6 sm:px-8 lg:px-10">
        <h2 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
          Polaris Vision Supported
          <br />
          by <span className="text-[#FFCE1B] italic">Top Tech Leaders</span>
        </h2>
      </div>

      {/* Horizontal carousel */}
      <div className="mt-12 overflow-hidden">
        <div
          className="
            flex
            gap-5
            overflow-x-auto
            px-6
            pb-3
            sm:px-8
            lg:pl-[max(40px,calc((100vw-1250px)/2))]
            lg:pr-0
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="
                w-[310px]
                shrink-0
                overflow-hidden
                rounded-[28px]
                bg-black
                sm:w-[330px]
                lg:w-[340px]
              "
            >
              {/* Person Image */}
              <div className="h-[300px] w-full overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Information */}
              <div className="px-5 pb-5 pt-4">
                <h3 className="text-xl font-semibold tracking-[-0.025em] text-white">
                  {leader.name}
                </h3>

                <p className="mt-1.5 text-sm leading-5 text-white/70">
                  {leader.role}
                </p>

                <div className="my-4 h-px w-full bg-white/20" />

                <p className="text-sm leading-5 text-white/45">
                  {leader.education}
                </p>

                {/* LinkedIn Button */}
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-5
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    border
                    border-white/25
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-white
                    transition-all
                    duration-200
                    hover:bg-white
                    hover:text-black
                  "
                >
                  See on LinkedIn
                  <span className="text-base">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="mt-8 flex justify-center px-6">
        <button
          type="button"
          className="flex w-[240px] items-center justify-center gap-3 rounded-full border border-white px-5 py-3.5 text-xl font-medium text-white transition-all duration-200 hover:bg-white hover:text-black"
        >
          View All
          <span className="text-lg">→</span>
        </button>
      </div>

      {/* fading horizontal line */}
      <div className="mt-16 h-px w-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.35)_20%,rgba(255,255,255,0.35)_80%,transparent)]" />
    </section>
  );
}
