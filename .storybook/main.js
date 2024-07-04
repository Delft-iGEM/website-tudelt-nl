/** @type import("@storybook/nextjs").StorybookConfig */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    // configure for absolute imports
    // config.resolve.plugins = [
    //   ...(config.resolve.plugins || []),
    //   new TsconfigPathsPlugin({
    //     extensions: config.resolve.extensions,
    //   }),
    // ];

    // disable whatever is already set to load SVGs
    config.module.rules
      .filter((rule) => rule?.test?.test?.(".svg"))
      .forEach((rule) => (rule.exclude = /\.svg$/i));

    // add SVGR instead
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
      ],
      type: "javascript/auto",
      issuer: {
        and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
      },
    });

    return config;
  },
};
export default config;
