import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { putCalificationRating } from "../../Redux/action";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";

export default function RatingComents({ id }) {
  const dispatch = useDispatch();

  const [rating, setRating] = useState({ _id: id });

  const handleChangeRating = (e) => {
    setRating({
      ...rating,
      calification: e.target.value,
    });
    console.log(rating);
  };
  const handleComents = (e) => {
    setRating({
      ...rating,
      coments: e.target.value,
    });
    console.log(rating);
  };
  const handleClick = (e) => {
    dispatch(putCalificationRating(rating));
    console.log(rating, id);
  };
  return (
    <Container
      style={{
        backgroundColor: "rgba(33, 37, 41,0.5)",
        backdropFilter: "blur(5px)",
        border: "1px solid #fff",
        boxShadow: "0 0 7px #fff",
      }}
      expand="lg"
      className="rounded-4"
    >
      <h5
        style={{
          color: "#ff3c00",
        }}
        className="mt-3"
      >
        Califica este producto
      </h5>
      <Row className="justify-content-md-center">
        <Col>
          <Form.Check type="radio" value="1" onChange={handleChangeRating} />
          <Form.Text
            style={{
              color: "#ff3c00",
              fontSize: "21px",
            }}
          >
            1
          </Form.Text>
        </Col>
        <Col>
          <Form.Check type="radio" value="2" onChange={handleChangeRating} />
          <Form.Text
            style={{
              color: "#ff3c00",
              fontSize: "21px",
            }}
          >
            2
          </Form.Text>
        </Col>
        <Col>
          <Form.Check type="radio" value="3" onChange={handleChangeRating} />
          <Form.Text
            style={{
              color: "#ff3c00",
              fontSize: "21px",
            }}
          >
            3
          </Form.Text>
        </Col>
        <Col>
          <Form.Check type="radio" value="4" onChange={handleChangeRating} />
          <Form.Text
            style={{
              color: "#ff3c00",
              fontSize: "21px",
            }}
          >
            4
          </Form.Text>
        </Col>
        <Col>
          <Form.Check type="radio" value="5" onChange={handleChangeRating} />
          <Form.Text
            style={{
              color: "#ff3c00",
              fontSize: "21px",
            }}
          >
            5
          </Form.Text>
        </Col>
        <Col xs={8}>
          <InputGroup>
            <Form.Control
              placeholder="Deja tus comentarios"
              style={{
                border: "1px solid #ff3c00",
              }}
              onChange={handleComents}
            ></Form.Control>
          </InputGroup>
        </Col>
        <Col>
          <Button
            variant="outline-warning"
            style={{ border: "1px solid #ff3c00", color: "#ff3c00" }}
            onClick={handleClick}
          >
            Puntuar
          </Button>
        </Col>
      </Row>
    </Container>
  );
}