import { getPosts } from "~/models/posts.server";
import { useLoaderData } from "@remix-run/react";
import ListadoPosts from "~/components/listado-posts";

export function meta() {
  return {
    title: "GuitarLA - Nuesto Blog",
    description: "GuitarLA, Blog de musica y venta de guitarras",
  };
}

export async function loader() {
  const posts = await getPosts();
  console.log(posts);
  return posts.data;
}

const Blog = () => {
  const posts = useLoaderData();
  return (

      <ListadoPosts posts={posts} />
  
  );
};

export default Blog;
