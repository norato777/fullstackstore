import React from "react";
import Nav from "react-bootstrap/Nav";

export default function NavbarHeader() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Promociones</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Nuevos productos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Hardware</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Computadoras</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Impresion y copiad</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Audio y video</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Energia</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Punto de venta</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Seguridad y vigilancia</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Telecomunicaciones</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Hogar</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Software</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Home office</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
