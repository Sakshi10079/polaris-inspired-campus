"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const programs = [
  {
    title: "Applied Artificial Intelligence[with Microsoft]",
    href: "/programs/applied-artificial-intelligence",
  },
  {
    title: "Product Management[with Amazon Web Services & Microsoft]",
    href: "/programs/product-management-engineering",
  },
  {
    title:
      "Cloud & Big Data[with Google Cloud, Amazon Web Services & Microsoft]",
    href: "/programs/cloud-big-data-engineering",
  },
];

const experiences = [
  "OpenAI AI Engineers Day",
  "Replit Vibeathon",
  "Emergent VIBEhack",
  "MLH Hackathon",
  "Constellation AI Hackdays",
  "AI Hack Day",
  "Synthax Hackathon",
  "VibeCon",
  "Lyzr Agentathon",
];

const admissions = [
  {
    title: "Process",
    href: "/admissions#process",
  },
  {
    title: "Eligibility",
    href: "/admissions#eligibility",
  },
  {
    title: "PEEP",
    href: "/admissions#peep",
  },
  {
    title: "PAT",
    href: "/admissions#pat",
  },
];

function Dropdown({
  label,
  children,
  open,
  onToggle,
}: {
  label: string;
  children: React.ReactNode;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        className="group flex items-center gap-1.5 text-[16px] font-medium text-white transition-colors hover:text-white"
        aria-expanded={open}
      >
        {label}

        <ChevronDown
          size={14}
          strokeWidth={1.8}
          className={`text-white transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const closeMenu = () => setOpenMenu(null);

    window.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, []);

  const toggleMenu = (menu: string) => {
    setOpenMenu((current) => (current === menu ? null : menu));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="w-full">
        <nav className="mx-auto flex w-full max-w-[1440px] items-center px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="mr-7 flex shrink-0 flex-col leading-none"
            onClick={() => {
              setOpenMenu(null);
              setMobileOpen(false);
            }}
          >
            <span className="text-2xl font-bold tracking-[-0.05em] text-white">
              Polaris
            </span>

            <span className="mt- text-[8px] font-semibold uppercase tracking-[0.18em] text-white">
              School of Technology
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden flex-1 items-center justify-center gap-6 xl:flex">
            {/* Programs */}
            <Dropdown
              label="Programs"
              open={openMenu === "programs"}
              onToggle={(event) => {
                event.stopPropagation();
                toggleMenu("programs");
              }}
            >
              <div
                onClick={(event) => event.stopPropagation()}
                className="w-[560px]  border border-white/20 bg-black p-2 shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              >
                {/* <p className="px-3 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                  Specialised Tracks
                </p> */}

                <div className="space-y-1">
                  {programs.map((program) => (
                    <Link
                      key={program.href}
                      href={program.href}
                      onClick={() => setOpenMenu(null)}
                      className="block rounded-xl px-2 py-1 text-white transition-colors hover:bg-neutral-800"
                    >
                      <div className="text-base font-semibold text-white">
                        {program.title}
                      </div>

                      {/* <div className="mt-1 text-xs text-white">
                        {program.partner}
                      </div> */}
                    </Link>
                  ))}
                </div>
              </div>
            </Dropdown>

            <Link
              href="/career"
              className="text-[16px] font-medium text-white transition-colors hover:text-white"
            >
              Student Careers
            </Link>

            {/* Experience */}
            <Dropdown
              label="Experience"
              open={openMenu === "experience"}
              onToggle={(event) => {
                event.stopPropagation();
                toggleMenu("experience");
              }}
            >
              <div
                onClick={(event) => event.stopPropagation()}
                className="w-[250px] border border-white/20 bg-black p-3 shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              >
                {/* <p className="px-3 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                  Experiences
                </p> */}

                <div className="grid grid-cols-1">
                  {experiences.map((experience) => (
                    <Link
                      key={experience}
                      href="/experience"
                      onClick={() => setOpenMenu(null)}
                      className="rounded-lg px-3 py-1 text-base text-white transition-colors hover:bg-neutral-800 hover:text-white"
                    >
                      {experience}
                    </Link>
                  ))}
                </div>
              </div>
            </Dropdown>

            <Link
              href="/faculty"
              className="text-[16px] font-medium text-white transition-colors hover:text-white"
            >
              Faculty
            </Link>

            <Link
              href="/lifeat-pst"
              className="text-[16px] font-medium text-white transition-colors hover:text-white"
            >
              Life at Polaris
            </Link>

            {/* Admission */}
            <Dropdown
              label="Admission"
              open={openMenu === "admission"}
              onToggle={(event) => {
                event.stopPropagation();
                toggleMenu("admission");
              }}
            >
              <div
                onClick={(event) => event.stopPropagation()}
                className="w-[150px] border border-white/20 bg-black p-1 shadow-[0_20px_50px_rgba(0,0,0,0.25)]"
              >
                {admissions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpenMenu(null)}
                    className="block rounded-lg px-2 py-1 text-base text-white transition-colors hover:bg-neutral-800 hover:text-white"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </Dropdown>

            <Link
              href="https://scholarship.polariscampus.com"
              className="text-[16px] font-medium text-white transition-colors hover:text-white"
            >
              AIP Scholarship
            </Link>
          </div>

          {/* Desktop CTAs */}
          <div className="ml-auto hidden items-center gap-2 xl:flex">
            <Link
              href="https://book-campus-visit.polariscampus.com/"
              className="rounded-full border border-white/50 px-4 py-2.5 text-[14px] font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              Book Campus Tour
            </Link>

            <Link
              href="https://application.polariscampus.com/"
              className="rounded-full bg-[#FFCE1B] px-5 py-2.5 text-[14px] font-semibold text-black transition-all hover:bg-neutral-100"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-white xl:hidden"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <div className="absolute bottom-0 left-0 w-full border-b border-white/30" />

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="mx-auto mt-2 max-w-[1440px] rounded-[22px] border border-neutral-200 bg-white p-5 shadow-lg xl:hidden">
            <div className="flex flex-col">
              {/* Programs */}
              <button
                type="button"
                onClick={() => toggleMenu("mobile-programs")}
                className="flex items-center justify-between border-b border-neutral-100 py-4 text-left text-sm font-semibold"
              >
                Programs
                <ChevronDown
                  size={17}
                  className={`transition-transform ${
                    openMenu === "mobile-programs" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "mobile-programs" && (
                <div className="py-2 pl-4">
                  {programs.map((program) => (
                    <Link
                      key={program.href}
                      href={program.href}
                      className="block border-b border-neutral-100 py-3"
                      onClick={() => setMobileOpen(false)}
                    >
                      <div className="text-sm font-medium">{program.title}</div>
                      <div className="mt-1 text-xs text-neutral-500">
                        {program.partner}
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/career"
                className="border-b border-neutral-100 py-4 text-sm font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Student Careers
              </Link>

              {/* Experience */}
              <button
                type="button"
                onClick={() => toggleMenu("mobile-experience")}
                className="flex items-center justify-between border-b border-neutral-100 py-4 text-left text-sm font-semibold"
              >
                Experience
                <ChevronDown
                  size={17}
                  className={`transition-transform ${
                    openMenu === "mobile-experience" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "mobile-experience" && (
                <div className="py-2 pl-4">
                  {experiences.map((experience) => (
                    <Link
                      key={experience}
                      href="/experience"
                      className="block border-b border-neutral-100 py-3 text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      {experience}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/faculty"
                className="border-b border-neutral-100 py-4 text-sm font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Faculty
              </Link>

              <Link
                href="/lifeat-pst"
                className="border-b border-neutral-100 py-4 text-sm font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Life at Polaris
              </Link>

              {/* Admission */}
              <button
                type="button"
                onClick={() => toggleMenu("mobile-admission")}
                className="flex items-center justify-between border-b border-neutral-100 py-4 text-left text-sm font-semibold"
              >
                Admission
                <ChevronDown
                  size={17}
                  className={`transition-transform ${
                    openMenu === "mobile-admission" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openMenu === "mobile-admission" && (
                <div className="py-2 pl-4">
                  {admissions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block border-b border-neutral-100 py-3 text-sm"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="https://scholarship.polariscampus.com"
                className="border-b border-neutral-100 py-4 text-sm font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                AIP Scholarship
              </Link>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="https://book-campus-visit.polariscampus.com/"
                  className="rounded-full border border-neutral-300 px-5 py-3 text-center text-sm font-semibold"
                >
                  Book Campus Tour
                </Link>

                <Link
                  href="https://application.polariscampus.com/"
                  className="rounded-full bg-black px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
