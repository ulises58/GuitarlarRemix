import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";
import { useLoaderData } from "@remix-run/react";
import Guitarra from "~/components/guitarra";
export function meta() {}

export function links() {}

export async function loader() {
  const [guitarras, posts] = await Promise.all([getGuitarras(), getPosts()]);

  return {
    guitarras: guitarras.data,
    posts: posts.data,
  };
}

const Index = () => {
  const { guitarras, posts } = useLoaderData();
  return (
    <>
      <main className="contenedor">
        <h2 className="heading">Nuestras Coleccion</h2>
        {guitarras?.length && (
          <div className="guitarras-grid">
            {guitarras.map((guitarra) => (
              <Guitarra guitarra={guitarra?.attributes} key={guitarra?.id} />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Index;
