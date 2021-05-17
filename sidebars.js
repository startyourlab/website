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
        {
          type: 'category',
          label: 'GitHub',
          items: [
            {
              type: 'doc',
              id: 'setup/github-accounts',
              label: '1. User Account',
            },
            {
              type: 'doc',
              id: 'setup/github-desktop',
              label: '2. Desktop Application',
            },
            {
              type: 'doc',
              id: 'setup/github-organizations',
              label: '3. Lab Organization',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        // 'tutorials/your-first-commit',
        'tutorials/git-goals',
      ],
    },
    {
      type: 'category',
      label: 'Workflows',
      items: [
        'workflows/project-management/issue-per-branch',
        'workflows/project-management/commit-per-idea',
        'workflows/project-management/fork-and-pull',
      ],
    },
    {
      type: 'category',
      label: 'Useful Concepts',
      items: ['concepts/command-line', 'concepts/text-editors'],
    },
    {
      type: 'doc',
      id: 'glossary',
    },
    {
      type: 'link',
      label: 'Templates',
      href: 'https://github.com/startyourlab',
    },
  ],
};
