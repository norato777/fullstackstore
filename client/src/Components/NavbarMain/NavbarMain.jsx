import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function NavbarHeader() {
  return (
    <>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button href="/">Promociones</Button>
        <Button href="/">Nuevos productos</Button>
        <Button href="/">Hardware</Button>
        <Button href="/">Computadoras</Button>
        <Button href="/">Impresion y copiado</Button>
        <Button href="/">Audio y video</Button>
        <Button href="/">Energia</Button>
        <Button href="/">Punto de venta</Button>
        <Button href="/">Seguridad y vigilancia</Button>
        <Button href="/">Telecomunicacion</Button>
        <Button href="/">Hogar</Button>
        <Button href="/">Software</Button>
        <Button href="/">Home office</Button>
      </ButtonGroup>
    </>
  );
}
