// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WIKI DE SISTEMAS OPERATIVOS',
  tagline: 'Enciclopedia academica de Sistemas Operativos',
  favicon: 'img/favicon.ico',

markdown: {
  mermaid: true,
},

themes: ['@docusaurus/theme-mermaid'],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
url: 'https://canu007.github.io',
baseUrl: '/wiki-sistemas-operativos/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
organizationName: 'Canu007',
projectName: 'wiki-sistemas-operativos',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
navbar: {
  title: 'Wiki de Sistemas Operativos I',

  items: [
    {
      to: '/',
      label: 'Inicio',
      position: 'left',
    },
    {
      to: '/#unidades',
      label: 'Unidades',
      position: 'left',
    },
    {
      type: 'doc',
      docId: 'unidad-1-introduccion/introduccion-sistemas-operativos',
      label: 'Documentación',
      position: 'left',
    },
  ],
},
footer: {
  style: 'dark',

  links: [
    {
      title: 'Wiki Académica',
      items: [
        {
          label: 'Inicio',
          to: '/',
        },
        {
          label: 'Unidad 1: Introducción',
          to: '/docs/unidad-1-introduccion/',
        },
        {
          label: 'Unidad 2: Procesos',
          to: '/docs/unidad-2-procesos/',
        },
      ],
    },
    {
      title: 'Proyecto',
      items: [
        {
          label: 'Contenido académico',
          to: '/#unidades',
        },
      ],
    },
  ],

  copyright: `© ${new Date().getFullYear()} Wiki de Sistemas Operativos I. Proyecto académico.`,
},
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
