export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        {
            name: 'quote',
            title: 'Quote',
            type: 'string',
        },
        {
            name: 'authorName',
            title: 'Author Name',
            type: 'string',
        },
        {
            name: 'authorLocation',
            title: 'Author Location',
            type: 'string',
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'number',
        },
        {
            name: 'avatar',
            title: 'Avatar',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ]
}