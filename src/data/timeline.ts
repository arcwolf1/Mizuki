import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData: TimelineItem[] = [
	{
		id: "new-blog",
		title: "基于Astro的个人博客",
		description:
			"使用Astro框架构建的个人博客网站，展示个人项目和学习经历。",
		type: "project",
		startDate: "2026-02-10",
		skills: ["Astro", "TypeScript", "Tailwind CSS", "Git"],
		organization: "我自己",
		icon: "material-symbols:news",
		color: "#059669",
		featured: true,
	},
	{
		id: "middle-school",
		title: "中学阶段",
		description: "我在学校的学习",
		type: "education",
		startDate: "2025-09-01",
		location: "Qinzhou",
		organization: "Qinzhou No1 Middle School",
		icon: "material-symbols:code",
		color: "#7C3AED",
		featured: true,
	},
];
