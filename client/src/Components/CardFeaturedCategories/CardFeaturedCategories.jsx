import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProductsCategory } from "../../Redux/action";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

//CardFeaturedCategories es una card que se usa en la pagina principal linki al detalle del producto card title tarjetas de video card img src="./image/tdv(1).webp"

export default function CardFeaturedCategories() {
  // const dispatch = useDispatch();
  // const Categories = useSelector((state) => state.allProducts);
  // const [category, setCategory] = useState(Products[num]);
  // const handleClick = () => {
  //   dispatch(filterProductsCategory(category._id));
  // };

  return (
    <Card
      className="m-3"
      style={{
        width: "18rem",
        backgroundColor: "rgb(33, 37, 41)",
        backdropFilter: "blur(5px)",
        border: "1px solid #fff",
        boxShadow: "0 0 7px #fff",
      }}
    >
      <Link to={`/product/`}>
        <Card.Img
          variant="top"
          src="*"
          style={{
            objectFit: "contain",
            padding: "3px",
          }}
        />
      </Link>
    </Card>
  );
}
