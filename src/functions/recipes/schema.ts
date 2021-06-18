export default {
  type: "object",
  properties: {
    ingredients: { type: 'object' }
  },
  required: ["ingredients"]
} as const;
