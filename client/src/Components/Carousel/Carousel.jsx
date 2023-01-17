import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container, Image } from "react-bootstrap";

export default function CarouselMain() {
  return (
    <>
      <Container
        className="mt-3"
        style={{
          backgroundColor: "rgba(33, 37, 41,0.5)",
          backdropFilter: "blur(5px)",
          border: "1px solid #fff",
          boxShadow: "0 0 7px #fff",
        }}
      >
        <Carousel fade>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="./image/carousel (1).png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="./image/carousel (2).png"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="./image/carousel (3).png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}
