import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Image, Row, Col, Button } from "react-bootstrap";
import SearchBarMain from "../SearchBarMain/SearchBarMain";
import NavbarHeader from "../NavbarHeader/NavbarHeader";

export default function Header() {
  const navigate = useNavigate();
  const handleCart = () => {
    navigate("/cart");
  };
  return (
    <>
      <Container className="mt-3">
        <Navbar
          style={{
            backgroundColor: "rgba(33, 37, 41,0.5)",
            backdropFilter: "blur(5px)",
            border: "1px solid #fff",
            boxShadow: "0 0 7px #fff",
          }}
          expand="lg"
          className="rounded-4"
        >
          <Container>
            <Col xs={2} className="p-3">
              <Navbar.Brand href="/">
                <Image src="./image/TFSS.png" fluid />
              </Navbar.Brand>
            </Col>
            <Col xs={8}>
              <Row className="mt-1">
                <SearchBarMain />
              </Row>
              <Row>
                <NavbarHeader />
              </Row>
            </Col>
            <Col xs={2}>
              <Button
                variant="outline-warning"
                onClick={handleCart}
                style={{
                  border: "1px solid #ff3c00",
                  color: "#ff3c00",
                  fontSize: "42px",
                  width: "84px",
                  height: "84px",
                }}
              >
                <i className="bi bi-cart2"></i>
              </Button>
            </Col>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}
