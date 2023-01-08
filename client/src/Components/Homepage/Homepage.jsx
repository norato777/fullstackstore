import React from "react";
import Promobar from "../Promobar/Promobar";
import Header from "../Header/Header";
import NavbarMain from "../NavbarMain/NavbarMain";
import PromoArea from "../PromoArea/PromoArea";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import OurBrands from "../OurBrands/OurBrands";
import FeaturedCategories from "../FeaturedCategories/FeaturedCategories";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../Redux/action";
import stl from "./Homepage.module.css";

export default function Homepage() {
  const Products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    !Products.length && dispatch(getProducts());
  }, [dispatch, Products]);

  return (
    <>
      {!Products.length ? (
        <h1>Cargando productos</h1>
      ) : (
        <>
          <div className={stl.container}>
            <Promobar />
            <Header />
            <NavbarMain />
            <PromoArea />
            <FeaturedProducts />
            <OurBrands />
            <FeaturedCategories />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
