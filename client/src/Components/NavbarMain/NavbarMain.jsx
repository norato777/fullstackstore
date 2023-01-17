import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function NavbarHeader() {
  return (
    <>
      <Container className="mt-3 ">
        <Navbar
          style={{
            backgroundColor: "rgba(33, 37, 41,0.5)",
            backdropFilter: "blur(5px)",
            border: "1px solid #fff",
            boxShadow: "0 0 7px #fff",
          }}
          expand="lg"
          className="rounded-4 justify-content-center"
        >
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link
                href="/favorites"
                style={{
                  color: "#ff3c00",
                }}
              >
                link 1
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/favorites"
                style={{
                  color: "#ff3c00",
                }}
              >
                link 2
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
}
