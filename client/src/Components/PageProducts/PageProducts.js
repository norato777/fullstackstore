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

import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function PageProducts() {
  const Products = useSelector((state) => state.products);
  const AllProducts = useSelector((state) => state.allProducts);
  const [filtrados, setFiltrados] = useState();
  const [category, setCategory] = useState();
  const [selectedCategory, setSelectedCategory] = useState("Categoria");
  const [selectedBrand, setSelectedBrand] = useState("Marca");
  const [selectedSort, setSelectedSort] = useState("Price");
  const [brand, setBrand] = useState();

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
    // setFiltrados(Products);
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
  //filtro por precio usando filterProductsPrice de action.js
  const handleChangePrice = (value) => {
    setSelectedSort(value);
    dispatch(filterProductsPrice(value));
  };
  const handleCleanFilter = () => {
    setSelectedCategory("Categoria");
    setSelectedBrand("Marca");
    dispatch(filterProductsPrice("Price"));
    dispatch(cleanFilter());
  };

  return (
    <>
      <div>
        <Header />

        <Container className="mt-5">
          <Row>
            <Col>
              <Card
                style={{
                  backgroundColor: "rgba(33, 37, 41,0.5)",
                  backdropFilter: "blur(5px)",
                  border: "1px solid #fff",
                  boxShadow: "0 0 7px #fff",
                }}
                className="rounded-4"
              >
                <Card.Header>
                  <h5
                    style={{
                      color: "#ff3c00",
                    }}
                  >
                    Filtros
                  </h5>
                </Card.Header>
                <Card.Body>
                  <Form.Group>
                    <Form.Label
                      style={{
                        color: "#ffc800",
                      }}
                    >
                      Categoria
                    </Form.Label>
                    <Form.Select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      value={selectedCategory}
                      onChange={(e) => handleChangeCategory(e.target.value)}
                    >
                      <option>Categoria</option>
                      {category &&
                        category.map((e, i) => <option key={i}>{e}</option>)}
                    </Form.Select>
                  </Form.Group>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Marca</label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      value={selectedBrand}
                      onChange={(e) => handleChangeBrand(e.target.value)}
                    >
                      <option>Marca</option>
                      {brand &&
                        brand.map((e, i) => <option key={i}>{e}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Precio</label>
                    <select
                      className="form-control"
                      id="exampleFormControlSelect1"
                      onChange={(e) => handleChangePrice(e.target.value)}
                    >
                      <option defaultValue="Price">Price</option>
                      <option value="Mayor">Mayor a menor</option>
                      <option value="Menor">Menor a mayor</option>
                    </select>
                  </div>

                  <button
                    className="btn btn-primary"
                    onClick={() => handleCleanFilter()}
                    style={{ border: "1px solid #ff3c00", color: "#ff3c00" }}
                  >
                    Limpiar filtros
                  </button>
                </Card.Body>
              </Card>
            </Col>

            <div className="col-9">
              <div className="row">
                <Productos />
              </div>
            </div>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default PageProducts;
