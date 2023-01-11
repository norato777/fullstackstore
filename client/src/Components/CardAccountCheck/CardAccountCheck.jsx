import * as React from "react";
import Card from "react-bootstrap/Card";
import "./CardAccountCheck.css";

//CardAccountCheck component titulo ¿Ya tienes cuenta? texto * Mas de 40000 productos. * Compras y envios seguros. * Comparte y revisa opiniones. link Registrate 

export default function CardAccountCheck() {
  return (
    <Card className="CardAccountCheck">
      <Card.Body>
        <Card.Title>¿Ya tienes cuenta?</Card.Title>
        <Card.Text>
          * Mas de 40000 productos. <br />
          * Compras y envios seguros. <br />
          * Comparte y revisa opiniones.
        </Card.Text>
        <Card.Link href="/register">Registrate</Card.Link>
      </Card.Body>
    </Card>
  );
}