import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { putCalificationRating } from "../../Redux/action";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import swal from "sweetalert";

export default function RatingComents({props}) {
  

const pepe = props
  const dispatch = useDispatch();

  const [rating, setRating] = useState();
  useEffect(() => {
   if(props._id){
    setRating(pepe)
   }

  }, [props._id]);


  const handleChangeRating = (e) => {   
    setRating({
      ...rating,
      calification: parseInt(e.target.value),
    });
  };
  const handleComents = (e) => {
    setRating({
      ...rating,
      coments: e.target.value,
    });
  };
  const handleClick = (e) => {  
    if(rating.coments===""){
      swal("necesitas poner un comentario")
    }else
      dispatch(putCalificationRating(rating));
      setRating({})
      swal("Gracias por dejar tu valoracion")
  };
  return (
    <Container
      style={{
        backgroundColor: "var(--background-color)",
        backdropFilter: "blur(5px)",
        border: "var(--border)",
        boxShadow: "var(--box-shadow)",
      }}
      expand="lg"
      className="rounded-4 mb-xxl-5 mt-xxl-5 "
    >
      <h5
        style={{
          color: "var(--text-color)",
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
              color: "var(--text-color)",
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
              color: "var(--text-color)",
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
              color: "var(--text-color)",
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
              color: "var(--text-color)",
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
              color: "var(--text-color)",
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
                border: "var(--border)",
              }}
              onChange={handleComents}
            ></Form.Control>
          </InputGroup>
        </Col>
        <Col>
          <Button
            variant="outline-warning"
            style={{ border: "var(--border)", color: "var(--text-color)" }}
            onClick={handleClick}
          >
            Puntuar
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
