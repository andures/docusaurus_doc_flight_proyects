// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "FLYGHT7 Docs",
  tagline:
    "Open-source aviation software documentation — PANS-OPS tools, charting, and obstacle analysis",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://flyght7.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "FLYGHT7",
  projectName: "flyght7-docs",

  onBrokenLinks: "throw",

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/FLYGHT7/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "FLYGHT7 Docs",
        logo: {
          alt: "FLYGHT7",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://flyght7.com",
            label: "flyght7.com",
            position: "left",
          },
          {
            href: "https://github.com/FLYGHT7",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Projects",
            items: [
              {
                label: "PANSOPS Calculator",
                to: "/docs/pansops-calculator/intro",
              },
              { label: "qpansopy", to: "/docs/projects/qpansopy" },
              { label: "qAeroChart", to: "/docs/projects/qaero-chart" },
              { label: "qOLS", to: "/docs/projects/qols" },
              { label: "tofpa", to: "/docs/projects/tofpa" },
              { label: "Checklists", to: "/docs/projects/checklists" },
            ],
          },
          {
            title: "Organization",
            items: [
              { label: "GitHub", href: "https://github.com/FLYGHT7" },
              { label: "flyght7.com", href: "https://flyght7.com" },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FLYGHT7. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
