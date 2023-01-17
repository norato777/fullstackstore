import React from "react";
import Card2 from "../CardFeaturedProducts/Card2";
import CardFeaturedProducts from "../CardFeaturedProducts/CardFeaturedProducts";
import Container from "react-bootstrap/Container";

export default function FeaturedProducts() {
  const num = 1;
  return (
    <>
      <Container sm-5 className="m-3">
        <h1 style={{ color: "#ffc800" }}>Productos Destacados</h1>
        <div>
          <Card2 />
        </div>
      </Container>
    </>
  );
}
