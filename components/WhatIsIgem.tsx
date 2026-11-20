import { revealDelay } from "../lib/reveal";

const pillars = [
  {
    title: "Wet lab",
    text: "Engineer organisms from your DNA design, express proteins and build biological complex systems.",
    image: "/images/wet-lab.jpg",
    alt: "Glassy cluster of cell-like bubbles",
  },
  {
    title: "Dry lab",
    text: "Modelling, software and hardware that predict, guide and measure what happens in the lab.",
    image: "/images/dry-lab.jpg",
    alt: "Coiled coral-coloured molecular structure",
  },
  {
    title: "Human Practices",
    text: "Ethics, safety and input from the people a project affects, shaping it beyond the bench.",
    image: "/images/human-practices.jpg",
    alt: "Blue and green organic forms floating in water",
  },
];

export default function WhatIsIgem() {
  return (
    <section id="what" className="bg-what relative overflow-hidden text-white">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-14 px-6 py-28 md:gap-16 md:px-10 md:py-32">
        <div className="flex max-w-[740px] flex-col gap-5">
          <h2
            data-reveal
            className="text-[clamp(30px,3.2vw,40px)] leading-[1.1] font-extrabold tracking-[-0.02em]"
          >
            What is iGEM?
          </h2>
          <p
            data-reveal
            style={revealDelay(90)}
            className="text-[clamp(17px,1.6vw,20px)] leading-[1.5] font-semibold"
          >
            iGEM, the International Genetically Engineered Machine competition,
            challenges student teams to solve real-world problems with synthetic
            biology: applying engineering principles to living systems.
          </p>
          <p
            data-reveal
            style={revealDelay(180)}
            className="text-base leading-[1.7] text-[#D9E4E8]"
          >
            It started at MIT in the early 2000s and has grown into a global
            community. Teams from biology, engineering, computer science, design
            and the social sciences spend a year on one project, then present it
            to judges and thousands of iGEMers at the Grand Jamboree in Paris.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              data-reveal
              style={revealDelay(i * 110)}
              className="flex flex-col overflow-hidden rounded-xl border border-white/14 bg-white/8"
            >
              <img
                src={p.image}
                alt={p.alt}
                className="block aspect-[16/10] w-full object-cover"
              />
              <div className="flex flex-col gap-2 px-6 pt-5 pb-6">
                <h3 className="text-[17px] font-bold">{p.title}</h3>
                <p className="text-sm leading-[1.6] text-[#D9E4E8]">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
