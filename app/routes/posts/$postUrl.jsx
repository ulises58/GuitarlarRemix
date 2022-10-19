import { getPost } from "~/models/posts.server";

export async function loader({ params }) {
  const { postUrl } = params;
  const post = await getPost(postUrl);
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrada",
    });
  }

  return post;
}

const Post = () => {
  return <div>$postUrl</div>;
};

export default Post;
