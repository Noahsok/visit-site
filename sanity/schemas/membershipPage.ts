export default {
  name: 'membershipPage',
  title: 'Membership Page',
  type: 'document',
  fields: [
    {
      name: 'intro',
      title: 'Intro Paragraph',
      type: 'text',
      rows: 3,
    },
    {
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Section Title', type: 'string' },
            { name: 'content', title: 'Content', type: 'text', rows: 4 },
          ],
        },
      ],
    },
    {
      name: 'tiers',
      title: 'Membership Tiers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Tier Name', type: 'string' },
            { name: 'price', title: 'Price', type: 'string' },
            { name: 'description', title: 'Description', type: 'string' },
            { name: 'joinUrl', title: 'Join URL', type: 'url' },
          ],
        },
      ],
    },
  ],
};
