// Revamped Docusaurus config with modern premium GREEN UI theme setup
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'Reimagining Robotics Education with Next-Gen UI/UX',
  favicon: 'img/favicon.ico',

  url: 'https://physicalhumanoidaitextbook.vercel.app',
  baseUrl: '/',

  organizationName: 'subhankaladi',
  projectName: 'physical-ai-humanoid-robotics-textbook',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/ph-ai-logo.png',

    /* ================================
       PREMIUM GREEN NAVBAR
    ================================= */
    navbar: {
      title: 'Physical AI & Humanoid Robotics Textbook',
      logo: {
        alt: 'PH-AI Logo',
        src: 'img/ph-ai-logo.png',
        srcDark: 'img/ph-ai-logo-dark.png',
      },
      style: 'dark',

      // Modern deep-green background
      hideOnScroll: true,
      className: 'navbar--green-theme',

      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '📘 Textbook',
        },
        {
          href: 'https://github.com/FareedNathani',
          label: '⭐ GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },

    /* ================================
       PREMIUM GREEN FOOTER
       (Glassmorphism + Deep Green)
    ================================= */
    footer: {
      style: 'dark',
      className: 'footer--green-glass',

      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Introduction', to: '/docs/introduction/intro' },
          ],
        },
        {
          title: 'Social Profiles',
          items: [
            { label: 'GitHub', href: 'https://github.com/FareedNathani' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fareed-nathani-30180a324/' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub Repo', href: 'https://github.com/FareedNathani' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} 
      Physical AI & Humanoid Robotics Textbook — Designed by Fareed Nathani.`,
    },

    /* ================================
       GREEN-FRIENDLY CODE THEMES
    ================================= */
    prism: {
      theme: prismThemes.vsDark,     // works well with green UI
      darkTheme: prismThemes.oceanicNext, // green-blue premium theme
      magicComments: [
        {
          className: 'theme-code-block-highlight',
          line: 'highlight-next-line',
        },
      ],
    },

    /* ================================
       UI ENHANCEMENTS
    ================================= */
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  }),
};

export default config;
