export default {
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title", // Automatically generates slug from the title
          maxLength: 96,
        },
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true, // Enables image hotspot for cropping
        },
      },
      {
        name: "desc",
        title: "Description",
        type: "string",
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [
          {
            type: "block",
          },
        ],
      },
      {
        name: "author",
        title: "Author",
        type: "reference",
        to: [{ type: "author" }], // Reference to the author schema
      },
    ],
  };
  