import { Meta, StoryObj } from "@storybook/react";
import Footer from "../components/layout/footer";

const meta: Meta<typeof Footer> = {
  component: Footer,
  argTypes: {
    logo: { control: "text" },
    columns: { control: "object" },
    socialLinks: { control: "object" },
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    logo: "https://via.placeholder.com/150x50",
    columns: [
      {
        title: "Company",
        links: [
          { label: "About Us", url: "/about" },
          { label: "Careers", url: "/careers" },
          { label: "Contact", url: "/contact" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Web Design", url: "/services/web-design" },
          { label: "Development", url: "/services/development" },
          { label: "Marketing", url: "/services/marketing" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", url: "/privacy" },
          { label: "Terms of Service", url: "/terms" },
        ],
      },
    ],
    socialLinks: [
      {
        platform: "Facebook",
        url: "https://facebook.com",
        icon: "FaFacebook",
      },
      {
        platform: "Twitter",
        url: "https://twitter.com",
        icon: "FaTwitter",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com",
        icon: "FaLinkedin",
      },
    ],
  },
};

export const MinimalContent: Story = {
  args: {
    logo: "https://via.placeholder.com/150x50",
    columns: [
      {
        title: "Quick Links",
        links: [
          { label: "Home", url: "/" },
          { label: "About", url: "/about" },
        ],
      },
    ],
    socialLinks: [
      {
        platform: "Instagram",
        url: "https://instagram.com",
        icon: "fab fa-instagram",
      },
    ],
  },
};

export const ManyColumns: Story = {
  args: {
    logo: "https://via.placeholder.com/150x50",
    columns: [
      {
        title: "Products",
        links: [
          { label: "Product A", url: "/products/a" },
          { label: "Product B", url: "/products/b" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Service X", url: "/services/x" },
          { label: "Service Y", url: "/services/y" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Blog", url: "/blog" },
          { label: "Whitepapers", url: "/resources/whitepapers" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", url: "/about" },
          { label: "Careers", url: "/careers" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help Center", url: "/help" },
          { label: "Contact", url: "/contact" },
        ],
      },
    ],
    socialLinks: [
      {
        platform: "Facebook",
        url: "https://facebook.com",
        icon: "FaFacebook",
      },
      {
        platform: "Twitter",
        url: "https://twitter.com",
        icon: "FaTwitter",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com",
        icon: "FaLinkedin",
      },
      {
        platform: "Instagram",
        url: "https://instagram.com",
        icon: "FaInstagram",
      },
      {
        platform: "YouTube",
        url: "https://youtube.com",
        icon: "FaYoutube",
      },
    ],
  },
};
