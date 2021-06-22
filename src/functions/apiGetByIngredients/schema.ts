export default {
  type: 'object',
  properties: {
    quantity: {
      type: 'integer',
      minimum: 1,
      maximum: 50
    },
    ingredients: {
      type: 'array',
      minItems: 1,
      uniqueItems: true,
      description: 'An array containing ingredients'
    }
  },
  required: [
    'ingredients', 'quantity'
  ]
} as const;
