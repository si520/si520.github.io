import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Sier",
      description: "Learning to be a recorder of life and study",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "肆肆",
      description: "正在学会做生活的记录者",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
