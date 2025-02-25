import { defineType } from 'sanity';

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Cars', value: 'cars' },
          { title: 'Dogs', value: 'dogs' },
          { title: 'Nature', value: 'nature' },
          { title: 'Sunsets', value: 'sunsets' },
          { title: 'Baking', value: 'baking' },
          { title: 'Lacrosse', value: 'lacrosse' },
        ],
      },
    },
    {
      name: 'tags',
      title: 'Tags (Car Owners, Details, etc.)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags', // 💡 Makes it a nice tag UI in Sanity Studio
      },
    },
  ],
});
