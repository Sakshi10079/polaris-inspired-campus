"use client";

export default function TrackQuiz() {
  return (
    <section className="bg-black px-6 py-10 sm:px-8 lg:px-10 ">
      <div
        className="mx-auto flex min-h-[80px] max-w-[1250px] items-center rounded-[28px] bg-cover bg-center bg-no-repeat px-8 py-12 sm:px-12 lg:min-h-[80px] lg:px-16 border border-gray-500 rounded-2xl"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/3oehJqqcYaTW15RnYtEZEsW97j8.png?height=745&width=2560')",
        }}
      >
        <div className="flex w-full items-center justify-between gap-10 ">
          
          {/* Text */}
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
              Not sure which track is right for you?
            </h2>

            <p className="mt-4 text-base text-white/70 sm:text-lg">
              Take the 2-minute quiz and find out.
            </p>
          </div>

          {/* Button */}
          <div className="shrink-0">
            <button
              type="button"
              className="rounded-full border border-white bg-black px-7 py-3 text-[18px] font-medium text-white transition-all duration-200 hover:bg-white hover:text-black"
            >
              Take Quiz
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}