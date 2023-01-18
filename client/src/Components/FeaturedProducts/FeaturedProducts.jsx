import React from "react";
import CardFeaturedProducts from "../CardFeaturedProducts/CardFeaturedProducts";
import { Container, Row } from "react-bootstrap";

export default function FeaturedProducts() {
  const num = 1;
  return (
    <>
      <Container sm-5 className="m-3">
        <h1 style={{ color: "#ffc800" }}>Productos Destacados</h1>
        <Row>
          <CardFeaturedProducts num={num + 7} />
          <CardFeaturedProducts num={num + 14} />
          <CardFeaturedProducts num={num + 21} />
          <CardFeaturedProducts num={num + 28} />
        </Row>
      </Container>
    </>
  );
}
