import { getPosts } from "~/models/posts.server";
import { useLoaderData } from "@remix-run/react";
import ListadoPosts from "~/components/listado-posts";
import styles from "~/styles/blog.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

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
    <div className="contenedor">
      <ListadoPosts posts={posts} />
    </div>
  );
};

export default Blog;
