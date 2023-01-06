import React from "react";
import Logo from "../../Image/TFSS.png";
import SearchBarMain from "../SearchBarMain/SearchBarMain";
import NavbarHeader from "../NavbarHeader/NavbarHeader";

export default function Header() {
  return (
    <>
      <img src={Logo} alt="logo" />
      <SearchBarMain />
      <NavbarHeader />
    </>
  );
}
