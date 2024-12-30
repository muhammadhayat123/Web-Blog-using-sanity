// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })



import { createClient } from "next-sanity";

// Load environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID; // Replace with your variable name
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = "2023-01-01"; // Set your preferred API version

if (!projectId || !dataset) {
  throw new Error("Missing Sanity configuration in .env file");
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages
});