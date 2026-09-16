export default function Internships() {
  const internships = [
    {
      title: "UN Habitat",
      image: "https://framerusercontent.com/images/i0kuuILu9yTi1gp7IrOaUzNTo.png?width=496&height=172",
      description:
        "In Year 1, a student was already a Full Stack Developer at the United Nations. An actual job, in Nairobi, shipping real code for the real impact.",
    },
    {
      title: "USA",
      image: "https://framerusercontent.com/images/WgATfwVkqwDxqNRpu9Y99xcYlc.png?width=496&height=172",
      description:
        "12 Polaris students worked with US-based organisations through GSoC, LFX Mentorship, and direct internships - including MIT App Inventor and the Linux Foundation.",
    },
    {
      title: "Dubai, UAE",
      image: "https://framerusercontent.com/images/WzQS5IZYSduQ3YmJlBdIy03WjQI.png?width=496&height=172",
      description:
        "7 students were building software for UAE-based companies before their first year was over. Dubai didn't wait for them to graduate. Neither did they.",
    },
  ];

  return (
    <section className="bg-black px-6 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1250px]">
        
        {/* Heading */}
        <div className="max-w-5xl">
          <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Internships Across 12 Countries.
            <br />
            From Year 1.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            The biggest argument for studying abroad is global exposure.
            At Polaris, we have built that into the programme itself - so you
            dont have to move countries to get it. It comes to you.
          </p>
        </div>

        {/* World Map */}
        <div className="mt-16 overflow-hidden rounded-[28px]">
          <img
            src="https://storage.googleapis.com/polaris-website-framer/Website%20Images/mapsss%20(1).png"
            alt="Polaris students across the world"
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Internship Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {internships.map((internship) => (
            <div
              key={internship.title}
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white"
            >
              <div className="aspect-[2.5/1] w-full overflow-hidden">
                <img
                  src={internship.image}
                  alt={internship.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="px-4 pb-4 pt-0">
                <h3 className="text-3xl font-bold italic tracking-[-0.03em] text-[#FFCE1B]">
                  {internship.title}
                </h3>

                <p className="mt-1 text-base leading-6 text-black">
                  {internship.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}