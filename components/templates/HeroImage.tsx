import { FC } from "react";
import { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";

export interface HeroImageProps {
  imageUrl: string;
  height?: string;
  textPosition?: "center" | "left";
  text?: string;
  textColor?: "light" | "dark";
  offset?: Partial<{ x: number; y: number }>;
}

const HeroImage: FC<HeroImageProps> = (props) => {
  const {
    imageUrl,
    height = "h-96",
    textPosition = "center",
    textColor = "light",
    text = "",
    offset = { x: 0, y: 0 },
  } = props;

  const textAlignment = textPosition === "center" ? "text-center" : "text-left";
  const textColorClass = textColor === "light" ? "text-white" : "text-black";

  const bgX = 50 + (offset.x ?? 0);
  const bgY = 50 + (offset.y ?? 0);
  const backgroundPosition = `${bgX}% ${bgY}%`;

  return (
    <div
      className={`w-full relative bg-cover bg-no-repeat ${height}`}
      style={{ backgroundImage: `url(${imageUrl})`, backgroundPosition }}
    >
      {text && (
        <div
          className={`absolute inset-0 flex items-center justify-center ${textAlignment}`}
        >
          <h1
            className={`text-4xl font-bold ${textColorClass}`}
            data-tina-field={tinaField(props, "text")}
          >
            {text}
          </h1>
        </div>
      )}
    </div>
  );
};

export default HeroImage;

export const HeroImageTemplate: Template = {
  name: "HeroImage",
  label: "Hero Image",
  fields: [
    {
      name: "imageUrl",
      label: "Image",
      type: "image",
      required: true,
    },
    {
      name: "height",
      label: "Height",
      type: "string",
    },
    {
      name: "textPosition",
      label: "Text Position",
      type: "string",
      options: ["center", "left"],
    },
    {
      name: "text",
      label: "Text",
      type: "string",
    },
    {
      name: "textColor",
      label: "Text Color",
      type: "string",
      options: ["light", "dark"],
    },
    {
      name: "offset",
      label: "Background Offset",
      type: "object",
      fields: [
        {
          name: "x",
          label: "X",
          type: "number",
        },
        {
          name: "y",
          label: "Y",
          type: "number",
        },
      ],
    },
  ],
};
