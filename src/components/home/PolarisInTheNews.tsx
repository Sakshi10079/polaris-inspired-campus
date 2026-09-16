"use client";

const newsItems = [
  {
    imageUrl:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/News%2004%20(1).png",
    url: "https://www.republicworld.com/initiatives/google-aws-and-microsoft-are-helping-build-the-next-generation-of-engineers-at-polaris-2026-06-27-130215?visit_cnt=34&fbp=fb.1.1787861046833.869840802695957608",
  },
  {
    imageUrl:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/News%2001%20(2).png",
    url: "https://www.financialexpress.com/jobs-career/education/first-gen-tech-students-from-polaris-selected-for-2026-google-summer-of-code/4241829/?visit_cnt=34&fbp=fb.1.1787861046833.869840802695957608",
  },
  {
    imageUrl:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/News%2002%20(2).png",
    url: "https://indianexpress.com/article/technology/tech-news-technology/tech-and-gadget-updates-today-may-27-2026-samsung-vision-ai-tvs-philips-soundbars-and-more-10710883/lite/?shem=rimspwouoe%2C&visit_cnt=34&fbp=fb.1.1787861046833.869840802695957608",
  },
  {
    imageUrl:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/News%2003%20(2).png",
    url: "https://yourstory.com/2026/05/startup-news-and-updates-daily-roundup-may-27-2026?visit_cnt=34&fbp=fb.1.1787861046833.869840802695957608",
  },
  {
    imageUrl:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/news%205.avif",
    url: "https://news.abplive.com/brand-wire/students-at-polaris-school-of-technology-crack-global-internship-summer-of-bitcoin-among-the-world-s-top-0-4-1772839?visit_cnt=34&fbp=fb.1.1787861046833.869840802695957608",
  },
  {
    imageUrl:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/news%206.avif",
    url: "https://inshorts.com/en/news/pst-announces--2-5-cr--women-in-tech--scholarships-for-2025-batch-1752041760861?visit_cnt=34&fbp=fb.1.1787861046833.869840802695957608",
  },
  {
    imageUrl:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/news%207.avif",
    url: "https://www.timesnownews.com/bizz-impact/polaris-school-of-technology-records-11-google-summer-of-code-selections-in-2025-most-winners-in-first-year-of-engineering-article-151690199?visit_cnt=34&fbp=fb.1.1787861046833.869840802695957608",
  },
  {
    imageUrl:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/news%208.avif",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7415393521421201408?visit_cnt=34&fbp=fb.1.1787861046833.869840802695957608",
  },
  {
    imageUrl:
      "https://storage.googleapis.com/polaris-website-framer/Website%20Images/newws%209.avif",
    url: "linkedin.com/feed/update/urn:li:activity:7405190005091905536?visit_cnt=34&fbp=fb.1.1787861046833.869840802695957608",
  },
];

export default function PolarisInTheNews() {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-[1450px] px-6 sm:px-8 lg:px-10">
        {/* HEADING */}
        <h2 className="text-4xl font-medium leading-none tracking-[-0.04em] text-white lg:text-6xl">
          Polaris In The <span className="text-[#FFCE1B]">News</span>
        </h2>

        {/* NEWSLETTER CAROUSEL */}
        <div className="mt-14 overflow-hidden">
          <div className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {newsItems.map((item, index) => (
              <article
                key={index}
                className="w-[calc((100%-50px)/3.5)] shrink-0 snap-start"
              >
                <a
                  href={item.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => {
                    if (!item.url) {
                      event.preventDefault();
                    }
                  }}
                  className="block"
                >

                  <div className="group relative aspect-[210/270]">
                    <div
                      className="
      relative
      h-full
      w-full
      overflow-hidden
      rounded-2xl
      bg-[#171717]
    "
                    >
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={`Polaris news ${index + 1}`}
                          className="h-full w-full object-cover"
                        />              
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-sm text-white/30">
                          Add news image
                        </div>
                      )}

{/* Book / paper page effect */}
<div
  className="
    pointer-events-none
    absolute
    right-0
    top-0
    z-20
    h-0
    w-0
    opacity-0
    transition-opacity
    duration-300
    group-hover:opacity-100
  "
/>

                      {/* Yellow hover circle */}
                      <div
                        className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        flex
        h-16
        w-16
        -translate-x-1/2
        -translate-y-1/2
        scale-75
        items-center
        justify-center
        rounded-full
        bg-[#FFD43B]
        opacity-0
        transition-all
        duration-300
        group-hover:scale-100
        group-hover:opacity-100
      "
                      >
                        <span className="text-[36px] font-bold leading-none text-black">
                          ↗
                        </span>
                      </div>
                    </div>
                  </div>

                </a>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* fading horizontal line */}
      <div className="mt-16 h-px w-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.35)_20%,rgba(255,255,255,0.35)_80%,transparent)]" />
    </section>
  );
}
