import type { Collection } from "tinacms";
import { templates } from "../../components/templates";

const Page: Collection = {
  label: "Pages",
  name: "page",
  path: "content/pages",
  format: "mdx",
  ui: {
    router: ({ document }) => `${document._sys.filename}`,
    filename: {
      readonly: true,
      slugify: (values) =>
        values.title
          ? `${(values.title as string).toLowerCase().replace(/\s+/g, "-")}`
          : "new-page",
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      description:
        "The title of the page. This is used to display the title in the CMS",
      isTitle: true,
      required: true,
    },
    {
      type: "rich-text",
      label: "Body",
      name: "body",
      isBody: true,
      templates,
    },
  ],
};

export default Page;
