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
  const AllProducts = useSelector((state) => state.allProducts);
  const [filtrados, setFiltrados] = useState();
  const [category, setCategory] = useState();
  const [selectedCategory, setSelectedCategory] = useState("Categoria");
  const [selectedBrand, setSelectedBrand] = useState("Marca");
  const [brand, setBrand] = useState();
  const [next, setNext] = useState(0);
  const [prev, setPrev] = useState(20);

  const getBrand = () => {
    const marcas = AllProducts.map((e) => e.brand).sort(function (a, b) {
      if (a < b) return -1;
      else return 1;
    });
    const uniqueBrands = [...new Set(marcas)];
    setBrand(uniqueBrands);
  };

  const getCategories = () => {
    const categories = AllProducts.reduce((acc, product) => {
      acc[product.categories] = true;
      return acc;
    }, {});
    const uniqueCategories = Object.keys(categories);
    setCategory(uniqueCategories);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    if (!AllProducts.length) dispatch(getProducts());
    setFiltrados(Products);
    getCategories();
    getBrand();
  }, [dispatch, Products]);

  const handleChangeCategory = (value) => {
    setSelectedCategory(value);
    dispatch(filterProductsCategory(value));
  };
  const handleChangeBrand = (value) => {
    setSelectedBrand(value);
    dispatch(filterProductsBrand(value));
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
    const divicion = Math.trunc(filtrados.length / 20);
    if (next >= divicion * 20) {
      return next, prev;
    } else {
      setNext(next + 20);
      setPrev(prev + 20);
    }
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
      {!AllProducts.length ? (
        <h1>Cargando...</h1>
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
            <button
              onClick={limpiarFiltro}
              style={{ width: "105px", height: "35px", border: "1px solid" }}
            >
              Limpiar filtro
            </button>
            <button
              onClick={handlePrev}
              style={{ width: "105px", height: "35px", border: "1px solid" }}
            >
              prev
            </button>
            <button
              onClick={handleNext}
              style={{ width: "105px", height: "35px", border: "1px solid" }}
            >
              next
            </button>
          </div>

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
