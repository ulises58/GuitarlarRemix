import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";

export async function loader({ params }) {
  const { guitarraUrl } = params;
  const guitarra = await getGuitarra(guitarraUrl);
  return guitarra;
}
const GuitarraUrl = () => {
  const guitarra = useLoaderData();
  console.log(guitarra);
  return <div>uitarraUrl</div>;
};

export default GuitarraUrl;
