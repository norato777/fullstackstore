import React from "react";
import { Link } from "react-router-dom";

export default function NavbarHeader() {
  return (
    <>
      <Link to="/login">Ingresar</Link>
      <Link to="/favorites">Favoritos</Link>
      <Link to="/compare">Comparar</Link>
      <Link to="/about">Compañia</Link>
    </>
  );
}
