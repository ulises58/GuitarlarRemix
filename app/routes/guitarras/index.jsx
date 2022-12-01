import ListadoGuitarras from "~/components/listado-guitarras";
import { getGuitarras } from "~/models/guitarras.server";
import { useLoaderData} from "@remix-run/react";

export function meta() {
  return {
    title: "GuitarLA - Tienda de Guitarras",
    description: "GuitarraLA - Nuestra coleccion de guitarras",
  };
}

export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
}

const Tienda = () => {
  const guitarras = useLoaderData();
  console.log(guitarras);
  return (
      <ListadoGuitarras guitarras={guitarras} />
  );
};

export default Tienda;
