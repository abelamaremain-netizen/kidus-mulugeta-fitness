export default {
  name: 'mealPlan',
  title: 'Meal Plan',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Plan Name',
      type: 'string',
      description: 'e.g. "Shred & Cut Plan"',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g. "$49" or "Contact for pricing"',
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'string',
      description: 'One line about what this plan includes',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    },
  ],
}
