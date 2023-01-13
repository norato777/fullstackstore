import React from "react";
import Logo from "../../Image/TFSS.png";
import SearchBarMain from "../SearchBarMain/SearchBarMain";
import NavbarHeader from "../NavbarHeader/NavbarHeader";
import stl from "./Header.module.css";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
=======
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
>>>>>>> 5c8224941f2615a094c88e2d77493c929a8a0fbb

export default function Header() {
  const navigate = useNavigate()
  const handleCart=()=>{
    navigate("/cart")
  }
  return (
    <>
      <Container fluid="xxl">
        <div className={stl.container}>
          <div className={stl.containerAux}>
            <div className={stl.containerLogo}>
              <Link to={"/"}>
                <img src={Logo} alt="logo" className={stl.logo} />
              </Link>
            </div>
            <div className={stl.containerBars}>
              <div className={stl.auxContainer}>
                <SearchBarMain />
              </div>
              <div className={stl.auxContainer}>
                <NavbarHeader />
              </div>
            </div>
            <div className={stl.containerShopCart}>
              <Link to={"/login"}>
                <img
                  src="./image/shopping-cart.svg"
                  alt="Carrito de compras"
                  className={stl.carrito}
                />
              </Link>
            </div>
<<<<<<< HEAD
          </div>
          <div className={stl.containerShopCart}>
            <button onClick={handleCart} className={stl.button}to={"/login"}>
            <i className="bi bi-cart-check "></i>
            </button>
=======
>>>>>>> 5c8224941f2615a094c88e2d77493c929a8a0fbb
          </div>
        </div>
      </Container>
    </>
  );
}
