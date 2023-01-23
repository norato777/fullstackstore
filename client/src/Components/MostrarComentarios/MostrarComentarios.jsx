//tomar comentarios de la base de datos y mostrarlos en el componente MostrarComentarios por cada producto por id

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRating } from "../../Redux/action";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";

export default function MostrarComentarios({ id }) {
  const dispatch = useDispatch();
  const [coments, setComents] = useState({ _id: id });
  const coment = useSelector((state) => state.coments);
  useEffect(() => {
    dispatch(getRating(id));
  }, [dispatch, id]);
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
    </Container>
  );
}

