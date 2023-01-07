import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../Redux/action";

export default function CardFeaturedProducts({num}) {
  const Products = useSelector((state) => state.products);
  const [oneProduct, setOneProduct] = useState(Products[num])
  const dispatch = useDispatch()


  return (
    <Card style={{ width: "18rem" }}>
      <Card.Subtitle className="mb-2 text-muted">-7%</Card.Subtitle>
      <Card.Img variant="top" src={oneProduct.image} />
      <Card.Body>
        <Card.Title>{oneProduct.name}</Card.Title>
        <Card.Text>{oneProduct.description.slice(0,100)}...
        </Card.Text>
        <Row>
          <Col>ID o SKU</Col>
          <Col>{oneProduct.price}</Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary">Añadir</Button>
          </Col>
          <Col>{oneProduct.price - oneProduct.price*0.07}</Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>Costo de envio $10</Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>{oneProduct.quantity}</Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <Form>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Comparar`}
                  />
                </div>
              ))}
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
