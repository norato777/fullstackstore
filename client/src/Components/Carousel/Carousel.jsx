import React from "react";
import Carousel from "react-bootstrap/Carousel";
import stl from "./Carousel.module.css";
import Container from "react-bootstrap/Container";

export default function CarouselMain() {
  return (
    <>
      <Container fluid="xxl">
        <div className={stl.container}>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./image/carousel (1).png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./image/carousel (2).png"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./image/carousel (3).png"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </>
  );
}
