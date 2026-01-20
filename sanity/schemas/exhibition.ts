export default {
  name: 'exhibition',
  title: 'Exhibition',
  type: 'document',
  fields: [
    {
      name: 'artist',
      title: 'Artist Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Exhibition Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'current',
      title: 'Current Exhibition',
      type: 'boolean',
      description: 'Is this the current exhibition? Only one should be marked current.',
      initialValue: false,
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'image',
      title: 'Exhibition Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'artist',
      subtitle: 'title',
      media: 'image',
      current: 'current',
    },
    prepare({ title, subtitle, media, current }: any) {
      return {
        title: current ? `★ ${title}` : title,
        subtitle,
        media,
      };
    },
  },
};
