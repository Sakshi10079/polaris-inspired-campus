"use client";

export default function ScholarshipCTA() {
  return (
    <section className="bg-black px-6 pb-24 pt-6 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1450px]">
        <div
          className="
            relative
            min-h-[220px]
            overflow-hidden
            rounded-[24px]
            bg-[#111111]
            bg-cover
            bg-center
          "
          style={{
            backgroundImage:
              "url('https://storage.googleapis.com/polaris-website-framer/Website%20Images/blue%20kids%20orig.avif')",
          }}
        >
          {/* DARK / FADED OVERLAY */}
          <div className="absolute inset-0 bg-black/60" />

          {/* CONTENT */}
          <div
            className="
              relative
              z-10
              flex
              min-h-[220px]
              items-center
              justify-between
              gap-10
              px-8
              py-8
              sm:px-12
              lg:px-16
            "
          >
            <div className="min-w-0 flex-1">
              <p
                className="
                           text-3xl
                           font-medium
                           leading-[1.05]
                           tracking-[-0.04em]
                           sm:text-4xl
                           lg:text-4xl
    "
              >
                Scholarships worth{" "}
                <span className="text-[#F5C400]">₹15 Crores</span> were granted
                to students for their academic excellence.
              </p>
            </div>

            {/* APPLY BUTTON */}
            <a
              href="https://application.polariscampus.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                shrink-0
                items-center
                gap-5
                rounded-full
                border
                border-[#F5C400]
                px-7
                py-4
                text-base
                font-medium
                text-[#F5C400]
                transition-all
                duration-300
                hover:bg-[#F5C400]
                hover:text-black
              "
            >
              <span>Apply Now</span>

              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
