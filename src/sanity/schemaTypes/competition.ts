export default {
  name: 'competition',
  title: 'Competition',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
    },
    {
      name: 'competitionName',
      title: 'Competition Name',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'division',
      title: 'Division',
      type: 'string',
    },
    {
      name: 'placement',
      title: 'Placement',
      type: 'string',
    },
    {
      name: 'photo',
      title: 'Competition Photo',
      type: 'image',
      options: { hotspot: true },
      description: 'On-stage or trophy photo from this competition',
    },
  ],
}
