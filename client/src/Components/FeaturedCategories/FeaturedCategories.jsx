import React from "react";
import CardFeaturedCategories from "../CardFeaturedCategories/CardFeaturedCategories";
import stl from "./FeaturedCategories.module.css";
import { getCategories } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


export default function FeaturedCategories() {
  const category = useSelector((state)=> state.category)
  const dispatch = useDispatch()


  useEffect(()=>{
    !category.length && dispatch(getCategories())
  },[])
  return (
    <>    
      <h1>Categorias destacadas</h1>
      <div className={stl.container}>
      {
        category?.slice(0,4).map((e,i)=>(  <div key={i}className={stl.format}>
          <CardFeaturedCategories prop={e}/>
        </div>))
      }
      </div>
    </>
  );
}
