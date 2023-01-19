import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { filterProductsCategory } from "../../Redux/action";
import { Container, Button, Image } from "react-bootstrap";

export default function CardFeaturedCategories({ prop }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(filterProductsCategory(prop.name));
    navigate("/products");
    console.log(prop.name);
  };

  return (
    <Container className="mt-3 mb-3">
      <Button
        onClick={handleClick}
        variant="outline-warning"
        style={{
          border: "1px solid #fff",
          backgroundImage: `url(${prop.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#ffffff",
          borderRadius: "50%",
          height: "210px",
          width: "210px",
          boxShadow: "0 0 7px #fff",
        }}
      >
        <div style={{ backgroundColor: "#ff3c00" }}>{prop.name}</div>
      </Button>
    </Container>
  );
}
