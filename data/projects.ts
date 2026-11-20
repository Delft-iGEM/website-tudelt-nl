export type Project = {
  year: number;
  name: string;
  /** The team's iGEM wiki, opened when the card is clicked. */
  wiki: string;
  /** iGEM track ("village") the project competed in. */
  village: string;
  blurb: string;
  awards: string[];
  nominations: string[];
  /** Transparent PNG with light artwork: it sits directly on the dark photo. */
  logo?: string;
  /** Logo artwork is dark: invert it (keeping its hues) so it reads on the photo. */
  invertLogo?: boolean;
  /** The logo doesn't include the project name: show the name beside it. */
  showName?: boolean;
  photo?: string;
  /** CSS object-position for the team photo, to keep the whole team in frame. */
  photoPosition?: string;
};

export const villageColors: Record<string, string> = {
  Biomanufacturing: "#966ED6",
  "Infectious Diseases": "#F1AA36",
  Agriculture: "#C8D850",
  Diagnostics: "#F14545",
  "Food & Nutrition": "#F59E42",
  "Foundational Advance": "#B97B5E",
  "New Application": "#D1A5E0",
  Hardware: "#8D70C9",
  Microfluidics: "#5EC4B6",
  "Health & Medicine": "#F391BC",
  "Information Processing": "#B7E294",
  Environment: "#50C6DF",
  Manufacturing: "#966ED6",
};

const img = (file: string) => `/images/projects/${file}`;

