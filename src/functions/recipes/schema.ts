export default {
  type: "object",
  properties: {
    ingredients: {type: "string[]"},
  },
  required: ['ingredients']
} as const;
