module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'introduction',
        {
          type: 'category',
          label: 'Useful Concepts',
          items: [
            'concepts/command-line',
            'concepts/text-editors',
          ],
        },
        {
          type: 'category',
          label: 'Tools Configuration',
          items: [
            'configuration/github-accounts',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'category',
          label: 'GitHub',
          items: [
            // 'tutorials/your-first-commit',
            'tutorials/git-goals',
          ],
        }
      ],
    },
    {
      type: 'link',
      label: 'Templates',
      href: 'https://github.com/startyourlab',
    },
  ],
};