export const projects: Project[] = [
  {
    year: 2026,
    wiki: "https://2026.igem.wiki/tu-delft/",
    name: "MOSAIC",
    village: "Biomanufacturing",
    blurb:
      "A modular biomanufacturing platform for medical implant coatings that improve tissue integration, prevent infections and release drugs in a controlled way.",
    awards: [
      "Gold medal",
      "Grand Prize",
      "Top 10",
      "Best Biomanufacturing Project",
      "Best Wiki",
      "Best Integrated Human Practices",
    ],
    nominations: ["Best Model", "Best Presentation", "Best Entrepreneurship"],
    logo: img("2026-mosaic-logo.png"),
    photo: img("2026-team.jpg"),
  },
  {
    year: 2025,
    wiki: "https://2025.igem.wiki/tu-delft/",
    name: "Snaccine",
    village: "Infectious Diseases",
    blurb:
      "A phage-based edible vaccine platform: gut bacteria are engineered to produce an mRNA vaccine.",
    awards: ["Gold medal"],
    nominations: [],
    logo: img("2025-snaccine-logo.svg"),
    photo: img("2025-team.jpg"),
    // Wide photo: shift the crop left so everyone fits
    photoPosition: "38% 50%",
  },
  {
    year: 2024,
    wiki: "https://2024.igem.wiki/tu-delft/",
    name: "NitroBLAST",
    village: "Agriculture",
    blurb: "Laying the groundwork for engineered biological nitrogen fixation.",
    awards: ["Silver medal"],
    nominations: [],
    logo: img("2024-nitroblast-logo.png"),
    photo: img("2024-team.jpg"),
  },
  {
    year: 2022,
    wiki: "https://2022.igem.wiki/tudelft/",
    name: "Spyke",
    village: "Diagnostics",
    blurb:
      "Detect to protect: biotechnology to detect and combat drink spiking.",
    awards: ["Gold medal"],
    nominations: [
      "Best Diagnostics Project",
      "Best Hardware",
      "Best Supporting Entrepreneurship",
      "Best Sustainable Development Impact",
      "Safety and Security Award",
    ],
    logo: img("2022-spyke-logo.png"),
    photo: img("2022-team.jpg"),
  },
  {
    year: 2021,
    wiki: "https://2021.igem.org/Team:TUDelft",
    name: "AptaVita",
    village: "Diagnostics",
    blurb:
      "A modular, aptamer-based rapid test for vitamin deficiencies: hidden hunger.",
    awards: [
      "Gold medal",
      "1st Runner-up",
      "Top 10",
      "Best Diagnostics Project",
      "Best Supporting Entrepreneurship",
    ],
    nominations: [
      "Finalist",
      "Best Integrated Human Practices",
      "Best New Basic Part",
      "Best New Composite Part",
      "Best Part Collection",
      "Best Safety & Security",
      "Best Sustainability",
    ],
    photo: img("2021-team.jpg"),
    logo: img("2021-aptavita-logo.png"),
  },
  {
    year: 2020,
    wiki: "https://2020.igem.org/Team:TUDelft",
    name: "PHOCUS",
    village: "Food & Nutrition",
    blurb:
      "A sustainable, targeted biocontrol agent against devastating locust swarms.",
    awards: [
      "Gold medal",
      "Best Food & Nutrition Project",
      "Best Presentation",
      "Best Poster",
      "Best Integrated Human Practices",
      "Safety & Security",
      "Best New Basic Part",
      "Best New Composite Part",
      "iGEMers Prize",
    ],
    nominations: [
      "Best Wiki",
      "Best Education",
      "Best Supporting Entrepreneurship",
      "Best Sustainable Development Impact",
      "Best Part Collection",
    ],
    photo: img("2020-team.jpg"),
    logo: img("2020-phocus-logo.png"),
  },
  {
    year: 2019,
    wiki: "https://2019.igem.org/Team:TUDelft",
    name: "Sci-Phi",
    village: "Foundational Advance",
    blurb:
      "Orthogonal replication and predictable expression to expand the bacterial toolbox.",
    awards: [
      "Gold medal",
      "Best Foundational Advance Project",
      "Best Part Collection",
    ],
    nominations: [],
    photo: img("2019-team.jpg"),
    logo: img("2019-sci-phi-logo.png"),
  },
  {
    year: 2018,
    wiki: "https://2018.igem.org/Team:TUDelft",
    name: "ADOPE",
    village: "New Application",
    blurb: "Detecting gene doping to keep sports clean.",
    awards: [
      "Gold medal",
      "Best New Application Project",
      "Best Product Design",
    ],
    nominations: [
      "Finalist",
      "Best Wiki",
      "Best Poster",
      "Best Integrated Human Practices",
      "Best Education & Public Engagement",
      "Best Entrepreneurship",
      "Best Part Collection",
    ],
    photo: img("2018-team.jpg"),
    logo: img("2018-adope-logo.png"),
  },
  {
    year: 2017,
    wiki: "https://2017.igem.org/Team:TUDelft",
    name: "Case13a",
    village: "New Application",
    blurb:
      "A CRISPR-Cas13a test that lets farmers check on-site whether an infection is antibiotic resistant.",
    awards: [
      "Gold medal",
      "Grand Prize",
      "Best New Application Project",
      "Best Presentation",
      "Best Integrated Human Practices",
      "Best Education & Public Engagement",
      "Best Measurement",
      "Best Entrepreneurship",
      "Best New Composite Part",
      "Best Part Collection",
    ],
    nominations: [
      "Best Wiki",
      "Best Poster",
      "Best Model",
      "Best Applied Design",
    ],
    logo: img("2017-case13a-logo.png"),
    invertLogo: true,
    photo: img("2017-team.jpg"),
  },
  {
    year: 2016,
    wiki: "https://2016.igem.org/Team:TU_Delft",
    name: "Opticoli",
    village: "New Application",
    blurb:
      "Biological optics: bacteria that build lenses and lasers for microscopy.",
    awards: [
      "Gold medal",
      "Best New Application Project",
      "Best Model",
      "Best New Composite Part",
    ],
    nominations: ["Best Wiki"],
    photo: img("2016-team.jpg"),
  },
  {
    year: 2015,
    wiki: "https://2015.igem.org/Team:TU_Delft",
    name: "Biolink",
    village: "Hardware",
    blurb:
      "3D micro(be) printing: a do-it-yourself printer for structured bacterial biofilms.",
    awards: [
      "Gold medal",
      "Grand Prize",
      "Best Hardware Project",
      "Best Wiki",
      "Best Applied Design",
    ],
    nominations: [
      "Best Integrated Human Practices",
      "Best Model",
      "Best New Composite Part",
      "Best Part Collection",
    ],
    logo: img("2015-biolink-logo.png"),
    photo: img("2015-team.jpg"),
  },
  {
    year: 2014,
    wiki: "https://2014.igem.org/Team:TU_Delft-Leiden",
    name: "Electrace",
    village: "Microfluidics",
    blurb:
      "With Leiden: bacterial biosensors using electron transport to detect landmines.",
    awards: ["Gold medal", "Best Microfluidics Project"],
    nominations: [],
    photo: img("2014-team.jpg"),
  },
  {
    year: 2013,
    wiki: "https://2013.igem.org/Team:TU-Delft",
    name: "Peptidor",
    village: "Health & Medicine",
    blurb:
      "Bacterial sentinels that find MRSA and release antimicrobial peptides to kill it.",
    awards: ["Gold medal", "Advanced to Championship"],
    nominations: [],
    logo: img("2013-peptidor-logo.png"),
    photo: img("2013-team.jpg"),
  },
  {
    year: 2012,
    wiki: "https://2012.igem.org/Team:TU-Delft",
    name: "Snifferomyces",
    village: "Information Processing",
    blurb: "Yeast engineered to sniff out disease markers.",
    awards: ["Gold medal", "Advanced to Championship"],
    nominations: [],
    logo: img("2012-snifferomyces-logo.png"),
    photo: img("2012-team.jpg"),
  },
  {
    year: 2011,
    wiki: "https://2011.igem.org/Team:TU-Delft",
    name: "StickE. Coli",
    village: "New Application",
    blurb: "Bacteria that stick, using engineered mussel adhesive proteins.",
    awards: [],
    nominations: [],
    logo: img("2011-sticke-coli-logo.png"),
    showName: true,
    photo: img("2011-team.jpg"),
  },
  {
    year: 2010,
    wiki: "https://2010.igem.org/Team:TU_Delft",
    name: "Alkanivore",
    village: "Environment",
    blurb: "Bacteria engineered to break down alkanes and clean up oil spills.",
    awards: ["Gold medal", "Best Presentation"],
    nominations: [],
    logo: img("2010-alkanivore-logo.png"),
    showName: true,
    photo: img("2010-team.jpg"),
  },
  {
    year: 2009,
    wiki: "https://2009.igem.org/Team:TUDelft",
    name: "Relay Race",
    village: "Information Processing",
    blurb:
      "Bacteria that pass a message from cell to cell by conjugation, then self-destruct, like a relay race.",
    awards: ["Gold medal", "Best Information Processing Project"],
    nominations: [],
    photo: img("2009-team.jpg"),
    photoPosition: "50% 100%",
  },
  {
    year: 2008,
    // The archived 2008 home page is vandalised; link the project overview instead.
    wiki: "https://2008.igem.org/Team:TUDelft/Temperature_overview",
    name: "Biothermometer",
    village: "Manufacturing",
    blurb:
      "E. coli that changes colour at set temperatures, using an RNA thermometer.",
    awards: ["Gold medal", "Best Wiki"],
    nominations: [],
  },
];

const MEDALS = ["Gold medal", "Silver medal", "Bronze medal"];
/** The project's iGEM medal, if it won one. */
export const medalOf = (p: Project) => p.awards.find((a) => MEDALS.includes(a));

export const isGrandPrize = (p: Project) => p.awards.includes("Grand Prize");
export const isRunnerUp = (p: Project) => p.awards.includes("1st Runner-up");
