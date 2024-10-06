import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar/zh.js";
import sidebar from "./sidebar/zh.js";


export default hopeTheme({
  hostname: "https://si520.github.io/",

  author: {
    name: "Sier",
    email: "qiangz_csu@163.com",
  },
  
  favicon: '/logo.png',

  darkmode:'toggle',

  iconAssets: "//at.alicdn.com/t/c/font_4520209_e2woy6cyy4k.css",

  blog: {
    medias: {
      GitHub: "https://github.com/si520",
      Email:"qiangz_csu@163.com",
    },
  },

  logo: "/logo.png",

  repo: "https://si520.github.io/",

  docsDir: "src",

  locales: {
    "/": {
      // navbar
      navbar: navbar,

      // sidebar
      sidebar:sidebar,

      footer: "Sier's Blog",

      displayFooter: true,

      blog: {
        description: "I want to be a diligent, hard, fervent and enjoy life person.",
        intro: "/intro.html",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

  },


  plugins: {
    blog: true,
    searchPro: {
			indexContent: true,
			autoSuggestions: true,
		},
		comment: {
			provider: "Waline",
			serverURL: "https://sveltekit-1-btzrzhchs-ryanlee-ljxs-projects.vercel.app",
		},

    mdEnhance: {
      // katex:true,
      // alert:true,
      align: true,
      attrs: true,
      // codetabs: true,
      component: true,
      demo: true,
      // figure: true,
      // imgLazyload: true,
      // imgSize: true,
      include: true,
      mark: true,
      

      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      // tabs: true,
      tasklist: true,
      vPre: true,
      chart: true,
      echarts: true,

  },
}
});
