export default {
  name: 'barPage',
  title: 'Bar Page',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule: any) => Rule.max(5),
    },
    {
      name: 'hours',
      title: 'Hours',
      type: 'text',
      rows: 2,
    },
    {
      name: 'accessNote',
      title: 'Access Note',
      type: 'string',
    },
  ],
};
