import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function OurBrands() {
  return (
    <>
      <div>¡En Fullstack Store encuentra las mejores marcas!</div>
      <Link>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./image/samsung.png" />
        </Card>
      </Link>
      <Link>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./image/gigabyte.webp" />
        </Card>
      </Link>
      <Link>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./image/kingston.webp" />
        </Card>
      </Link>
      <Link>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./image/nvidia.jpeg" />
        </Card>
      </Link>
      <Link>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="./image/xpglogo2.webp" />
        </Card>
      </Link>
    </>
  );
}
