import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import s from "./CardFeaturedCategories.module.css"
//CardFeaturedCategories es una card que se usa en la pagina principal linki al detalle del producto card title tarjetas de video card img src="./image/tdv(1).webp"

export default function CardFeaturedCategories() {
  return (
    <div className={s.container}>
      <div className={s.card}>
        <img className={s.img} src="./image/tdv(1).webp"/>
        <h3 className={s.title}>Targetas graficas</h3>
      </div>    
    </div>
  );
}


