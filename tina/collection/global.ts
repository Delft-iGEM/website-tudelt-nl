import type { Collection } from "tinacms";

const Global: Collection = {
  label: "Global",
  name: "global",
  path: "content/global",
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false,
    },
    router: () => "/",
  },
  fields: [
    {
      type: "object",
      label: "Header",
      name: "header",
      required: true,
      fields: [
        {
          type: "object",
          label: "Nav Links",
          name: "nav",
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.label };
            },
          },
          fields: [
            {
              type: "string",
              label: "Label",
              name: "label",
              required: true,
            },
            {
              type: "string",
              label: "Link",
              name: "href",
            },
            {
              type: "object",
              label: "Children",
              name: "children",
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item?.label };
                },
              },
              fields: [
                {
                  type: "string",
                  label: "Label",
                  name: "label",
                  required: true,
                },
                {
                  type: "string",
                  label: "Link",
                  name: "href",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
    // {
    //   type: "object",
    //   label: "Footer",
    //   name: "footer",
    //   fields: [
    //     {
    //       type: "object",
    //       label: "Social Links",
    //       name: "social",
    //       fields: [
    //         {
    //           type: "string",
    //           label: "Facebook",
    //           name: "facebook",
    //         },
    //         {
    //           type: "string",
    //           label: "Twitter",
    //           name: "twitter",
    //         },
    //         {
    //           type: "string",
    //           label: "Instagram",
    //           name: "instagram",
    //         },
    //         {
    //           type: "string",
    //           label: "Github",
    //           name: "github",
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};

export default Global;
