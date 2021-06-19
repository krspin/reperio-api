export default {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      minLength: 0,
      maxLength: 36,
      description: 'ID of the post.'
    },
    author: {
      type: 'string',
      minLength: 0,
      maxLength: 36,
      description: 'Author ID of the post creator.'
    },
    name: {
      type: 'string',
      minLength: 0,
      maxLength: 32,
      description: 'Name of the recipe.'
    },
    ingredients: {
      type: 'array',
      minItems: 1,
      maxItems: 50,
      uniqueItems: true,
      description: 'An array containing all the ingredients in the recipe.'
    },
    media: {
      type: 'string',
      description: 'Media file name. File will be stored on S3.'
    },
    instructions: {
      type: 'string',
      minLength: 0,
      maxLength: 1024,
      description: 'Instructions of the recipe.'
    },
    cost: {
      type: 'integer',
      minimum: 0,
      maximum: 2
    },
    time: {
      type: 'integer',
      minimum: 0,
      maximum: 5 * 24 * 60 //5 Days
    },
    difficulty: {
      type: 'integer',
      minimum: 0,
      maximum: 9
    }
  },
  required: [
    'id', 'author', 'name', 'ingredients', 'instructions', 'cost', 'time', 'difficulty'
  ]
} as const;
