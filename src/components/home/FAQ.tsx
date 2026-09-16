"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const categories = [
  "General",
  "PAT",
  "PEEP",
  "Scholarship",
  "Programs",
  "Campus",
  "Placements",
];

const faqData: Record<string, FAQItem[]> = {
  General: [
    {
      question:
        "What is the role of Polaris School of Technology for the degree being offered by the Medhavi Skills University?",
      answer:
        "Polaris School of Technology provides the technology-focused academic experience, curriculum, industry exposure, projects and learning environment, while the degree is awarded by Medhavi Skills University.",
    },
    {
      question:
        "Is the University Degree Program valid for jobs and higher studies abroad?",
      answer:
        "The degree is awarded by Medhavi Skills University. Students should check the specific eligibility and recognition requirements of the university, employer or country where they intend to pursue further studies or employment.",
    },
    {
      question:
        "Which degree is offered by Medhavi Skills University?",
      answer:
        "The degree offered through the program is a B.Tech degree in Computer Science and Engineering.",
    },
    {
      question:
        "Is Polaris School of Technology only for top students?",
      answer:
        "Polaris evaluates applicants through its admission process and looks beyond conventional academic scores, including how applicants think, learn and demonstrate their potential.",
    },
    {
      question:
        "What makes Polaris different from a traditional engineering college?",
      answer:
        "Polaris is designed around specialised technology tracks, hands-on projects, industry exposure and learning from experienced technology professionals.",
    },
    {
      question: "Is the program residential?",
      answer:
        "Yes. Polaris operates as a fully residential campus where students live and learn together.",
    },
  ],

  PAT: [
    {
      question: "What is the Polaris Admission Test (PAT)?",
      answer:
        "PAT is the Polaris Admission Test used as part of the admissions process. Applicants can choose between an aptitude-focused or coding-focused format.",
    },
    {
      question: "What does the PAT test?",
      answer:
        "The PAT evaluates areas such as mathematical ability, logical reasoning, cognitive aptitude and coding skills depending on the selected test format.",
    },
    {
      question: "Can I apply without taking PAT?",
      answer:
        "Applicants meeting the applicable qualifying criteria through recognised examinations may be eligible for a direct interview route.",
    },
    {
      question: "How long is the PAT?",
      answer:
        "The duration depends on the PAT format selected by the applicant.",
    },
    {
      question: "Can I prepare for PAT before taking the test?",
      answer:
        "Yes. Polaris provides preparation resources to help applicants understand the format and prepare for the assessment.",
    },
  ],

  PEEP: [
    {
      question: "What is PEEP?",
      answer:
        "PEEP stands for Polaris Early Entry Program and is designed for students in Classes X and XI who want to secure their engineering seat early.",
    },
    {
      question: "Who can apply for PEEP?",
      answer:
        "The program is designed for eligible students currently studying in Class X or Class XI.",
    },
    {
      question: "What happens after joining PEEP?",
      answer:
        "Students receive early access to selected learning experiences and pre-engineering sessions while continuing their school education.",
    },
    {
      question: "When does the engineering program begin?",
      answer:
        "The full undergraduate program begins after the student completes Class XII and satisfies the applicable admission requirements.",
    },
  ],

  Scholarship: [
    {
      question: "What scholarships are available at Polaris?",
      answer:
        "Polaris offers scholarships based on applicable scholarship criteria and academic or admission performance.",
    },
    {
      question: "How much scholarship can a student receive?",
      answer:
        "Eligible students can receive scholarships according to the applicable scholarship criteria for their admission cycle.",
    },
    {
      question: "How is scholarship eligibility decided?",
      answer:
        "Scholarship eligibility depends on the criteria applicable to the student's admission route and academic or test performance.",
    },
    {
      question: "Can I receive a scholarship through PAT?",
      answer:
        "Eligible applicants may qualify for scholarships through the applicable admission and scholarship criteria.",
    },
  ],

  Programs: [
    {
      question: "What specialisations are offered at Polaris?",
      answer:
        "Polaris currently offers specialised tracks in Applied Artificial Intelligence, Product Management, and Cloud & Big Data.",
    },
    {
      question: "How is the curriculum different from a traditional CSE degree?",
      answer:
        "The curriculum is organised around specialised technology tracks, practical projects, industry exposure and skills relevant to modern technology careers.",
    },
    {
      question: "Will I learn coding from the beginning?",
      answer:
        "The program is designed around hands-on technology learning, with students working on practical technical skills and projects from the early stages of the program.",
    },
    {
      question: "Can I switch my specialisation later?",
      answer:
        "Specialisation changes depend on the applicable academic rules and program structure for the student's batch.",
    },
  ],

  Campus: [
    {
      question: "Where is the Polaris campus located?",
      answer:
        "Polaris School of Technology is located at DivyaSree Technopark, Brookfield, Bengaluru, Karnataka.",
    },
    {
      question: "Is Polaris a residential campus?",
      answer:
        "Yes. Polaris is designed as a fully residential learning environment.",
    },
    {
      question: "What facilities are available on campus?",
      answer:
        "The campus includes learning spaces, labs and makerspaces, sports facilities and spaces for student activities and community experiences.",
    },
    {
      question: "What student activities are available?",
      answer:
        "Students can participate in events, fests, clubs, societies, sports and other activities throughout their campus experience.",
    },
  ],

  Placements: [
    {
      question: "Does Polaris provide placement support?",
      answer:
        "Polaris focuses on preparing students for technology careers through hands-on projects, industry exposure, mentorship and career opportunities.",
    },
    {
      question: "What kind of companies can Polaris students work with?",
      answer:
        "Students are prepared for careers across technology roles and can gain exposure to startups, technology companies and global organisations.",
    },
    {
      question: "When do students start working on real-world projects?",
      answer:
        "Hands-on project work is an important part of the Polaris learning model and begins early in the program.",
    },
    {
      question: "Can students get internships during the program?",
      answer:
        "Yes. The program is designed to provide industry exposure and opportunities for students to pursue internships during their studies.",
    },
  ],
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const currentFAQs = faqData[activeCategory] || [];
  const visibleFAQs = currentFAQs.slice(0, visibleCount);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setOpenQuestion(null);
    setVisibleCount(4);
  };

  const handleQuestionClick = (index: number) => {
    setOpenQuestion((current) => (current === index ? null : index));
  };

  const handleViewMore = () => {
    setVisibleCount((current) => current + 4);
  };

  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-[1450px] px-6 sm:px-8 lg:px-10">
        {/* HEADING */}
        <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.04em] lg:text-6xl">
          Got more questions?
        </h2>

        {/* MAIN FAQ LAYOUT */}
        <div className="mt-16 grid gap-14 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-20">
          {/* LEFT — CATEGORIES */}
          <div className="flex flex-col gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`
                    flex
                    w-full
                    items-center
                    rounded-full
                    px-6
                    py-3.5
                    text-left
                    text-lg
                    font-medium
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-[#F5C400]/10 text-[#F5C400]"
                        : "bg-transparent text-white/50 hover:bg-[#F5C400]/10 hover:text-[#F5C400]"
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* RIGHT — QUESTIONS */}
          <div className="min-w-0">
            <div className="flex min-h-[560px] flex-col">
              {/* QUESTION LIST */}
              <div className="space-y-3">
                {visibleFAQs.map((faq, index) => {
                  const isOpen = openQuestion === index;

                  return (
                    <div
                      key={`${activeCategory}-${index}`}
                      className="
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.025]
                        transition-colors
                        duration-300
                        hover:border-white/20
                      "
                    >
                      {/* QUESTION */}
                      <button
                        type="button"
                        onClick={() => handleQuestionClick(index)}
                        className="
                          flex
                          w-full
                          items-center
                          justify-between
                          gap-8
                          px-6
                          py-5
                          text-left
                          lg:px-7
                          lg:py-6
                        "
                      >
                        <span className="max-w-[900px] text-base font-medium leading-[1.4] text-white lg:text-lg">
                          {faq.question}
                        </span>

                        <span
                          className={`
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/20
                            text-xl
                            font-light
                            text-white/70
                            transition-all
                            duration-300
                            ${
                              isOpen
                                ? "rotate-45 border-[#F5C400]/40 text-[#F5C400]"
                                : ""
                            }
                          `}
                        >
                          +
                        </span>
                      </button>

                      {/* ANSWER */}
                      <div
                        className={`
                          grid
                          transition-all
                          duration-300
                          ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }
                        `}
                      >
                        <div className="overflow-hidden">
                          <div className="px-6 pb-6 lg:px-7">
                            <p className="max-w-[850px] text-sm leading-relaxed text-white/50 lg:text-base">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* VIEW MORE */}
              <div className=" flex justify-center pt-10">
                {visibleCount < currentFAQs.length ? (
                  <button
                    type="button"
                    onClick={handleViewMore}
                    className="
                      rounded-full
                      px-6
                      py-1
                      text-base
                      font-medium
                      text-white/70
                      transition-all
                      duration-300
                      hover:bg-[#F5C400]/10
                      hover:text-[#F5C400]
                    "
                  >
                    View more
                  </button>
                ) : (
                  <div className="h-[42px]" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* horizontal line */}
      <div className="mt-12 border-t border-white/20" />
    </section>
  );
}