export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'hours',
      title: 'Hours',
      type: 'text',
      rows: 2,
      initialValue: 'Thu–Sat\n6pm–12am',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 2,
      initialValue: '124 Main Street\nNewburgh, NY 12550',
    },
    {
      name: 'galleryNote',
      title: 'Gallery Access Note',
      type: 'string',
      initialValue: 'Gallery open to the public',
    },
    {
      name: 'barNote',
      title: 'Bar Access Note',
      type: 'string',
      initialValue: 'Bar for members',
    },
    {
      name: 'instagramHandle',
      title: 'Instagram Handle',
      type: 'string',
      initialValue: '@visitnewburgh',
    },
    {
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
      initialValue: 'https://instagram.com/visitnewburgh',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      };
    },
  },
};
