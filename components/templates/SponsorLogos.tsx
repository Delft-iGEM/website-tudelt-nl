import { FC } from "react";
import Link from "next/link";
import { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";

interface SponsorLogo extends Record<string, unknown> {
  logo: string;
  alt: string;
  link: string;
  scale?: number;
}

interface SponsorLogosProps extends Record<string, unknown> {
  title: string;
  sponsors: SponsorLogo[];
}

const SponsorLogos: FC<SponsorLogosProps> = (props) => {
  const { title, sponsors } = props;

  return (
    <section className="w-full py-12 px-4 mb-14 last-of-type:mb-0">
      <h2
        className="text-3xl font-bold text-accent-dark mb-8 text-center"
        data-tina-field={tinaField(props, "title")}
      >
        {title}
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {sponsors.map((sponsor, index) => (
          <Link
            key={index}
            href={sponsor.link}
            className="block group"
            target="_blank"
            data-tina-field={tinaField(props.sponsors[index], "link")}
          >
            <div className="relative min-h-16 w-32 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 ease-in-out">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sponsor.logo}
                alt={sponsor.alt}
                className="w-auto h-auto object-contain transition-all duration-300 ease-in-out grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                style={{
                  transform: sponsor.scale ? `scale(${sponsor.scale})` : "none",
                }}
                data-tina-field={tinaField(props.sponsors[index], "logo")}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SponsorLogos;

export const SponsorLogosTemplate: Template = {
  name: "SponsorLogos",
  label: "Sponsor Logos",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "string",
      required: true,
    },
    {
      name: "sponsors",
      label: "Sponsors",
      type: "object",
      list: true,
      fields: [
        {
          name: "logo",
          label: "Logo",
          type: "image",
          required: true,
        },
        {
          name: "alt",
          label: "Alternative Text (for logo)",
          type: "string",
          required: true,
        },
        {
          name: "link",
          label: "Sponsor Link",
          type: "string",
          required: true,
        },
        {
          name: "scale",
          label: "Scale (0.1 - 5)",
          type: "number",
          required: false,
        },
      ],
    },
  ],
};
