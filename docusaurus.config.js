/** @type {import('@docusaurus/types').DocusaurusConfig} */
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
          to: 'about/',
          label: 'About',
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
          ],
        },
        {
          title: 'Tools',
          items: [
            {
              label: 'GitHub',
              to: 'https://github.com/',
            },
            {
              label: 'Slack',
              to: 'https://slack.com/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            /*{
              label: 'Slack',
              href: 'https://stackoverflow.com/questions/tagged/startyourlab',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/startyourlab',
            },*/
            {
              label: 'Twitter',
              href: 'https://twitter.com/startyourlab',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/startyourlab',
            },
            {
              label: 'Support',
              to: 'docs/support',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'About',
              to: 'about',
            },
            {
              label: 'Blog',
              to: 'blog',
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
      copyright: `Copyright © ${new Date().getFullYear()} Start Your Lab. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/startyourlab/website/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/startyourlab/website/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Sen|Source+Code+Pro',
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
  ],
};
