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
      description: 'Is this the current exhibition?',
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
      options: { hotspot: true },
    },
  ],
};
