// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "PANSOPS Calculator",
      collapsible: true,
      collapsed: false,
      items: [
        "pansops-calculator/intro",
        "getting-started",
        {
          type: "category",
          label: "Features",
          items: ["features/copy-results"],
        },
        {
          type: "category",
          label: "Calculators",
          items: [
            {
              type: "category",
              label: "General",
              items: [
                "calculators/general/isa-deviation",
                "calculators/general/tas",
                "calculators/general/rate-turn",
                "calculators/general/dme-tolerance",
                "calculators/general/wind-spiral",
                "calculators/general/bearings-angles",
              ],
            },
            {
              type: "category",
              label: "Departures",
              items: ["calculators/departures/omni-sid"],
            },
            {
              type: "category",
              label: "Approach & Manoeuvring",
              items: [
                "calculators/approach/profile-estimator",
                "calculators/approach/npa-soc",
                "calculators/approach/vss-ocs",
                "calculators/approach/circling-protection",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "ILS",
          items: ["ils/height-calculations", "ils/distance-calculations"],
        },
        "contributing",
      ],
    },
    {
      type: "category",
      label: "QGIS Plugins",
      collapsible: true,
      collapsed: false,
      items: [
        "projects/qpansopy",
        "projects/qaero-chart",
        "projects/qols",
        "projects/qbra",
      ],
    },
    {
      type: "category",
      label: "Other Tools",
      collapsible: true,
      collapsed: false,
      items: ["projects/tofpa", "projects/checklists"],
    },
  ],
};

export default sidebars;
