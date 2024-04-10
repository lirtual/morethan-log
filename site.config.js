const CONFIG = {
  // profile setting (required)
  profile: {
    name: "lirtual",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Back-end developer",
    bio: "Big things start small",
    email: "lirtual@outlook.com",
    linkedin: "",
    github: "lirtual",
    instagram: "",
  },
  projects: [
    {
      name: `Development Tools`,
      href: "https://tools.lirtual.cloudns.org/",
    },
    {
      name: `Virtual Mailbox`,
      href: "https://vmail.lirtual.cloudns.org",
    },
    {
      name: `Image Hosting`,
      href: "https://img.lirtual.cloudns.org",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Zeroverse",
    description: "Welcome to Zeroverse!",
  },

  // CONFIG configration (required)
  link: "https://lirtual.cloudns.org",
  since: 2024, // If leave this empty, current year will be used.
  lang: "zh-CN", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: true,
    config: {
      host: "https://cusdis.com",
      appid: "7db199c5-8b34-4640-bb55-0241d645a659", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
