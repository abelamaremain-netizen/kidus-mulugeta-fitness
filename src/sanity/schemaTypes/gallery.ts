export default {
  name: 'gallery',
  title: 'Photo Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Gallery Title',
      type: 'string',
      description: 'e.g. "Competition Photos", "Training", "Lifestyle"',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Competition', value: 'competition' },
          { title: 'Training', value: 'training' },
          { title: 'Lifestyle', value: 'lifestyle' },
          { title: 'Stage', value: 'stage' },
        ],
      },
    },
    {
      name: 'photos',
      title: 'Photos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
            {
              name: 'year',
              title: 'Year',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
