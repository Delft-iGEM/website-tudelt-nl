import { useState } from "react";
import {
  isGrandPrize,
  isRunnerUp,
  medalOf,
  projects,
  villageColors,
  type Project,
} from "../data/projects";
import { revealDelay } from "../lib/reveal";

type Filter = { id: string; label: string; color?: string };

const villages = [...new Set(projects.map((p) => p.village))];

const filters: Filter[] = [
  { id: "all", label: "All projects" },
  { id: "grand", label: "Grand Prize winners", color: "#F5C542" },
  ...villages.map((v) => ({ id: v, label: v, color: villageColors[v] })),
];

function matches(p: Project, filter: string) {
  if (filter === "all") return true;
  if (filter === "grand") return isGrandPrize(p);
  return p.village === filter;
}

/** Award tags shown on a card; the rest collapse into a "+N" tag. */
const VISIBLE_AWARDS = 3;

const tag =
  "inline-block rounded-full px-2 py-[3px] text-[11px] leading-[1.25] font-bold";

function awardStyle(award: string) {
  if (award === "Gold medal" || award === "Grand Prize")
    return "bg-gold text-[#2B1D00]";
  if (award === "1st Runner-up") return "bg-[#5AA9FF] text-[#04172E]";
  if (award === "Silver medal") return "bg-[#D7DBE1] text-[#1F2329]";
  return "bg-white/92 text-[#141414]";
}

const motion = "motion-safe:transition-transform motion-safe:ease-out";

