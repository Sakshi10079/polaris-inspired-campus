"use client";

const rowOneLogos = [
  "Anakin Ai.svg",
  "Apify.svg",
  "Arduino.svg",
  "AWS.svg",
  "Blackfire.png",
  "BlockChair.svg",
  "BrowserStack 4.svg",
  "Clerk.svg",
  "Dashlane.svg",
  "DataCamp.svg",
  "Deepnote.svg",
  "DeepScan.svg",
  "DevCycle.svg",
  "image 2074.svg",
  "Dot Tech.svg",
  "Educative.svg",
  "GitHub.svg",
  "GitKraken.svg",
  "Google.svg",
  "GoRails.svg",
  "Heroku.svg",
  "Honeybadger.svg",
];

const rowTwoLogos = [
  "Zyte.svg",
  "xyz.svg",
  "Vultr.svg",
  "Visual Studio.svg",
  "Travis CI.svg",
  "Tower.svg",
  "TestMu AI.svg",
  "Temporal 2.svg",
  "SQL Gate.png",
  "Smallest.ai.png",
  "Simple Analytics.svg",
  "Simora.ai.png",
  "Scrimba.svg",
  "Sarvam.svg",
  "PopSQL.svg",
  "Notion.svg",
  "New Relic.svg",
  "Name.com.svg",
  "MDB_BIG 1.svg",
  "Microsoft.svg",
  "JetBrains.svg",
  "Interview Cake.svg",
  "ImgBot.svg",
];

const logoBaseUrl =
  "https://storage.googleapis.com/polaris-website-framer/Website%20Images/Company%20Logos/";

function LogoTicker({
  logos,
  reverse = false,
}: {
  logos: string[];
  reverse?: boolean;
}) {
  // Duplicate the sequence so the ticker can move continuously.
  const tickerLogos = [...logos, ...logos];

  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max items-center gap-14 ${
          reverse ? "animate-logo-right" : "animate-logo-left"
        }`}
      >
        {tickerLogos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex h-12 shrink-0 items-center justify-center rounded-lg bg-black/[0.06] px-5 py-2"
          >
            <img
              src={`${logoBaseUrl}${encodeURIComponent(logo).replace(
                /%2F/g,
                "/",
              )}`}
              alt="Company logo"
              className="h-full w-auto object-contain"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GlobalFund() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(to_bottom,#050505_0%,#120709_12%,#4a0b14_35%,#4a0b14_58%,#350a11_68%,#1f080d_76%,#0d0406_84%,#000000_94%,#000000_100%)] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main content */}
        <div className="grid items-center gap-16 lg:grid-cols-[1.4fr_0.6fr]">
          {/* Left */}
          <div>
            <h2 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              $10M in Credits. 50+ Global Tech Companies. Launching Polaris
              Global Fund.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/70">
              Global tech companies dont just recruit from Polaris - they invest
              in it. The Polaris Global Fund is backed by companies that are
              actively shaping what engineering looks like next.
            </p>
          </div>

          {/* Right - Global Fund graphic */}
          <div className="flex justify-end">
            <img
              src="https://storage.googleapis.com/polaris-website-framer/Website%20Images/dollar.avif"
              alt="Polaris Global Fund"
              className=" max-w-[200px] object-contain"
            />
          </div>
        </div>

        {/* Company logo tickers */}
        <div className="relative mt-20">
          {/* Edge fades
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" /> */}

          {/* Row 1 */}
          <LogoTicker logos={rowOneLogos} />

          {/* Row 2 */}
          <div className="mt-4">
            <LogoTicker logos={rowTwoLogos} reverse />
          </div>
        </div>
      </div>
      {/* fading horizontal line */}
      <div className="mt-16 h-px w-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.35)_20%,rgba(255,255,255,0.35)_80%,transparent)]" />

      {/* Video Section */}
      <div className="mt-16 -mx-6 bg-transparent px-6 pb-14 pt-4 lg:-mx-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {/* Video 1 */}
          <div className="aspect-video overflow-hidden rounded-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/166iX6RF07E"
              title="Polaris Campus Tour"
              allowFullScreen
            />
          </div>

          {/* Video 2 */}
          <div className="aspect-video overflow-hidden rounded-2xl">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/166iX6RF07E"
              title="Polaris Campus Tour"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      {/* fading horizontal line */}
      <div className="mt-16 h-px w-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.35)_20%,rgba(255,255,255,0.35)_80%,transparent)]" />
    </section>
  );
}
