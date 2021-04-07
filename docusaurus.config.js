/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Start Your Lab',
  tagline: 'The tagline of my site',
  url: 'https://startyourlab.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'startyourlab', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Start Your Lab',
      logo: {
        alt: 'Start Your Lab Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/startyourlab',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
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
            /*{
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/startyourlab',
            },*/
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
              label: 'GitHub',
              href: 'https://github.com/startyourlab',
            },
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
};
