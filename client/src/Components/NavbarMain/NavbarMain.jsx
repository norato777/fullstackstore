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
                href="/Monitors"
                style={{
                  color: "#ffc800",
                }}
              >
                Monitors
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/Keyboards"
                style={{
                  color: "#ffc800",
                }}
              >
                Keyboards
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/Mouses"
                style={{
                  color: "#ffc800",
                }}
              >
                Mouses
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/Processor"
                style={{
                  color: "#ffc800",
                }}
              >
                Processor
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/VGA"
                style={{
                  color: "#ffc800",
                }}
              >
                VGA
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/Mother"
                style={{
                  color: "#ffc800",
                }}
              >
                Mother
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/Memory"
                style={{
                  color: "#ffc800",
                }}
              >
                Memory
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/Fuente"
                style={{
                  color: "#ffc800",
                }}
              >
                Fuente
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/Disk"
                style={{
                  color: "#ffc800",
                }}
              >
                Disk
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/Gabinete"
                style={{
                  color: "#ffc800",
                }}
              >
                Gabinete
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/Headsets"
                style={{
                  color: "#ffc800",
                }}
              >
                Headsets
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/Laptops"
                style={{
                  color: "#ffc800",
                }}
              >
                Laptops
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
}
