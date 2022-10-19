import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";
import styles from "~/styles/guitarras.css";

export function meta({ data }) {
  return {
    title: `GuitarraLA -${data.data[0].attributes.nombre}`,
    descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`,
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

export async function loader({ params }) {
  const { guitarraUrl } = params;
  const guitarra = await getGuitarra(guitarraUrl);
  return guitarra;
}
const GuitarraUrl = () => {
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;
  return (
    <main className="contenedor guitarra">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra ${nombre}`}
      />
      <div className="contenedor">
        <h1>{nombre}</h1>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
      </div>
    </main>
  );
};

export default GuitarraUrl;
