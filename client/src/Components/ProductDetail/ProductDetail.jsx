import React from "react";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Paypal from "../Paypal/Papypal";
import RatingComents from "../RatingComents/RatingComents";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const ProductDetail = () => {
  const details = useSelector((state) => state.detail);
  const navigate = useNavigate();
  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <>
      <Header />

      {details && (
        <>
          <Container
            style={{
              backgroundColor: "var(--background-color)",
              backdropFilter: "blur(5px)",
              border: "var(--border)",
              boxShadow: "var(--box-shadow)",
            }}
            className="rounded-4 mt-5 mb-5 p-3"
          >
            <Row>
              <Col>
                <Image
                  fluid
                  rounded
                  src={details.image}
                  style={{
                    objectFit: "contain",
                    marginTop: "14px",
                    width: "16rem",
                    height: "16rem",
                    border: "var(--border)",
                    background: "#fff",
                  }}
                  className="m-3"
                />
              </Col>
              <Col xs={7}>
                <Row
                  className="mt-4"
                  style={{
                    color: "var(--text-color)",
                    fontSize: "21px",
                    height: "35px",
                    overflow: "auto",
                  }}
                >
                  {details.name}
                </Row>
                <Row
                  style={{
                    color: "#ffc800",
                    fontSize: "21px",
                    height: "35px",
                    overflow:"auto"
                  }}
                >
                  Marca: {details.brand}
                </Row>
                <Row
                  className="mb-3 p-4"
                  style={{
                    color: "var(--text-color)0",
                    textAlign: "justify",
                    height: "140px",
                    overflow: "auto",
                  }}
                >
                  {details.description}
                </Row>
                <Row
                  className="mt-1"
                  style={{
                    color: "#ffc800",
                    fontSize: "17px",
                    overflow:"auto"
                  }}
                >
                  Unidades disponibles: {details.quantity}
                </Row>
              </Col>

              <Col
                xs={2}
                className="mt-3"
                style={{
                  color: "#ffc800",
                  fontSize: "28px",
                  height: "49px",
                  textAlign: "end",
                }}
              >
                $ {details.price}
                <Button
                  className="mb-3"
                  variant="outline-warning"
                  onClick={handleCart}
                  style={{
                    border: "var(--border)",
                    color: "var(--text-color)",
                  }}
                >
                  Agregar al Carrito
                </Button>
                <Paypal price={details.price} />
              </Col>
            </Row>
          </Container>
          <div>
            <RatingComents id={details._id} />
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;