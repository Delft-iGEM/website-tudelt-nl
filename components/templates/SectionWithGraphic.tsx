import { FC } from "react";
import Image from "next/image";
import { Template } from "tinacms";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";

interface SectionWithGraphicProps {
  graphic: string;
  title: string;
  alt: string;
  body: TinaMarkdownContent | TinaMarkdownContent[];
  alignment?: "left" | "right";
}

const SectionWithGraphic: FC<SectionWithGraphicProps> = ({
  graphic,
  alt = "",
  title,
  body,
  alignment = "left",
}) => {
  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-4 ${
        alignment === "right" ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-1/2">
        <Image
          src={graphic}
          alt={alt}
          layout="responsive"
          width={500}
          height={300}
          objectFit="cover"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-accent-dark">{title}</h2>
        <div className="prose">
          <TinaMarkdown content={body} />
        </div>
      </div>
    </section>
  );
};

export default SectionWithGraphic;

export const SectionWithGraphicTemplate: Template = {
  name: "SectionWithGraphic",
  label: "Section With Graphic",
  fields: [
    {
      name: "graphic",
      label: "Graphic",
      type: "image",
      required: true,
    },
    {
      name: "alt",
      label: "Alternative Text (for graphic)",
      type: "string",
    },
    {
      name: "title",
      label: "Title",
      type: "string",
      required: true,
    },
    {
      name: "body",
      label: "Body",
      type: "rich-text",
      required: true,
    },
    {
      name: "alignment",
      label: "Alignment",
      type: "string",
      options: ["left", "right"],
    },
  ],
};
