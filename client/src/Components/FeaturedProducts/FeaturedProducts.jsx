import React from "react";
import CardFeaturedProducts from "../CardFeaturedProducts/CardFeaturedProducts";
import stl from "./FeaturedProducts.module.css";
import Container from "react-bootstrap/Container";

export default function FeaturedProducts() {
  const num = 1;
  return (
    <>
      <Container sm-5>
        <h1>Productos destacados</h1>
        <div className={stl.container}>
          <CardFeaturedProducts num={num + 7} />
          <CardFeaturedProducts num={num + 14} />
          <CardFeaturedProducts num={num + 35} />
          <CardFeaturedProducts num={num + 63} />
        </div>
      </Container>
    </>
  );
}
