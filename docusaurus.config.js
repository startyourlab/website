/** @type {import('@docusaurus/types').DocusaurusConfig} */

const baseUrl = process.env.BASE_URL || '/';

module.exports = {
  title: 'Start Your Lab',
  tagline: 'Start Your Lab helps researchers learn how to work together effectively, reliably, and efficiently.',
  url: 'https://www.startyourlab.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'startyourlab', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-192914800-2',
      anonymizeIP: true,
    },
    announcementBar: {
      id: 'coming_soon', // Any value that will identify this message.
      content:
        'We are currently building our site. All content should be considered experimental for now.',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
    },
    image: 'img/og-image-large.png',
    navbar: {
      //title: 'Start Your Lab',
      logo: {
        alt: 'Start Your Lab Logo',
        src: 'img/logo.svg',
        srcDark: '/img/logo-dark.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          to: 'community/support',
          label: 'Community',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Setup',
              to: 'docs/github-accounts',
            },
          ],
        },
        {
          title: 'Tutorials',
          items: [
            {
              label: 'Git Goals',
              to: 'docs/tutorials/git-goals',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Help',
              to: 'community/support',
            },
            {
              label: 'Team',
              to: 'community/team',
            },
            {
              label: 'Resources',
              to: 'community/resources',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/startyourlab',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/startyourlab',
            },
            {
              label: 'Icons by Freepik',
              href: 'https://www.freepik.com',
            }
          ],
        },
      ],
      logo: {
        src: 'img/logo-dark.svg',
        alt: 'Start Your Lab Logo',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Start Your Lab. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/startyourlab/website/edit/production',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/startyourlab/website/edit/production',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Source+Code+Pro',
  ],
  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'plugin-sitemap-custom',
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
        editUrl:
          'https://github.com/startyourlab/website/edit/production',
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'img/startyourlab.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: `${baseUrl}manifest.json`,
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(76, 130, 169)',
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
            href: 'img/startyourlab.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/startyourlab.svg',
            color: 'rgb(78, 137, 232)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/startyourlab.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
};
