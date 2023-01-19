import React from "react";
import CardFeaturedCategories from "../CardFeaturedCategories/CardFeaturedCategories";
import NewCard from "../CardFeaturedCategories/NewCard";
import stl from "./FeaturedCategories.module.css";
import { getCategories } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

export default function FeaturedCategories() {
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    !category.length && dispatch(getCategories());
  }, []);

  return (
    <>
      <h1
        style={{
          color: "#ffc800",
        }}
      >
        Categorias Destacadas
      </h1>
      <Container>
        <div className={stl.container}>
          {category?.map((e, i) => (
            <div key={i}>
              <NewCard prop={e} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
