import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function SearchBarMain() {
  return (
    <>
      <form>
        <InputGroup className="mb-3">
          <Form.Control placeholder="¿Que estas buscando hoy?" />
          <Button type="submit">Buscar</Button>
        </InputGroup>
      </form>
    </>
  );
}
