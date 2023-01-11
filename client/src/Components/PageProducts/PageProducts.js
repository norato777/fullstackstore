import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterProductsCategory,
  getProducts,
  filterProductsBrand,
  cleanFilter,
} from "../../Redux/action";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import stl from "./PageProducts.module.css";

function PageProducts() {
  const Products = useSelector((state) => state.products);
  const { division, brand, category } = useSelector((state) => state);
  const AllProducts = useSelector((state) => state.allProducts);
  const [filtrados, setFiltrados] = useState();
  const [selectedCategory, setSelectedCategory] = useState("Categoria");
  const [selectedBrand, setSelectedBrand] = useState("Marca");
  const [next, setNext] = useState(0);
  const [prev, setPrev] = useState(20);
  const [numPage, setNumPage] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!AllProducts.length) dispatch(getProducts());
    setFiltrados(Products);
    setNumPage(Array.from({ length: filtrados?.length / 20 }, (_, i) => i + 1));
  }, [dispatch, Products, filtrados]);

  const handleChangeCategory = (value) => {
    setSelectedCategory(value);
    dispatch(filterProductsCategory(value));
    setNext(0);
    setPrev(20);
  };
  const handleChangeBrand = async (value) => {
    setSelectedBrand(value);
    dispatch(filterProductsBrand(value));
    setNext(0);
    setPrev(20);
  };
  const handlePrev = () => {
    if (next === 0 && prev <= 20) {
      return next, prev;
    } else {
      setNext(next - 20);
      setPrev(prev - 20);
    }
  };
  const handleNext = () => {
    if (next >= division * 20 || next > filtrados.length - 20) {
      return next, prev;
    } else {
      setNext(next + 20);
      setPrev(prev + 20);
    }
    console.log(next, prev);
  };
  const handleNumPage = (e) => {
    console.log(e);
    setNext(20 * e.target.value - 20);
    setPrev(20 * e.target.value);

    console.log(next, prev);
  };
  const limpiarFiltro = () => {
    setSelectedBrand("Marca");
    setSelectedCategory("Categoria");
    dispatch(cleanFilter());
  };
  return (
    <>
      <Header />
      {filtrados !== undefined && !filtrados.length ? (
        <div>
          <h1>No hay productos con este Filtro</h1>
          <button onClick={limpiarFiltro} className="btn btn-primary m-1">
            Limpiar filtro
          </button>
        </div>
      ) : (
        <div className={stl.container}>
          <div className={stl.filtros}>
            <select
              value={selectedCategory}
              onChange={(e) => handleChangeCategory(e.target.value)}
              style={{ width: "140px", height: "35px", border: "1px solid" }}
            >
              <option>Categoria</option>
              {category?.map((e, i) => (
                <option key={i}>{e}</option>
              ))}
            </select>
            <select
              value={selectedBrand}
              onChange={(e) => handleChangeBrand(e.target.value)}
              style={{ width: "140px", height: "35px", border: "1px solid" }}
            >
              <option>Marca</option>
              {brand?.map((e, i) => (
                <option key={i}>{e}</option>
              ))}
            </select>
            <button onClick={limpiarFiltro} className="btn btn-primary m-1">
              Limpiar filtro
            </button>
          </div>
          <button onClick={handlePrev} className="btn btn-primary m-1">
            prev
          </button>
          {numPage?.map((e, i) => (
            <button
              className="btn btn-primary m-1"
              key={i}
              value={e}
              onClick={handleNumPage}
            >
              {e}
            </button>
          ))}
          <button onClick={handleNext} className="btn btn-primary m-1">
            next
          </button>

          {filtrados?.slice(next, prev).map((e) => (
            <div key={e._id}>
              <div className={stl.contDetails}>
                <div>
                  <img className={stl.imageCont} src={e.image} alt="product" />
                </div>
                <div className={stl.contSpecs}>
                  <div className={stl.title}>{e.name}</div>
                  <div className={stl.brand}>{e.brand}</div>
                  <div className={stl.price}> $ {e.price}</div>
                  <div className={stl.details}>
                    {e.description.slice(0, 210)}
                  </div>
                </div>
                <div className={stl.section3}>
                  <img
                    src="./image/shopping-cart.svg"
                    alt="Carrito de compras"
                    className={stl.carrito}
                  />
                  <button className={stl.addProd}>Agregar al carrito</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
}

export default PageProducts;
