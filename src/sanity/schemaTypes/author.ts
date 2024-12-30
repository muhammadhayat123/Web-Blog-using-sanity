export default {
    name: "author",
    title: "Author",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true, // Enables image hotspot for cropping
        },
      },
    ],
  };
  