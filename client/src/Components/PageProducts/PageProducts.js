import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterProductsCategory,
  getProducts,
  filterProductsBrand,
  cleanFilter,
  filterProductsPrice,
} from "../../Redux/action";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Productos from "../Products/Productos";
import NavbarMain from "../NavbarMain/NavbarMain";

function PageProducts() {
  const Products = useSelector((state) => state.products);
  const AllProducts = useSelector((state) => state.allProducts);
  const [filtrados, setFiltrados] = useState();
  const [category, setCategory] = useState();
  const [selectedCategory, setSelectedCategory] = useState("Categoria");
  const [selectedBrand, setSelectedBrand] = useState("Marca");
  const [brand, setBrand] = useState();
  //filtro por precio usando filterProductsPrice de action.js
  const handleChangePrice = (value) => {
    setSelectedPrice(value);
    dispatch(filterProductsPrice(value));
  };
  const [selectedPrice, setSelectedPrice] = useState("Price");
  const [price, setPrice] = useState();

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

  const handleCleanFilter = () => {
    setSelectedCategory("Categoria");
    setSelectedBrand("Marca");
    dispatch(cleanFilter());
  };

  return (
    <>
      <div>
        <Header />
        <NavbarMain />
        <div className="container">
          <div className="row">
            {/* filtors */}
            <div className="col-2">
              <div className="row">
                <div className="col-12">
                  <h3>Filtros</h3>
                </div>
                <div className="col-12">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => handleChangeCategory(e.target.value)}
                    value={selectedCategory}
                  >
                    <option value="Categoria">Categoria</option>
                    {category && category.map((e) => <option value={e}>{e}</option>)}
                  </select>
                </div>
                <div className="col-12">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => handleChangeBrand(e.target.value)}
                    value={selectedBrand}
                  >
                    <option value="Marca">Marca</option>
                    {brand && brand.map((e) => <option value={e}>{e}</option>)}
                  </select>
                </div>
                <div className="col-12">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => handleChangePrice(e.target.value)}
                    value={selectedPrice}
                  >
                    </select>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary" onClick={handleCleanFilter}>
                    Limpiar filtros
                  </button>
                </div>
              </div>
            </div>
            <div className="col-1"></div>
            <div className="col-9">
              <div className="row">
                <Productos products={filtrados} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PageProducts;
