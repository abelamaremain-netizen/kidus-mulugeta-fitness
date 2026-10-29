export default {
    name: 'hero',
    title: 'Hero',
    type: 'document',
    fields: [
        {
            name: 'tagline',
            title: 'Tagline',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'competitionWins',
            title: 'Competition Wins',
            type: 'number'
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
        }
    ]
}