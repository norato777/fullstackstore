import React from "react";
import Promobar from "../Promobar/Promobar";
import Header from "../Header/Header";
import NavbarMain from "../NavbarMain/NavbarMain";
import CardBest from "../CardBest/CardBest";
import AccountCheck from "../AccountCheck/AccountCheck";
import Carousel from "../Carousel/Carousel";
import Paginado from "../Paginado/Paginado";

export default function Homepage() {
  return (
    <>
      <Promobar />
      <Paginado />
      <Header />
      <NavbarMain />
      <CardBest />
      <AccountCheck />
      <Carousel />
    </>
  );
}
