module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'introduction',
    },
    {
      type: 'category',
      label: 'Setup',
      items: [
        'setup/github-accounts',
        'setup/github-desktop',
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
      type: 'category',
      label: 'Useful Concepts',
      items: [
        'concepts/command-line',
        'concepts/text-editors',
      ],
    },
    {
      type: 'link',
      label: 'Templates',
      href: 'https://github.com/startyourlab',
    },
  ],
};
