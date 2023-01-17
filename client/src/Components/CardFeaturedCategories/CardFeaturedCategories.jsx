import Card from "react-bootstrap/Card";
import stl from "./CardFeaturedCategories.module.css";
import Container from "react-bootstrap/esm/Container";

//CardFeaturedCategories es una card que se usa en la pagina principal linki al detalle del producto card title tarjetas de video card img src="./image/tdv(1).webp"

export default function CardFeaturedCategories() {
  return (
    <Container>
      <Card style={{ width: "14rem" }} className={stl.card}>
        <img
          className={stl.img}
          variant="top"
          src="./image/carcasas.png"
          alt="imagenes"
        />

        <h3 className={stl.title}>Carcasas</h3>
      </Card>
    </Container>
  );
}
