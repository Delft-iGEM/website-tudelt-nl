import { Meta, StoryObj } from "@storybook/react";

import HeroImage from "../components/templates/HeroImage";
import img from "./assets/img0.jpg";

const meta: Meta<typeof HeroImage> = {
  component: HeroImage,
};
export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    imageUrl: img.src,
    text: "Hero Image",
  },
};

export const WithOffset: Story = {
  args: {
    imageUrl: img.src,
    text: "Hero Image",
    offset: { y: -25 },
  },
};

export const WithFade: Story = {
  args: {
    imageUrl: img.src,
    text: "Hero Image",
    fadeBottom: true,
  },
};
