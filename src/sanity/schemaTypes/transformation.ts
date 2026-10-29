export default {
  name: 'transformation',
  title: 'Transformation',
  type: 'document',
  fields: [
    {
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g. "12 weeks"',
    },
    {
      name: 'weightLost',
      title: 'Weight Lost / Gained',
      type: 'string',
      description: 'e.g. "-18kg fat" or "+6kg muscle"',
    },
    {
      name: 'beforeImage',
      title: 'Before Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'afterImage',
      title: 'After Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'quote',
      title: 'Client Quote',
      type: 'text',
    },
    {
      name: 'service',
      title: 'Service Used',
      type: 'string',
      description: 'e.g. "Competition Prep", "Nutrition Coaching"',
    },
  ],
}
