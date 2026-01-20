export default {
  name: 'membershipPage',
  title: 'Membership Page',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      initialValue: 'Membership',
    },
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
            {
              name: 'title',
              title: 'Section Title',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
              rows: 4,
              description: 'Use double line breaks to separate paragraphs',
            },
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
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
            {
              name: 'name',
              title: 'Tier Name',
              type: 'string',
            },
            {
              name: 'price',
              title: 'Price',
              type: 'string',
              description: 'e.g. "$100 / year"',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
            {
              name: 'joinUrl',
              title: 'Join URL',
              type: 'url',
              description: 'Link to Square or payment page',
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'price',
            },
          },
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Membership Page',
      };
    },
  },
};
