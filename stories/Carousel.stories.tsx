import { Meta, StoryObj } from "@storybook/react";

import Carousel from "../components/templates/Carousel";
import HeroImage from "../components/templates/HeroImage";
import img0 from "./assets/img0.jpg";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";

const meta: Meta<typeof Carousel> = {
  component: Carousel,
};
export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    children: [
      <div
        key="1"
        className="bg-red-500 w-full h-80 flex justify-center items-center text-white "
      >
        Slide 1
      </div>,
      <div
        key="2"
        className="bg-green-500 w-full h-80 flex justify-center items-center text-white "
      >
        Slide 2
      </div>,
      <div
        key="3"
        className="bg-blue-500 w-full h-80 flex justify-center items-center text-white  "
      >
        Slide 3
      </div>,
    ],
  },
};

export const WithHeroImages: Story = {
  args: {
    children: [
      <HeroImage key="1" imageUrl={img0.src} text="Slide 1" />,
      <HeroImage key="2" imageUrl={img1.src} text="Slide 2" />,
      <HeroImage key="3" imageUrl={img2.src} text="Slide 3" />,
    ],
  },
};
