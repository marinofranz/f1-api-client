import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "f1.ts",
  tagline:
    "Formula 1 API client, designed with TypeScript compatibility in mind",

  // Set the production url of your site here
  url: "https://f1.js.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "marinofranz", // Usually your GitHub org/user name.
  projectName: "f1.ts", // Usually your repo name.
  trailingSlash: true,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        entryPoints: ["../src/index.ts"],
        readme: "none",
        tsconfig: "../tsconfig.json",
        out: "reference",
        gitRevision: "main",
        sidebar: {
          categoryLabel: "Reference",
          position: 99,
        },
        watch: process.env.TYPEDOC_WATCH,
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "f1.ts",
      items: [
        {
          type: "doc",
          position: "left",
          docId: "intro",
          label: "Docs",
        },
        {
          href: "https://github.com/marinofranz/f1.ts",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      copyright: `Copyright © ${new Date().getFullYear()} Marino Franz`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
