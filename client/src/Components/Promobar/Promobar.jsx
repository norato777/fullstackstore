import React from "react";
import { Container, Card, Figure, Navbar, Row, Image } from "react-bootstrap";

export default function Promobar() {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "#6465667f",
          backdropFilter: "blur(5px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow:
            "inset -5px -5px 15px rgba(255,255,255,0.1),inset -5px -5px 15px rgba(0,0,0,0.35)",
          padding: "7px",
        }}
      >
        <div style={{ marginRight: "7px" }}>
          <h1>$10Usd </h1>
        </div>
        <div style={{ marginBottom: "-15px", color: "var(--brd-yellow)" }}>
          <h5>de descuento para tu primera compra!</h5>
        </div>
      </Container>
    </>
  );
}
