import React from "react";
import Nav from "react-bootstrap/Nav";
import stl from "./NavbarMain.module.css";

export default function NavbarHeader() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link className={stl.colors} href="/">
            Promociones
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={stl.colors} href="/">
            Nuevos productos
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={stl.colors} href="/">
            Hardware
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={stl.colors} href="/">
            Computadoras
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={stl.colors} href="/">
            Impresion y copiado
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={stl.colors} href="/">
            Audio y video
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={stl.colors} href="/">
            Energia
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={stl.colors} href="/">
            Punto de venta
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={stl.colors} href="/">
            Seguridad y vigilancia
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={stl.colors} href="/">
            Telecomunicaciones
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={stl.colors} href="/">
            Hogar
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={stl.colors} href="/">
            Software
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={stl.colors} href="/">
            Home office
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
