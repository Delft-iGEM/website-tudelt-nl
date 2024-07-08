import { FC } from "react";
import Image from "next/image";
import { Template } from "tinacms";
import { TinaMarkdown, TinaMarkdownContent } from "tinacms/dist/rich-text";
import { cn } from "../../lib/cn";
import { tinaField } from "tinacms/dist/react";

interface SectionWithGraphicProps {
  title: string;
  body: TinaMarkdownContent;
  graphic?: string;
  alt?: string;
  alignment?: "left" | "right";
}

const SectionWithGraphic: FC<SectionWithGraphicProps> = (props) => {
  const { graphic, alt = "", title, body, alignment = "left" } = props;
  return (
    <section
      className={cn(
        "w-full grid grid-rows-2 md:grid-cols-2 md:grid-rows-none h-min items-center py-12 px-4 mb-14 last-of-type:mb-0",
        !graphic && "grid-cols-1"
      )}
    >
      {graphic ? (
        <div
          className={cn(
            "w-full flex items-center justify-center h-[300px] md:h-[400px] p-4 relative",
            alignment === "right" && "order-2"
          )}
        >
          <Image
            src={graphic}
            alt={alt}
            layout="fill"
            objectFit="contain"
            className="!relative !h-auto !w-auto !max-h-full !max-w-full rounded-lg"
            data-tina-field={tinaField(props, "graphic")}
          />
        </div>
      ) : null}
      <div
        className={cn(
          "w-full flex flex-col justify-center space-y-4 px-8 md:px-12",
          alignment === "right" && "order-1"
        )}
      >
        <div>
          <h2
            className="text-3xl font-bold text-accent-dark mb-4"
            data-tina-field={tinaField(props, "title")}
          >
            {title}
          </h2>
          <div
            className="prose max-w-none text-xl"
            data-tina-field={tinaField(props, "body")}
          >
            <TinaMarkdown content={body} />
          </div>
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
