import * as React from "react";
import Card from "react-bootstrap/Card";

export default function CardAccountCheck() {
  return (
    <Card style={{ width: "18rem", height: "210px" }}>
      <Card.Body>
        <Card.Title>¿Ya tienes cuenta?</Card.Title>
        <Card.Text>* Mas de 40000 productos.</Card.Text>
        <Card.Text>* Compras y envios seguros.</Card.Text>
        <Card.Text>* Comparte y revisa opiniones.</Card.Text>
        <Card.Link href="#">Registrate</Card.Link>
      </Card.Body>
    </Card>
  );
}
