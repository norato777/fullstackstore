import React from "react";
import CardFeaturedCategories from "../CardFeaturedCategories/CardFeaturedCategories";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function FeaturedCategories() {
  return (
    <>
      <h1 style={{ color: "#ffc800" }}>Categorias destacadas</h1>
      <Container
        style={{
          backgroundColor: "rgba(173, 181, 189,0.5)",
          backdropFilter: "blur(5px)",
          border: "1px solid #fff",
          boxShadow: "0 0 7px #fff",
        }}
        expand="lg"
        className="rounded-4 m-3"
      >
        <Row>
          <Col>
            <Link>
              <Card.Img
                style={{ width: "10rem", border: "none" }}
                variant="top"
                src="./image/New Project.png"
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
