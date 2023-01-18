import React from "react";
import { Container, Navbar, Row, Image } from "react-bootstrap";

export default function Promobar() {
  return (
    <>
      <Container className="mt-3">
        <Navbar
          style={{
            backgroundColor: "rgba(173, 181, 189,0.5)",
            border: "1px solid #fff",
            boxShadow: "0 0 7px #fff",
          }}
          expand="lg"
          className="rounded-4"
        >
          <Row>
            <Image src="./image/promo1.png" style={{ objectFit: "cover" }} />
          </Row>
        </Navbar>
      </Container>
    </>
  );
}
