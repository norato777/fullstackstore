import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../CheckBox/CheckBox";
import { Link } from "react-router-dom";
import { getDetail } from "../../Redux/action";
import { Card, ListGroup, Button } from "react-bootstrap";

export default function CardFeaturedProducts({ num }) {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.allProducts);
  const [oneProduct, setOneProduct] = useState(Products[num]);

  const handleClick = () => {
    dispatch(getDetail(oneProduct._id));
  };

  return (
    <Card
      className="m-3"
      style={{
        width: "18rem",
        backgroundColor: "rgb(33, 37, 41)",
        backdropFilter: "blur(5px)",
        border: "1px solid #fff",
        boxShadow: "0 0 7px #fff",
      }}
    >
      <Link to={`/product/${oneProduct._id}`} onClick={handleClick}>
        <Card.Img
          variant="top"
          src={oneProduct.image}
          style={{
            objectFit: "contain",
            marginTop: "14px",
            width: "16rem",
            height: "16rem",
            border: "1px solid #fff",
            background: "#fff",
          }}
        />
      </Link>
      <Card.Body>
        <Card.Title
          style={{
            color: "#ffc800",
            textDecoration: "none",
            textWeight: "bold",
          }}
        >
          Descuento: %7
        </Card.Title>
        <Card.Text
          style={{
            color: "#ff3c00",
            textDecoration: "none",
            textWeight: "bold",
          }}
        >
          {oneProduct.name.slice(0, 30)}...
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item
          style={{
            backgroundColor: "rgb(33, 37, 41)",
            color: "#ff3c00",
            textAlign: "start",
          }}
        >
          $ regular: ${oneProduct.price}
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            backgroundColor: "rgb(33, 37, 41)",
            color: "#ffc800",
            fontSize: "17px",
            textAlign: "start",
          }}
        >
          $ con descuento: ${oneProduct.price - oneProduct.price * 0.07}
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            backgroundColor: "rgb(33, 37, 41)",
            color: "#ff3c00",
            textAlign: "start",
          }}
        >
          $ de envio: $500
        </ListGroup.Item>
        <ListGroup.Item
          style={{
            backgroundColor: "rgb(33, 37, 41)",
            color: "#ff3c00",
            textAlign: "start",
          }}
        >
          Disponibles: {oneProduct.quantity}
        </ListGroup.Item>
      </ListGroup>

      <Card.Body
        style={{
          color: "#ff3c00",
        }}
      >
        <Checkbox />
        <Button
          variant="outline-warning"
          style={{ border: "1px solid #ff3c00", color: "#ff3c00" }}
        >
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
}