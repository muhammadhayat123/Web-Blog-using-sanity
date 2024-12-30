import React from "react";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image"; // Adjust the path if necessary
import Link from "next/link";

// Define the props type
interface BlogArticleProps {
  params: {
    slug: string;
  };
}

interface BlogData {
  currentslug: string;
  title: string;
  content: any;
  image: any;
}

// Function to fetch data from Sanity based on the slug
async function getData(slug: string): Promise<BlogData | null> {
  const query = `*[_type == "blog" && slug.current == $slug]{
    "currentslug": slug.current,
    title,
    content,
    image
  }[0]`;

  const data = await client.fetch(query, { slug });
  return data;
}

export default async function BlogArticle({ params }: BlogArticleProps) {
  // Ensure params are awaited
  if (!params?.slug) {
    throw new Error("Slug not found in params.");
  }

  // Fetch the data based on the slug
  const data = await getData(params.slug);

  if (!data) {
    return (
      <div className="mt-6 text-center">
        <p className="text-lg text-red-600">Blog article not found.</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      {/* Display the title of the blog */}
      <h1>
        <Link href="/">
          <span className="block text-base text-center text-primary font-bold tracking-wider uppercase">
            Hayat Blog
          </span>
        </Link>
        <span className="mt-2 text-2xl block text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      {/* Display the image if available */}
      {data.image && (
        <div className="flex justify-center items-center mt-10">
          <Image
            src={urlFor(data.image).url()}
            width={500}
            height={500}
            alt={data.title || "Blog Image"}
            priority
            className="rounded-lg transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-lg"
          />
        </div>
      )}

      {/* Render the blog content */}
      <div className="mt-16 prose prose-blue prose-xl dark:prose-invert prose-headings:underline prose-li:marker:text-primary text-yellow-800 px-20">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
