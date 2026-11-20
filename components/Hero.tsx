import { projects } from "../data/projects";
import { revealDelay } from "../lib/reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy text-white">
      <img
        src="/images/hero.jpg"
        alt=""
        aria-hidden="true"
        data-reveal="zoom"
        className="pointer-events-none absolute inset-0 size-full object-cover object-[70%_50%]"
      />
      <span aria-hidden="true" className="fade-hero absolute inset-0" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 pt-14 pb-32 md:px-10 md:pt-20 md:pb-44">
        <img
          src="/images/logo-igem-tudelft.png"
          alt="iGEM TU Delft logo"
          data-reveal
          className="mb-4 block h-14 w-auto self-start md:h-16"
        />
        <h1
          data-reveal
          style={revealDelay(90)}
          className="max-w-[740px] text-[clamp(38px,5vw,66px)] leading-[1.05] font-extrabold tracking-[-0.025em]"
        >
          Engineering <span className="text-green">biology</span> for real-world
          problems
        </h1>
        <p
          data-reveal
          style={revealDelay(180)}
          className="max-w-[660px] text-[17px] leading-[1.65] font-semibold md:text-[19px]"
        >
          Since 2008, a new team of TU Delft students has designed, built and
          tested a synthetic-biology project every year, and taken it to iGEM,
          the world&apos;s biggest synthetic biology competition.
        </p>
        <div
          data-reveal
          style={revealDelay(270)}
          className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2"
        >
          <a
            href="https://2026.igem.wiki/tu-delft"
            className="inline-flex min-h-12 items-center rounded-lg bg-green px-6 py-3.5 text-[15px] font-bold text-[#04130D] no-underline transition-colors hover:bg-[#33E0A8] hover:text-[#04130D]"
          >
            See our latest project: MOSAIC ↗
          </a>
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center text-[15px] font-semibold text-green no-underline hover:text-green hover:underline"
          >
            Explore all {projects.length} projects →
          </a>
        </div>
      </div>
    </section>
  );
}
