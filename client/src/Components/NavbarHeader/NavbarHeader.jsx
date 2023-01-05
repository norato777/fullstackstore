import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function NavbarHeader() {
  return (
    <>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button href="/login">Ingresar</Button>
        <Button href="/favorites">Favoritos</Button>
        <Button href="/compare">Comparar</Button>
        <Button href="/about">Compañia</Button>
      </ButtonGroup>
    </>
  );
}
