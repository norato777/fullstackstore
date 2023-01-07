import React from "react";
import Promobar from "../Promobar/Promobar";
import Header from "../Header/Header";
import NavbarMain from "../NavbarMain/NavbarMain";
import CardBest from "../CardBest/CardBest";
import CardAccountCheck from "../CardAccountCheck/CardAccountCheck";
import Carousel from "../Carousel/Carousel";
import CardConfigPC from "../CardConfigPC/CardConfigPC";
import CardJobs from "../CardJobs/CardJobs";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import OurBrands from "../OurBrands/OurBrands";
import FeaturedCategories from "../FeaturedCategories/FeaturedCategories";
import Footer from "../Footer/Footer";
import stl from "./Homepage.module.css";

export default function Homepage() {
  return (
    <>
      <div className={stl.container}>
        <Promobar />
        <Header />
        <NavbarMain />
        <CardBest />
        <CardAccountCheck />
        <Carousel />
        <CardConfigPC />
        <CardJobs />
        <FeaturedProducts />
        <OurBrands />
        <FeaturedCategories />
        <Footer />
      </div>
    </>
  );
}
