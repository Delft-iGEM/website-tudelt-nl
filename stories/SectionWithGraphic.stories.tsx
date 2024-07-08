import { Meta, StoryObj } from "@storybook/react";
import SectionWithGraphic from "../components/templates/SectionWithGraphic";
import { TinaMarkdownContent } from "tinacms/dist/rich-text";

import img0 from "./assets/img0.jpg";

const meta: Meta<typeof SectionWithGraphic> = {
  component: SectionWithGraphic,
  argTypes: {
    alignment: {
      control: {
        type: "select",
        options: ["left", "right"],
      },
    },
  },
} as Meta;
export default meta;

type Story = StoryObj<typeof SectionWithGraphic>;

export const Default: Story = {
  args: {
    graphic: img0.src,
    alt: "Sample image",
    title: "Sample Title",
    body: [
      {
        type: "p",
        children: [
          {
            type: "html",
            value:
              "This is a sample body text for the SectionWithGraphic component. You can add more content here to see how it looks in the component.",
          } as unknown as TinaMarkdownContent,
        ],
      },
    ],
    alignment: "left",
  },
};

export const RightAligned: Story = {
  args: {
    ...Default.args,
    alignment: "right",
  },
};

export const LongContent: Story = {
  args: {
    ...Default.args,
    title: "Long Content Example",
    body: [
      {
        type: "p",
        children: [
          {
            type: "html",
            value:
              "This is an example with longer content to test how the component handles more text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.",
          } as unknown as TinaMarkdownContent,
        ],
      },
      {
        type: "p",
        children: [
          {
            type: "html",
            value:
              "Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.",
          } as unknown as TinaMarkdownContent,
        ],
      },
    ],
  },
};
