import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Row, Col, Image } from "react-bootstrap";

export default function Promobar() {
  return (
    <>
      <Container className="mt-3">
        <Navbar
          style={{
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
