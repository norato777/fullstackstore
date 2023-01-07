import React from "react";
import stl from "./Promobar.module.css";
import { Link } from "react-router-dom";

export default function Promobar() {
  return (
    <Link to="/form">
      <div className={stl.container}>
        <h4>Crea un nuevo producto aqui!</h4>
      </div>
    </Link>
  );
}
