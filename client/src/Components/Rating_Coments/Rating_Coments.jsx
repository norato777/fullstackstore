//verificar si el usuario compro el producto para dejar un comentario y guargar comentario en la base de datos


import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRating, postRating } from "../../Redux/action";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";

export default function Rating_Coments({ id }) {
  const dispatch = useDispatch();
  const [coments, setComents] = useState({ _id: id });
  const coment = useSelector((state) => state.coments);
  const user = useSelector((state) => state.user);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    dispatch(getRating(id));
  }, [dispatch, id]);

  const handleComent = (e) => {
    setComents({ ...coments, coments: e.target.value });
  };

  const handleRating = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      if (coments.coments) {
        dispatch(postRating(coments));
        setSuccess("Comentario enviado");
        setTimeout(() => {
          setSuccess("");
        }, 2000);
      } else {
        setError("Debes escribir un comentario");
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    } else {
      setError("Debes iniciar sesion para dejar un comentario");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
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
        Comentarios
      </h5>
      <Row>
        <Col>
          {coment &&
            coment.map((coment) => {
              return (
                <Row>
                  <Col>
                    <Form.Text
                      style={{
                        color: "#ff3c00",
                        fontSize: "21px",
                      }}
                    >
                      {coment.coments}
                    </Form.Text>
                  </Col>
                </Row>
              );
            })}
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label
                style={{
                  color: "#ff3c00",
                }}
              >
                Deja tu comentario
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={handleComent}
                value={coments.coments}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label
                style={{
                  color: "#ff3c00",
                }}
              >
                Califica el producto
              </Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text
                    style={{
                      color: "#ff3c00",
                    }}
                  >
                    {rating}
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="range"
                  min="0"
                  max="5"
                  value={rating}
                  onChange={handleRating}
                  onMouseEnter={() => setHover(rating)}
                  onMouseLeave={() => setHover(null)}
                />
              </InputGroup>
              <div className="text-center">
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;
                  return (
                    <label>
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={handleRating}
                      />
                      <i
                        className="fas fa-star"
                        style={{
                          color: ratingValue <= (hover || rating) ? "#ff3c00" : "#e4e5e9",
                        }}
                      ></i>
                    </label>
                  );
                })}
              </div>
            </Form.Group>
            <Button
              style={{
                backgroundColor: "#ff3c00",
                border: "none",
              }}
              type="submit"
            >
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <p
            style={{
              color: "red",
            }}
          >
            {error}
          </p>
          <p
            style={{
              color: "green",
            }}
          >
            {success}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

