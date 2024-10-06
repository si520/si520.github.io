import { navbar } from "vuepress-theme-hope";

export default navbar([
	{
		text: "日常记录",
		icon: "/fun.png",
		link: "/Fun/",
	},
	{
		text: "英语学习",
		icon: "/英语.png",
		link: "/English/",
	},
	{
		text: "机器学习",
		icon: "/人工智能.png",
		link: "/ML/",
	},
	{
		text: "关于博主",
		icon: "/博主.png",
		link: 'intro.md',
	},
]);