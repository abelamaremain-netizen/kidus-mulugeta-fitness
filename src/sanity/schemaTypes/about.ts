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
      name: 'yearsExperience',
      title: 'Years Experience',
      type: 'number',
      options: {
        hotspot: true
      }
    },
  ],
}
