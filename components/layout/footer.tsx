import React from "react";
import Link from "next/link";
import { TinaField } from "tinacms";
import { IconType } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

interface FooterLink {
  label: string;
  url: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface FooterProps {
  logo?: string;
  columns: FooterColumn[];
  socialLinks: SocialLink[];
}

const iconMap: { [key: string]: IconType } = {
  ...FaIcons,
  ...AiIcons,
  ...BsIcons,
};

const Footer: React.FC<FooterProps> = ({ logo, columns, socialLinks }) => {
  return (
    <footer className="bg-gray-800 text-white min-h-[300px] py-12">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt="Company Logo" className="h-16 mb-4" />
        </div>

        <div className="w-full lg:w-2/4 flex flex-wrap mb-8 lg:mb-0">
          {columns.map((column, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-6">
              <h3 className="text-lg font-bold mb-4">{column.title}</h3>
              <ul>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <Link
                      href={link.url}
                      className="hover:text-gray-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/4 flex justify-end">
          {socialLinks.map((link, index) => {
            const IconComponent = iconMap[link.icon];
            if (!IconComponent) {
              console.warn(`Icon not found for ${link.icon}`);
            }
            return (
              <a
                key={index}
                href={link.url}
                className="ml-4 text-2xl hover:text-gray-300 transition-colors"
                aria-label={link.platform}
              >
                {IconComponent && <IconComponent />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export const FooterFields: TinaField[] = [
  {
    name: "logo",
    label: "Logo",
    type: "image",
    required: true,
  },
  {
    name: "columns",
    label: "Footer Columns",
    type: "object",
    list: true,
    fields: [
      {
        name: "title",
        label: "Column Title",
        type: "string",
        required: true,
      },
      {
        name: "links",
        label: "Links",
        type: "object",
        list: true,
        fields: [
          {
            name: "label",
            label: "Link Label",
            type: "string",
            required: true,
          },
          {
            name: "url",
            label: "Link URL",
            type: "string",
            required: true,
          },
        ],
      },
    ],
  },
  {
    name: "socialLinks",
    label: "Social Media Links",
    type: "object",
    list: true,
    fields: [
      {
        name: "platform",
        label: "Platform Name",
        type: "string",
        required: true,
      },
      {
        name: "url",
        label: "Profile URL",
        type: "string",
        required: true,
      },
      {
        name: "icon",
        label: "Icon Class",
        type: "string",
        options: [
          { value: "FaFacebook", label: "Facebook" },
          { value: "FaTwitter", label: "Twitter" },
          { value: "FaLinkedin", label: "LinkedIn" },
          { value: "FaInstagram", label: "Instagram" },
          { value: "FaYoutube", label: "YouTube" },
          { value: "FaGithub", label: "GitHub" },
        ],
        required: true,
      },
    ],
  },
];
