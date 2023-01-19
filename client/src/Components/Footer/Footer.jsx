import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "rgb(33, 37, 41)",
          backdropFilter: "blur(5px)",
          border: "1px solid #fff",
          boxShadow: "0 0 7px #fff",
        }}
        expand="lg"
        className="mt-5"
      >
        <Navbar className="justify-content-center">
          <Nav>
            <Nav.Item>
              <Nav.Link
                href="/"
                style={{
                  color: "#ff3c00",
                }}
              >
                ¿Cómo comprar?
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
        <h5 style={{ color: "#ff3c00" }}>2023 The Fullstack Store</h5>
      </Container>
    </>
  );
}
