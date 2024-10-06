import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
    lang: "zh-CN",
    title: "Sier",
    description: "正在学会做生活的记录者",

  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
