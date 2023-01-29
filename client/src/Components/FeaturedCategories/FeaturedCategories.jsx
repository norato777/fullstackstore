import React from "react";
import CardFeaturedCategories from "../CardFeaturedCategories/CardFeaturedCategories";
import stl from "./FeaturedCategories.module.css";
import { getCategories } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

export default function FeaturedCategories() {
  const category = useSelector((state)=> state.category)
  const dispatch = useDispatch()


  useEffect(()=>{
    !category.length && dispatch(getCategories())
  },[])
  
  return (
    <><div>
<p /* style={{ color: "#fff" }} */      style={{
  // border: "var(--border)",
  color: "var(--text-color)",
  fontSize:"40px",
  borderRadius:"15px",
  backdropFilter: "blur(125px)",
}}>Categorias Destacadas</p>

</div>
      <Container className="mt-3 mb-3">
        <div className={stl.container}>
          {category?.map((e, i) => (
            <div key={i}>
              <CardFeaturedCategories prop={e} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
