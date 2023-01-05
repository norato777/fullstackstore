import React from "react";
import Promobar from "../Promobar/Promobar";
import Header from "../Header/Header";
import NavbarMain from "../NavbarMain/NavbarMain";
import CardBest from "../CardBest/CardBest";
import AccountCheck from "../AccountCheck/AccountCheck";
import Carousel from "../Carousel/Carousel";

export default function Homepage() {
  return (
    <>
      <Promobar />
      <Header />
      <NavbarMain />
      <CardBest />
      <AccountCheck />
      <Carousel />
    </>
  );
}
