export default {
  name: "resturant",
  title: "Resturant",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Resturant Name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "string",
      title: "Short Description",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Resturant Image",
    },
    {
      name: "lat",
      type: "number",
      title: "Resturant Latitude",
    },
    {
      name: "lng",
      type: "number",
      title: "Resturant Longitude",
    },
    {
      name: "address",
      type: "string",
      title: "Resturant Address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Resturant Rating",
      validation: (Rule) =>
        Rule.required().min(1).max(5).error("Rating must be between 1 and 5"),
    },
    {
      name: "type",
      validation: (Rule) => Rule.required(),
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
