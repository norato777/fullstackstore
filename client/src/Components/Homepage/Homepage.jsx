import React from "react";
import Promobar from "../Promobar/Promobar";
import Header from "../Header/Header";
import NavbarMain from "../NavbarMain/NavbarMain";
import CardBest from "../CardBest/CardBest";
import CardAccountCheck from "../CardAccountCheck/CardAccountCheck";
import Carousel from "../Carousel/Carousel";
import CardConfigPC from "../CardConfigPC/CardConfigPC";
import CardJobs from "../CardJobs/CardJobs";

export default function Homepage() {
  return (
    <>
      <Promobar />
      
      <Header />
      <NavbarMain />
      <CardBest />
      <CardAccountCheck />
      <Carousel />
      <CardConfigPC />
      <CardJobs />
    </>
  );
}
