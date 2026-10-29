export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
    {
      name: 'credentials',
      title: 'Credentials',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'additionalImages',
      title: 'Additional Photos',
      type: 'array',
      description: 'Extra training/lifestyle photos shown in the about section collage',
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
          ],
        },
      ],
    },
    {
      name: 'yearsExperience',
      title: 'Years Experience',
      type: 'number',
    },
  ],
}
