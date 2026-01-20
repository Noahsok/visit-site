export default {
  name: 'barPage',
  title: 'Bar Page',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
      initialValue: 'The Bar',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Use double line breaks to separate paragraphs',
    },
    {
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.max(5),
      description: 'Add up to 5 photos. First one will be wide, rest will be in a grid.',
    },
    {
      name: 'hours',
      title: 'Hours',
      type: 'text',
      rows: 2,
      initialValue: 'Thu–Sat\n6pm–late',
    },
    {
      name: 'accessNote',
      title: 'Access Note',
      type: 'string',
      initialValue: 'Members & guests only',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Bar Page',
      };
    },
  },
};
