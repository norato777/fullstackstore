import React from "react";
import Card from "react-bootstrap/Card";
import Header from "../Header/Header";
import NavbarMain from "../NavbarMain/NavbarMain";
import Footer from "../Footer/Footer";
import s from "./ProductDetail.module.css";
import Paypal from "../Paypal/Papypal";
import Rating_Coments from "../Rating_Coments/Rating_Coments"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../Redux/action";
import { useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const details = useSelector(state => state.detail)

  useEffect(() => {
    dispatch(getDetail(id))
  }, [])

  return (
    <>
      <Header />
      <NavbarMain />
      {details &&
        <>
          <Card className={s.card}>
            <Card.Img variant="top" src={details.image} className={s.img} />
            <Card.Body>
              <Card.Text>
                {details.name}
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card className={s.cardbody}>
            <Card.Body>
              <p>{details.description}</p>
              <p>{details.price}</p>
            </Card.Body>
          </Card>
          <div className={s.div}>
            <Rating_Coments id={(details._id)} />
          </div>
          <Paypal price={details.price} />
        </>
      }
      <Footer />
    </>
  );
};

export default ProductDetail;
