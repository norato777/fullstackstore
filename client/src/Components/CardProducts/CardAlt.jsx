import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Checkbox from "../CheckBox/CheckBox";
import { Link, useNavigate } from "react-router-dom";
import { getDetail } from "../../Redux/action";
import s from "./CardFeaturesProductAlt.module.css";


export default function CardAlt({ prop }) {

  const [oneProduct, setOneProduct] = useState(prop);
  const dispatch = useDispatch()
  const navigate = useNavigate()


 
const handleDetail = (e) => {
  if(e){
dispatch(getDetail(e));
navigate(`/product/${e}`);
}
};
return (
    <div className={s.card} onClick={()=>handleDetail(prop._id)}>
   <img className={s.img} src={prop.image}/>
   <p className={s.title}>{prop.name.slice(0, 30)}</p>
   <div className={s.cardPrice}>

   <hr className={s.hr}></hr>
   <p className={s.price}>$ {prop.price}, 00</p>
   </div>

   </div>
  );
}