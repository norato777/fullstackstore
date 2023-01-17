import React from "react";
import Logo from "../../Image/TFSS.png";
import SearchBarMain from "../SearchBarMain/SearchBarMain";
import NavbarHeader from "../NavbarHeader/NavbarHeader";
import stl from "./Header.module.css";
import { Link,useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { useDispatch } from "react-redux";
import { cleanFilter } from "../../Redux/action";

export default function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleCart=()=>{
    navigate("/cart")
  }
  const handleHome=()=>{
    dispatch(cleanFilter())
    navigate("/")
  }
  return (
    <>
      <Container fluid="xxl">
        <div className={stl.container}>
          <div className={stl.containerAux}>
            <div className={stl.containerLogo}>
              <button className={stl.buttonLogo}onClick={handleHome}>
                <img src={Logo} alt="logo" className={stl.logo} />
              </button>
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
              <button className={stl.button}onClick={handleCart}>
              <i className="bi bi-cart2"></i>
                {/* Cart */}
              </button>
              Cart
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
