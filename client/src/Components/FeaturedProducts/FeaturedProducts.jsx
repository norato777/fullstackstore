import React from "react";
import CardFeaturedProductAlt from "../CardFeaturedProducts/CardFeaturesProductAlt";
import s from "./FeaturedProducts.module.css"
export default function FeaturedProducts() {
  const num = 1;

  return (
    <div className={s.cards}>
          <CardFeaturedProductAlt num={num + 5} />
          <CardFeaturedProductAlt num={num + 12} />
          <CardFeaturedProductAlt num={num + 16} />
          <CardFeaturedProductAlt num={num + 22} />
          <CardFeaturedProductAlt num={num + 32} />
   
    </div>
  );
}
