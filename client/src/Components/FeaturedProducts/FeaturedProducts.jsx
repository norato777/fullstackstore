import React from "react";
import CardFeaturedProducts from "../CardFeaturedProducts/CardFeaturedProducts";
import { Container, Row } from "react-bootstrap";

export default function FeaturedProducts() {
  const num = 1;

  return (
    <>
      <Container className="mt-3">
        <div>

        <p /* style={{ color: "#fff" }} */      style={{
          // border: "var(--border)",
          color: "var(--text-color)",
          fontSize:"40px",
          borderRadius:"15px",
          backdropFilter: "blur(825px)",
        }}>Productos Destacados</p>

        </div>
        <Row>
          <CardFeaturedProducts num={num + 7} />
          <CardFeaturedProducts num={num + 14} />
          <CardFeaturedProducts num={num + 21} />
          <CardFeaturedProducts num={num + 28} />
          {/* <CardFeaturedProducts num={num + 35} />
          <CardFeaturedProducts num={num + 42} />
          <CardFeaturedProducts num={num + 49} />
          <CardFeaturedProducts num={num + 56} />
          <CardFeaturedProducts num={num + 63} />
          <CardFeaturedProducts num={num + 70} /> */}
        </Row>
      </Container>
    </>
  );
}
