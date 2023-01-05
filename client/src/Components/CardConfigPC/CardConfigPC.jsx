import * as React from "react";
import Card from "react-bootstrap/Card";

export default function CardConfigPC() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Arma el PC Gamer de tus sueños con nuestro</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Configurador de PC
        </Card.Subtitle>
        <Card.Link href="#">Comenzar</Card.Link>
      </Card.Body>
    </Card>
  );
}
