import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Image, Row, Col, Button } from "react-bootstrap";
import SearchBarMain from "../SearchBarMain/SearchBarMain";
import NavbarHeader from "../NavbarHeader/NavbarHeader";
import LightMode from "../LightMode/LightMode";
import s from "./HeaderAlt.module.css";
import { getProducts } from "../../Redux/action";
import { useDispatch } from "react-redux";
import SearchBarAlt from "../SearchBarMain/SerchBarAlt";
import NavbarHeaderAlt from "../NavbarHeader/NavbarHeaderAlt";

export default function HeaderAlt() {
  const navigate = useNavigate();

  const handleCart = () => {
    navigate("/cart");
  };
  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
    <div className={s.contenedor}>
      <img src="/Full_Stack__2_-removebg-preview.png" onClick={handleHome} className={s.logo}/>
      <SearchBarAlt />
   <div className={s.contSerch}> 

      <NavbarHeaderAlt />

    <div className={s.line} onClick={handleCart}></div>

      <button  onClick={handleCart} className={s.buton}>
        <i className="bi bi-cart-check-fill"></i>
      </button>
    <div className={s.line} onClick={handleCart}></div>

      <LightMode />
 </div> 
    </div>
    </>
  );
}
