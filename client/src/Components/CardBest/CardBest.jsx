import * as React from "react";
import Card from "react-bootstrap/Card";

export default function CardBest() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Somos tu mejor opcion</Card.Title>
        <Card.Text>* Mas de 40000 productos.</Card.Text>
        <Card.Text>* Compras y envios seguros.</Card.Text>
        <Card.Text>* Comparte y revisa opiniones.</Card.Text>
        <Card.Link href="#">Conocer más</Card.Link>
      </Card.Body>
    </Card>
  );
}
