import React, { useState } from "react";
import { Container, Form, InputGroup, Button } from "react-bootstrap";
import searchBarName from "../../Redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SearchBarMain() {
  const dispatch = useDispatch();
  const [buscados, setBuscados] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setBuscados(e.target.value);
    // console.log(buscados)

    // console.log(Filtrados)
  };
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(searchBarName(buscados));
    navigate("/products");
  };

  return (
    <>
      <Container>
        <Form>
          <InputGroup className="mb-3">
            <Form.Control
              onChange={handleChange}
              placeholder="¿Que estas buscando hoy?"
              style={{
                border: "1px solid #ff3c00",
              }}
            />
            <Button
              variant="outline-warning"
              onClick={handleClick}
              style={{ border: "1px solid #ff3c00", color: "#ff3c00" }}
            >
              <i className="bi bi-search "></i>
            </Button>
          </InputGroup>
        </Form>
      </Container>
    </>
  );
}
