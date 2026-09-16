"use client";

const footerLinks = {
  programs: [
    "Applied Artificial Intelligence [with Microsoft]",
    "Product Management [with Amazon Web Services & Microsoft]",
    "Cloud & Big Data [with Google Cloud, Amazon Web Services & Microsoft]",
  ],
  explore: [
    "Student Careers",
    "Faculty",
    "Life at Polaris",
    "Admissions",
    "Experiences",
    "Events",
    "Blogs",
    "Student Directory",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black px-6 pb-6 pt-0 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1450px]">
        {/* Main Footer */}
        <div className="grid gap-16 lg:grid-cols-[0.4fr_2fr] lg:gap-6">
          {/* Award Image */}
          <div className="flex items-start">
            <div className=" max-w-[200px] overflow-hidden rounded-2xl">
              <img
                src="https://media.licdn.com/dms/image/v2/D560BAQFAaff456E7gQ/company-logo_200_200/company-logo_200_200/0/1719257617348?e=2147483647&v=beta&t=HUBtr7T_aYp6OmkjvSsJVU1_Ei8kam6-IKsBz5x5Doo"
                alt="Awarded in 2025 - Biggest Offline Tech Hackathon in Asia"
                className="h-auto  object-contain"
              />
            </div>
          </div>

          {/* Footer Columns */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr]">
            {/* Programs */}
            <div>
              <h3 className="mb-6 text-xl font-bold uppercase tracking-[0.08em] text-white">
                Programs
              </h3>

              <div className="flex flex-col gap-4">
                {footerLinks.programs.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-lg leading-relaxed text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Explore */}
            <div>
              <h3 className="mb-6 text-xl font-bold uppercase tracking-[0.08em] text-white">
                Explore
              </h3>

              <div className="flex flex-col gap-2">
                {footerLinks.explore.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-lg leading-relaxed text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-6 text-xl font-bold uppercase tracking-[0.08em] text-white">
                Contact
              </h3>

              <div className="flex flex-col gap-8">
                <div>
                  <p className="mb-3 text-lg text-white/40">Address</p>

                  <p className="text-base leading-relaxed text-white/70">
                    A3 Tower- DivyaSree Technopark,
                    <br />
                    EPIP Zone, Brookfield,
                    <br />
                    Bengaluru, Karnataka, 560066
                  </p>
                </div>

                <div>
                  <p className="mb-3 text-lg text-white/40">Contact</p>

                  <div className="flex flex-col gap-2">
                    <a
                      href="mailto:connect@polariscampus.com"
                      className="text-base text-white/70 transition-colors duration-300 hover:text-white"
                    >
                      connect@polariscampus.com
                    </a>

                    <a
                      href="tel:+917948062863"
                      className="text-base text-white/70 transition-colors duration-300 hover:text-white"
                    >
                      +91 79480 62863
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 border-t border-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col gap-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Copyright */}
          <p className="text-base text-white">© 2026 All Rights Reserved</p>

          {/* Policies */}
          <div className="flex flex-wrap items-center gap-3 text-base text-white/40">
            <a
              href="https://cdn-cp-assets-public.classplus.co/CampaignManager/5ace1a017e05822408e26b7720357c04?visit_cnt=50&fbp=fb.1.1787861046833.869840802695957608"
              className="transition-colors duration-300 hover:text-white"
            >
              Refund Policies
            </a>

            <span className="text-white/20">|</span>

            <a
              href="https://polariscampus.com/privacy-policy?visit_cnt=50&fbp=fb.1.1787861046833.869840802695957608"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy Policies
            </a>

            <span className="text-white/20">|</span>

            <a
              href="https://polariscampus.com/tnc?visit_cnt=50&fbp=fb.1.1787861046833.869840802695957608"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-5">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/polarisschooloftechnology/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/50 transition-colors duration-300 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/school/polaris-school-of-technology/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/50 transition-colors duration-300 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M6.5 8.5H3.2V21h3.3V8.5ZM4.85 3A1.95 1.95 0 1 0 4.85 6.9 1.95 1.95 0 0 0 4.85 3ZM21 13.85c0-3.76-2-5.51-4.67-5.51-2.15 0-3.11 1.18-3.65 2.01V8.5H9.38V21h3.3v-6.19c0-1.63.31-3.21 2.33-3.21 1.99 0 2.01 1.87 2.01 3.31V21H21v-7.15Z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white/50 transition-colors duration-300 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.5 12 3.5 12 3.5s-7.55 0-9.4.58A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.58 9.4.58 9.4.58s7.55 0 9.4-.58a3 3 0 0 0 2.1-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.92V8.08L16.4 12 9.6 15.92Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
