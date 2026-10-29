export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'image',
      title: 'Service Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Photo representing this service — e.g. stage photo for Competition Prep',
    },
    {
      name: 'price',
      title: 'Starting Price',
      type: 'string',
      description: 'e.g. "From $150/month" — leave blank to hide',
    },
  ],
}
