import imagen from "../../public/img/nosotros.jpg";
import styles from "../styles/nosotros.css";

export function meta() {
  return {
    title: "GuitarLA - Nosotos",
  };
}

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "preload",
      gref: imagen,
      as: "image",
    },
  ];
}

const Nosotros = () => {
  return (
    <main className="contenedor  nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus
            lorem, eleifend ornare tempus ut, luctus vitae odio. Etiam a nibh
            molestie, maximus arcu quis, facilisis justo. Integer non dolor
            libero. Morbi ut porta dolor. In eu bibendum enim. Quisque id mollis
            ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam laoreet est consequat metus ultricies sollicitudin.
            Vestibulum semper neque est, feugiat pellentesque nunc convallis
            quis. Phasellus nec orci non dolor molestie sodales. Aenean laoreet
            molestie turpis id semper. Praesent hendrerit ligula id dolor
            fermentum imperdiet. Nullam sit amet sem rutrum, viverra tellus in,
            accumsan massa. Mauris tincidunt velit eu ex pretium efficitur.
          </p>
          <p>
            Suspendisse sed ultricies turpis, quis euismod ipsum. Duis placerat
            quam augue. Aliquam libero metus, rhoncus laoreet varius ut, mollis
            ac quam. Sed euismod turpis purus, vitae iaculis ipsum ultricies et.
            Donec eros mauris, volutpat at est quis, vehicula sagittis turpis.
            Quisque sed est a ante convallis semper eu vel dui. Nunc luctus in
            ante vel dignissim. Praesent rutrum aliquam erat quis sollicitudin.
            Nulla ac eros nec ante varius tristique. Nulla eget blandit turpis,
            ac sollicitudin augue.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
