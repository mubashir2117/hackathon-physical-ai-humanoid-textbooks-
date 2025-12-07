// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Physical AI & Humanoid Robotics Textbook",
  tagline: "AI-native engineering for humanoids, robotics, ROS2 and VLA systems",
  favicon: "img/favicon.ico",

  url: "https://physicalhumanoidaitextbook.vercel.app",
  baseUrl: "/",

  organizationName: "mubashir2117",
  projectName: "physical-ai-book",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/mubashir2117/physical-ai-book/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/mubashir2117/physical-ai-book/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: "Physical AI Textbook",
      logo: {
        alt: "Physical AI Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "/docs/intro", label: "Docs", position: "left" },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/mubashir2117",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            { label: "Introduction", to: "/docs/intro" },
          ],
        },
        {
          title: "Community",
          items: [
            { 
              label: "GitHub", 
              href: "https://github.com/mubashir2117" 
            },
            { 
              label: "LinkedIn", 
              href: "https://www.linkedin.com/in/mubashir-javaid-175a6728b" 
            },
            { 
              label: "Instagram", 
              href: "https://www.instagram.com/mj_mubashir21/" 
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Physical AI Engineering — Built by Mubashir Javaid.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;