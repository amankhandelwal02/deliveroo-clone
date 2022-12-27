export default {
    name: "featured",
    title: "Featured Menu",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Featured Category Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "description",
            title: "Featured Category Description",
            type: "string",
            validation: (Rule) => Rule.required(),
        }, {
            name: "resturants",
            title: "Featured Resturants",
            type: "array",
            of: [{ type: "reference", to: [{ type: "resturant" }] }],
        }
    ]
}