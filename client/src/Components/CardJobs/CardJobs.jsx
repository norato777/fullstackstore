import * as React from "react";
import Card from "react-bootstrap/Card";

export default function CardJobs() {
  return (
    <Card style={{ width: "18rem", height: "210px" }}>
      <Card.Body>
        <Card.Title>Buscamos tu talento!</Card.Title>
        <Card.Text>Unete al equipo</Card.Text>

        <Card.Link href="#">Ver vacantes</Card.Link>
      </Card.Body>
    </Card>
  );
}
