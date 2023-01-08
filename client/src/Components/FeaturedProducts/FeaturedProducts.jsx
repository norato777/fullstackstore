import React from "react";
import CardFeaturedProducts from "../CardFeaturedProducts/CardFeaturedProducts";
import CardFeaturedProducts2 from "../CardFeaturedProducts/CardFeaturedProducts2";
import stl from "./FeaturedProducts.module.css";

export default function FeaturedProducts() {
  const num = 1;
  return (
    <>
      <h1>Productos destacados de hoy</h1>
      <div className={stl.container}>
        <CardFeaturedProducts num={num} />
        {/* <CardFeaturedProducts num={num + 14} />
        <CardFeaturedProducts num={num + 35} />
        <CardFeaturedProducts num={num + 63} />
        <CardFeaturedProducts num={num + 70} /> */}
        <CardFeaturedProducts2 />
      </div>
    </>
  );
}