function ProjectCard({
  project: p,
  index,
}: {
  project: Project;
  index: number;
}) {
  const glow = isGrandPrize(p)
    ? "glow-grand"
    : isRunnerUp(p)
      ? "glow-runner"
      : "glow-default";
  // The medal sits at the top beside the track; the rest go in the awards row
  const medal = medalOf(p);
  const otherAwards = p.awards.filter((a) => a !== medal);
  const shownAwards = otherAwards.slice(0, VISIBLE_AWARDS);
  const moreAwards = otherAwards.slice(VISIBLE_AWARDS);
  const noms = p.nominations.length;

  return (
    // The scroll-reveal animation runs on this wrapper, not on the card itself.
    <div data-reveal style={revealDelay((index % 2) * 110)} className="grid">
      {/* The 16:10 ratio lives on a spacer, not the card: the card keeps its
          column width and only grows taller if the text needs more room. */}
      <article
        className={`${glow} group relative grid grid-cols-1 overflow-hidden rounded-lg bg-[#0B1A44]`}
      >
        {p.photo ? (
          <img
            src={p.photo}
            alt={`The ${p.year} TU Delft iGEM team`}
            loading="lazy"
            style={{ objectPosition: p.photoPosition ?? "50% 40%" }}
            className={`absolute inset-0 size-full object-cover ${motion} motion-safe:duration-700 motion-safe:group-hover:scale-[1.03]`}
          />
        ) : (
          <div aria-hidden="true" className="card-stripes absolute inset-0" />
        )}
        <span aria-hidden="true" className="card-scrim absolute inset-0" />

        <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span
              className={`${tag} text-[#141414]`}
              style={{ background: villageColors[p.village] }}
            >
              {p.village}
            </span>
            {medal && (
              <span className={`${tag} ${awardStyle(medal)} shadow-sm`}>
                {medal}
              </span>
            )}
          </div>
          <span className="flex items-center gap-1 text-[13px] font-extrabold text-white [text-shadow:0_1px_6px_rgb(0_0_0/0.6)]">
            {p.year}
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-3.5 drop-shadow-[0_1px_3px_rgb(0_0_0/0.6)]"
            >
              <path d="M5 11 11 5M6 5h5v5" />
            </svg>
          </span>
        </div>

        <div
          aria-hidden="true"
          className="col-start-1 row-start-1 aspect-[16/10] w-full"
        />
        <div className="relative col-start-1 row-start-1 flex flex-col gap-2.5 self-end px-[18px] pt-14 pb-4">
          <h3 className="sr-only">
            {p.name} ({p.year})
          </h3>

          {/* Logo (or name) beside the blurb keeps the text strip short */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3.5">
            {/* Logos are transparent PNGs that sit straight on the photo */}
            {p.logo ? (
              <div className="flex shrink-0 items-center gap-2.5 self-start sm:self-center">
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className={`block h-auto max-h-11 w-auto max-w-[200px] ${p.invertLogo ? "invert hue-rotate-180" : ""}`}
                />
                {p.showName && (
                  <span
                    aria-hidden="true"
                    className="text-[20px] leading-[1.1] font-extrabold tracking-[-0.01em] whitespace-nowrap text-white"
                  >
                    {p.name}
                  </span>
                )}
              </div>
            ) : (
              <span
                aria-hidden="true"
                className="shrink-0 text-[22px] leading-[1.1] font-extrabold tracking-[-0.01em] text-white"
              >
                {p.name}
              </span>
            )}
            <p className="line-clamp-4 text-[13px] leading-[1.5] text-[#E3E7F0]">
              {p.blurb}
            </p>
          </div>

          {(otherAwards.length > 0 || noms > 0) && (
            <div className="flex flex-wrap items-center gap-1">
              {otherAwards.length > 0 && (
                <span className="sr-only">Awards:</span>
              )}
              {shownAwards.map((a) => (
                <span key={a} className={`${tag} ${awardStyle(a)}`}>
                  {a}
                </span>
              ))}
              {moreAwards.length > 0 && (
                <span className={`${tag} bg-white/15 text-white`}>
                  <span aria-hidden="true">+{moreAwards.length}</span>
                  <span className="sr-only">, {moreAwards.join(", ")}.</span>
                </span>
              )}
              {noms > 0 && (
                <span className="ml-1 text-[11px] font-semibold text-[#AEB5C2]">
                  <span aria-hidden="true">
                    {noms} {noms === 1 ? "nomination" : "nominations"}
                  </span>
                  <span className="sr-only">
                    Nominated for {p.nominations.join(", ")}.
                  </span>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Covers the whole card so any click on it opens the wiki */}
        <a
          href={p.wiki}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10 rounded-lg focus-visible:ring-3 focus-visible:ring-green focus-visible:outline-none focus-visible:ring-inset"
        >
          <span className="sr-only">
            {p.name} ({p.year}) wiki, opens in a new tab
          </span>
        </a>
      </article>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const visible = projects.filter((p) => matches(p, filter));

  return (
    <section id="projects" className="bg-projects relative overflow-hidden">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-28 md:px-10 md:py-32">
        <div
          data-reveal
          className="flex flex-wrap items-end justify-between gap-5"
        >
          <div className="flex max-w-[720px] flex-col gap-3">
            <h2 className="text-[clamp(26px,2.6vw,32px)] leading-[1.2] font-bold text-ink">
              Previous TU Delft projects
            </h2>
            <p className="text-[15px] leading-[1.65] text-muted">
              Every team, every idea, since 2008.
            </p>
          </div>
          <p
            aria-live="polite"
            className="text-[13px] font-semibold text-muted"
          >
            Showing {visible.length} projects
          </p>
        </div>

        <div
          role="group"
          aria-label="Filter projects by theme"
          data-reveal
          style={revealDelay(90)}
          className="flex flex-wrap gap-2"
        >
          {filters.map((f) => {
            const on = f.id === filter;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(f.id)}
                className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border-[1.5px] px-3.5 py-2 text-[13px] font-semibold transition-colors sm:min-h-10 ${
                  on
                    ? "border-ink bg-ink text-white"
                    : "border-[#D4D4D4] bg-white text-ink hover:border-[#8C8C8C]"
                }`}
              >
                {f.color && (
                  <span
                    aria-hidden="true"
                    className="inline-block size-2 rounded-full"
                    style={{ background: f.color }}
                  />
                )}
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="mt-2 grid grid-cols-[repeat(auto-fill,minmax(min(100%,500px),1fr))] gap-6">
          {visible.map((p, i) => (
            <ProjectCard key={p.year} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
