import React from "react";
import Card from "react-bootstrap/Card";
import Header from "../Header/Header";
import NavbarMain from "../NavbarMain/NavbarMain";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import s from "./ProductDetail.module.css";
import Paypal from "../Paypal/Papypal";
import Rating_Coments from "../Rating_Coments/Rating_Coments"
import { useEffect } from "react";

const ProductDetail = () => {
  const details = useSelector((state) => state.detail);

  return (
    <>
      <Header />
      <NavbarMain />
       {details && (
        <>
{/* 
            <Header /> */}
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

          <Card className={s.card}>
            <Card.Img variant="top" src={details.image} className={s.img} />
            <Card.Body>
              <Card.Text>{details.name}</Card.Text>
            </Card.Body>
          </Card>
          <br />
          <Card className={s.cardbody}>
            <Card.Body>
              <Card.Text>
                {details.description}
                {details.price}
              </Card.Text>
            </Card.Body>
          </Card>

        </>
      )}
      <Footer />
    </>
  );
};

export default ProductDetail;
