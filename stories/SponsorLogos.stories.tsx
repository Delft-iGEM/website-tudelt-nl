import { Meta, StoryObj } from "@storybook/react";
import SponsorLogos from "../components/templates/SponsorLogos";
import logo0 from "./assets/logo1.png";
import logo1 from "./assets/logo2.png";
import logo2 from "./assets/logo3.png";

const meta: Meta<typeof SponsorLogos> = {
  component: SponsorLogos,
  argTypes: {
    title: { control: "text" },
    sponsors: { control: "object" },
  },
} as Meta;

export default meta;

type Story = StoryObj<typeof SponsorLogos>;

export const Default: Story = {
  args: {
    title: "Our Sponsors",
    sponsors: [
      { logo: logo0.src, alt: "Sponsor 1", link: "https://sponsor1.com" },
      { logo: logo1.src, alt: "Sponsor 2", link: "https://sponsor2.com" },
      { logo: logo2.src, alt: "Sponsor 3", link: "https://sponsor3.com" },
    ],
  },
};

export const ManySponsor: Story = {
  args: {
    title: "Our Many Sponsors",
    sponsors: [
      { logo: logo0.src, alt: "Sponsor 1", link: "https://sponsor1.com" },
      { logo: logo1.src, alt: "Sponsor 2", link: "https://sponsor2.com" },
      { logo: logo2.src, alt: "Sponsor 3", link: "https://sponsor3.com" },
      { logo: logo0.src, alt: "Sponsor 4", link: "https://sponsor4.com" },
      { logo: logo1.src, alt: "Sponsor 5", link: "https://sponsor5.com" },
      { logo: logo2.src, alt: "Sponsor 6", link: "https://sponsor6.com" },
      { logo: logo0.src, alt: "Sponsor 7", link: "https://sponsor7.com" },
      { logo: logo1.src, alt: "Sponsor 8", link: "https://sponsor8.com" },
    ],
  },
};

export const SingleSponsor: Story = {
  args: {
    title: "Our Exclusive Sponsor",
    sponsors: [
      {
        logo: logo0.src,
        alt: "Exclusive Sponsor",
        link: "https://exclusivesponsor.com",
      },
    ],
  },
};

export const LongTitle: Story = {
  args: {
    title: "Our Amazing Sponsors Who Support Our Incredible Work",
    sponsors: [
      { logo: logo0.src, alt: "Sponsor 1", link: "https://sponsor1.com" },
      { logo: logo1.src, alt: "Sponsor 2", link: "https://sponsor2.com" },
      { logo: logo2.src, alt: "Sponsor 3", link: "https://sponsor3.com" },
    ],
  },
};
