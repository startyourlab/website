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
            'configuration/lab-members',
            'configuration/lab-directors',
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
          label: 'Git Started',
          items: [
            'tutorials/your-first-commit',
          ],
        }
      ],
    },
    {
      type: 'link',
      label: 'Templates',
      href: 'https://github.com/startyourlab',
    },
    'contributing',
  ],
};
