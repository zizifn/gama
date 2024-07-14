import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  workshopSidebar: [
    "intro",
    {
      type: "category",
      label: "Workshop01",
      items: ["workshop01/intro"],
    },
    {
      type: "category",
      label: "Workshop02",
      items: ["workshop02/intro"],
    },
    {
      type: "category",
      label: "Workshop03-LLM in Local",
      items: ["workshop03/intro"],
    },
    {
      type: "category",
      label: "Workshop04-Fine Tuning LLM",
      items: ["workshop04/intro"],
    },
    // { type: "autogenerated", dirName: "tutorial-basics" },
    // { type: "autogenerated", dirName: "tutorial-extras" },
  ],
  // tutorialSidebar: ["intro", { type: "autogenerated", dirName: "." }],

  // choose any file name for the sidebar
  // tutorialSidebar: [
  //   "intro",
  //   {
  //     type: "category",
  //     label: "Tutorial",
  //     items: ["tutorial-basics/create-a-document"],
  //   },
  // ],
  setupSidebar: [
    {
      type: "autogenerated",
      dirName: "setup",
    },
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
