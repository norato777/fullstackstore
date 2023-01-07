import React from "react";
import Card from "react-bootstrap/Card";

export default function OurBrands() {
  return (
    <>
      <div>¡En Fullstack Store encuentra las mejores marcas!</div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="./image/samsung.png" />
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="./image/gigabyte.webp" />
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="./image/kingston.webp" />
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="./image/nvidia.jpeg" />
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="./image/xpglogo2.webp" />
      </Card>
    </>
  );
}
