import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "../CheckBox/CheckBox";
import { Link } from "react-router-dom";
import { getDetail } from "../../Redux/action";
import { Card, ListGroup } from "react-bootstrap";

export default function Card2({ num }) {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.allProducts);
  const [oneProduct, setOneProduct] = useState(Products[num]);

  const handleClick = () => {
    dispatch(getDetail(oneProduct._id));
  };

  return (
    <Card
      style={{
        width: "18rem",
        backgroundColor: "rgba(33, 37, 41,0.5)",
        backdropFilter: "blur(5px)",
        border: "1px solid #fff",
        boxShadow: "0 0 7px #fff",
      }}
    >
      {/* <Link to={`/product/${oneProduct._id}`} onClick={handleClick}>
        <Card.Img variant="top" src={oneProduct.image} />
      </Link> */}
      <Card.Body>
        <Card.Title>%7</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
