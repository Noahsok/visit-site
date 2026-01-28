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
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 2,
    },
    {
      name: 'galleryNote',
      title: 'Gallery Access Note',
      type: 'string',
    },
    {
      name: 'barNote',
      title: 'Bar Access Note',
      type: 'string',
    },
  ],
};
