import type { Collection } from "tinacms";
import { templates } from "../../components/templates";

const HomePage: Collection = {
  label: "Home Page",
  name: "home",
  path: "content/home",
  format: "json",
  ui: {
    router: () => "/",
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: "blocks",
      type: "object",
      label: "Sections",
      required: true,
      list: true,
      templates,
    },
  ],
};

export default HomePage;
