import React from "react";
import Card from 'react-bootstrap/Card';
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import s from "./ProductDetail.module.css";
import Paypal from "../Paypal/Papypal";

const ProductDetail = () => {
    const details = useSelector(state => state.detail)

    return (
        <>
            <Header />
            <Paypal />
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
                            <Card.Text>
                                <p>{details.description}</p>
                                <p>{details.price}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </>
            }
        </>
    )
}

export default ProductDetail;