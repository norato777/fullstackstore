import React from "react";
import Nav from "react-bootstrap/Nav";
import stl from "./NavbarHeader.module.css";

export default function NavbarHeader() {
  return (
    <>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link className={stl.colors} href="/login">
            Ingresar
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={stl.colors} href="/favorites">
            Favoritos
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={stl.colors} href="/compare">
            Comparar
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={stl.colors} href="/about">
            Compañia
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
