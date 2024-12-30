import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { Card } from "@/components/ui/card"; // Import only the Card component

interface Author {
  title: string;
  imageUrl: string;
}

interface Blog {
  title: string;
  slug: string;
  imageUrl: string;
  desc: string;
  author: Author;
}

const Home = async () => {
  const query = `*[_type == "blog"]{
    title,
    "slug": slug.current,
    "imageUrl": image.asset->url,
    desc,
    author->{
      title,
      "imageUrl": image.asset->url
    }
  }`;

  const blogs: Blog[] = await client.fetch(query);

  return (
    <div className="container mx-auto px-4">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Card
          key={blog.slug}
          className="w-full max-w-sm mx-auto border rounded-lg shadow-md p-4 text-primary"
        >
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-xl font-semibold mt-4 line-clamp-2">{blog.title}</h2>
          <p className="text-yellow-800 mt-2 line-clamp-2">{blog.desc}</p>
          <div className="flex items-center mt-2">
            <img
              src={blog.author?.imageUrl}
              alt={blog.author?.title}
              className="w-10 h-10 rounded-full object-cover"
            />
            <p className="text-sm text-gray-500 ml-2">
              Author: {blog.author?.title || "Unknown"}
            </p>
          </div>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            <Link href={`/blog/${blog.slug}`}>Read More</Link>
          </button>
        </Card>
        
        ))}
      </div>
    </div>
  );
};

export default Home;
