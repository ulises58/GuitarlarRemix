import Guitarra from "~/components/guitarra";
import { getGuitarras } from "~/models/guitarras.server";
import { useLoaderData } from "@remix-run/react";
import styles from "~/styles/guitarras.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
}

const Tienda = () => {
  const guitarras = useLoaderData();
  console.log(guitarras);
  return (
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
  );
};

export default Tienda;
