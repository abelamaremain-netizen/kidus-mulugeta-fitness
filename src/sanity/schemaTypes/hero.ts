export default {
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    {
      name: 'heroTag',
      title: 'Hero Tag',
      type: 'string',
      description: 'e.g. "IFBB Pro · Ethiopia\'s Champion"',
    },
    {
      name: 'tagLine',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'competitionWins',
      title: 'Competition Wins',
      type: 'number',
    },
    {
      name: 'yearsPro',
      title: 'Years Pro',
      type: 'number',
    },
    {
      name: 'clientsCoached',
      title: 'Clients Coached',
      type: 'number',
    },
    {
      name: 'nationalTitles',
      title: 'National Titles',
      type: 'number',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}
