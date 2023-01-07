import React from "react";
import Logo from "../../Image/TFSS.png";
import SearchBarMain from "../SearchBarMain/SearchBarMain";
import NavbarHeader from "../NavbarHeader/NavbarHeader";
import stl from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className={stl.container}>
        <div className={stl.containerLogo}>
          <Link to={"/"}>
            <img src={Logo} alt="logo" className={stl.logo} />
          </Link>
        </div>
        <div className={stl.containerBars}>
          <div className={stl.searchbar}>
            <SearchBarMain />
          </div>
          <div className={stl.userbar}>
            <NavbarHeader />
          </div>
        </div>
      </div>
    </>
  );
}
