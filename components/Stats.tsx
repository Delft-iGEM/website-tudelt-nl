import { isGrandPrize, projects } from "../data/projects";
import { revealDelay } from "../lib/reveal";

const grandPrizes = projects
  .filter(isGrandPrize)
  .sort((a, b) => a.year - b.year)
  .map((p) => `${p.name} (${p.year})`);

const stats = [
  {
    value: `${projects.length} projects`,
    color: "#D6264A",
    text: "From a bacterial thermometer in 2008 to implant coatings in 2026.",
  },
  {
    value: `${grandPrizes.length} Grand Prizes`,
    color: "#1D5FE0",
    text: `${new Intl.ListFormat("en-GB").format(grandPrizes)}.`,
  },
  {
    value: "Every faculty",
    color: "#262626",
    text: "Teams bring together life scientists, engineers, programmers and designers.",
  },
];

export default function Stats() {
  return (
    <section
      aria-labelledby="stats-title"
      className="bg-stats relative overflow-hidden"
    >
      <div className="relative mx-auto flex max-w-7xl flex-wrap gap-12 px-6 py-28 md:px-10 md:py-32">
        <div data-reveal className="flex flex-[1_1_320px] flex-col gap-4">
          <h2
            id="stats-title"
            className="text-[clamp(26px,2.6vw,32px)] leading-[1.2] font-bold text-ink"
          >
            TU Delft in <span className="text-green-dark">iGEM</span>, by the
            numbers
          </h2>
          <p className="max-w-[420px] text-[15px] leading-[1.65] text-muted">
            Over almost two decades, TU Delft teams have been among the most
            successful in the competition&apos;s history.
          </p>
        </div>
        <div className="grid min-w-0 flex-[999_1_640px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
          {stats.map((s, i) => (
            <div
              key={s.value}
              data-reveal
              style={revealDelay(100 + i * 110)}
              className="flex flex-col gap-2 rounded-xl bg-white p-6 shadow-[0_6px_28px_rgb(0_0_0/0.08)]"
            >
              <span
                className="text-[22px] font-extrabold"
                style={{ color: s.color }}
              >
                {s.value}
              </span>
              <p className="text-sm leading-[1.6] text-[#404040]">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
