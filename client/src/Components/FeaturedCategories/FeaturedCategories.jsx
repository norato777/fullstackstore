import React from "react";
import CardFeaturedCategories from "../CardFeaturedCategories/CardFeaturedCategories";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function FeaturedCategories() {
  return (
    <>
      <h1 style={{ color: "#ffc800" }}>Categorias destacadas</h1>
      <Container expand="lg" className="m-3">
        <Row>
          <Col>
            <Link>
              <CardFeaturedCategories />
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}
