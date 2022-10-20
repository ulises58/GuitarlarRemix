import ListadoGuitarras from "~/components/listado-guitarras";
import { getGuitarras } from "~/models/guitarras.server";
import { useLoaderData } from "@remix-run/react";
import styles from "~/styles/guitarras.css";

export function meta() {
  return {
    title: "GuitarLA - Tienda de Guitarras",
    description: "GuitarraLA - Nuestra coleccion de guitarras",
  };
}

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
      <ListadoGuitarras guitarras={guitarras} />
    </main>
  );
};

export default Tienda;
