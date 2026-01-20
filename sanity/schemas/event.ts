export default {
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Event Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'time',
      title: 'Time',
      type: 'string',
      description: 'e.g. "7pm" or "6pm–9pm"',
    },
  ],
  preview: {
    select: {
      title: 'name',
      date: 'date',
    },
    prepare({ title, date }: any) {
      return {
        title,
        subtitle: date,
      };
    },
  },
  orderings: [
    {
      title: 'Date',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
};
