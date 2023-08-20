import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "m7d3vsge",
    dataset: "production",
    apiVersion: "2023-08-20",
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug" : slug.current,
      "image" : image.asset->url,
      url,
      content
    }`
  );
}
