import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail } from "../../Redux/action";
import stl from "./CardFeaturedProducts.module.css";

export default function CardFeaturedProducts({ num }) {
  const dispatch = useDispatch()
  const Products = useSelector((state) => state.allProducts);
  const [oneProduct, setOneProduct] = useState(Products[num]);

  const handleClick = () => {
    dispatch(getDetail(oneProduct._id))
  }

  return (
    <>
      <div className={stl.container}>
        <Card style={{ width: "21rem" }}>
          <Card.Subtitle className="mb-2 text-muted">-7%</Card.Subtitle>
          <Link to={`/product/${oneProduct._id}`} onClick={handleClick}>
            <div className={stl.image}>
              <Card.Img variant="top" src={oneProduct.image} />
            </div>
          </Link>
          <Card.Body>
            <Card.Title className={stl.cardTitle}>{oneProduct.name}</Card.Title>
            <Card.Text>{oneProduct.description.slice(0, 100)}...</Card.Text>
            <Row>
              <Col>ID o SKU</Col>
              <Col>{oneProduct.price}</Col>
            </Row>
            <Row>
              <Col>
                <Button variant="primary">Añadir</Button>
              </Col>
              <Col>{oneProduct.price - oneProduct.price * 0.07}</Col>
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
      </div>
    </>
  );
}
