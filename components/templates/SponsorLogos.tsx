import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";

interface SponsorLogo {
  logo: string;
  alt: string;
  link: string;
}

interface SponsorLogosProps {
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
            data-tina-field={tinaField(props.sponsors[index], "link")}
          >
            <div className="relative h-16 w-32">
              <Image
                src={sponsor.logo}
                alt={sponsor.alt}
                layout="fill"
                objectFit="contain"
                className="!relative !h-auto !w-auto !max-h-full !max-w-full transition-all duration-300 ease-in-out grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
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
      ],
    },
  ],
};
