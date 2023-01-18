import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterProductsCategory } from "../../Redux/action";
import stl from "./CardFeaturedCategories.module.css";

//CardFeaturedCategories es una card que se usa en la pagina principal linki al detalle del producto card title tarjetas de video card img src="./image/tdv(1).webp"

export default function CardFeaturedCategories({ prop }) {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(filterProductsCategory(prop.name));
    navigate("/products");
    console.log(prop.name)
  };

  return (
    <button onClick={handleClick} className={stl.container}>
      <Card
        style={{
          width: "18rem",
          backgroundImage: `url(${prop.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={stl.card + " card-bg-img"}
      >
        <h3 className={stl.title}>{prop.name}</h3>
      </Card>
    </button>
  );
}
