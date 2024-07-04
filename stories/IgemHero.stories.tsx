import { Meta, StoryObj } from "@storybook/react";

import IgemHero from "../components/templates/IgemHero";
import img0 from "./assets/img0.jpg";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";

const meta: Meta<typeof IgemHero> = {
  component: IgemHero,
  parameters: {
    layout: "fullscreen",
  },
};
export default meta;

type Story = StoryObj<typeof IgemHero>;

export const Default: Story = {
  args: {
    slides: [
      {
        imageUrl: img0.src,
        text: "Slide 1",
      },
      {
        imageUrl: img1.src,
        text: "Slide 2",
      },
      {
        imageUrl: img2.src,
        text: "Slide 3",
      },
    ],
  },
};
