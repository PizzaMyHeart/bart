// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const url = 'https://bart.tachy.org'; // change this depending on deployment or production
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bart',
  tagline: 'Guidelines at the point of care',
  url: url,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'PizzaMyHeart', // Usually your GitHub org/user name.
  projectName: 'bart', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/PizzaMyHeart/bart',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/PizzaMyHeart/bart',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Bart',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo-light-mode.svg',
          srcDark: 'img/logo-dark-mode.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'howto',
            position: 'left',
            label: 'Guidelines',
          },
          {to: url + '/admin', label: 'Authors', position:'left'},
          {
            href: 'https://github.com/PizzaMyHeart/bart',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guidelines',
            items: [
              {
                label: 'How to Use',
                to: '/docs/howto',
              },
            ],
          },
          {
            title: 'Useful Links',
            items: [
              {
                label: 'Barts Microguide',
                href: 'https://viewer.microguide.global/BARTS/ADULT',
              },
              {
                label: 'MDCalc',
                href: 'https://www.mdcalc.com/',
              },
            ],
          }
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6
      }
    }),

  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexDocs: true
      }
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString'
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png'
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json'
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(214, 203, 79)'
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/icons-192.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/logo-dark-mode.svg',
            color: 'rgb(0, 0, 0)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/icons-192.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ]
      }
    ]
  ]
};

module.exports = config;
