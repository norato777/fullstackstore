import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <Container fluid>
        <Navbar
          style={{
            backgroundColor: "rgb(33, 37, 41)",
            backdropFilter: "blur(5px)",
            border: "1px solid #fff",
            boxShadow: "0 0 7px #fff",
          }}
          expand="lg"
        >
          <Nav className="justify-content-center">
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
        <div>2023 The Fullstack Store</div>
      </Container>
    </>
  );
}
