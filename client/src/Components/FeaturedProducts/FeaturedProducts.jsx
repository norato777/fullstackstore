import React from "react";
import CardFeaturedProducts from "../CardFeaturedProducts/CardFeaturedProducts";

export default function FeaturedProducts() {
  const num = 1;
  return (
    <>
      <div>Productos destacados de hoy</div>
      <CardFeaturedProducts num={num} />
      <CardFeaturedProducts num={num + 10} />
      <CardFeaturedProducts num={num + 72} />
      <CardFeaturedProducts num={num + 63} />
    </>
  );
}
