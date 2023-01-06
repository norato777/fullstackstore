import React from "react";
import Nav from "react-bootstrap/Nav";

export default function NavbarHeader() {
  return (
    <>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/login">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/favorites">Favoritos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/compare">Comparar</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">Compañia</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
