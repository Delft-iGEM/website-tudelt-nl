import { Meta, StoryObj } from "@storybook/react";

import Carousel from "../components/templates/Carousel";

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
