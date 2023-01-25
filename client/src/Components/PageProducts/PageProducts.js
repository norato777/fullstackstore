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
                  backgroundColor: "var(--background-color)",
                  backdropFilter: "blur(5px)",
                  border: "var(--border)",
                  boxShadow: "var(--box-shadow)",
                }}
                className="rounded-4"
              >
                <Card.Header>
                  <h5
                    style={{
                      color: "var(--text-color)",
                    }}
                  >
                    Filtros
                  </h5>
                </Card.Header>
                <Card.Body>
                  <Form.Group>
                    <Form.Label
                      style={{
                        color: "#fff",
                      }}
                    >
                      Categoria
                    </Form.Label>
                    <Form.Select
                      className="form-control"
                      value={selectedCategory}
                      onChange={(e) => handleChangeCategory(e.target.value)}
                    >
                      <option>Categoria</option>
                      {category &&
                        category.map((e, i) => <option key={i}>{e}</option>)}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label
                      style={{
                        color: "#fff",
                      }}
                    >
                      Marca
                    </Form.Label>
                    <Form.Select
                      className="form-control"
                      value={selectedBrand}
                      onChange={(e) => handleChangeBrand(e.target.value)}
                    >
                      <option>Marca</option>
                      {brand &&
                        brand.map((e, i) => <option key={i}>{e}</option>)}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label
                      style={{
                        color: "#fff",
                      }}
                    >
                      Precio
                    </Form.Label>
                    <Form.Select
                      className="form-control"
                      onChange={(e) => handleChangePrice(e.target.value)}
                    >
                      <option defaultValue="Price">Price</option>
                      <option value="Mayor">Mayor a menor</option>
                      <option value="Menor">Menor a mayor</option>
                    </Form.Select>
                  </Form.Group>

                  <Button
                    className="mt-5"
                    variant="outline-warning"
                    onClick={() => handleCleanFilter()}
                    style={{
                      border: "var(--border)",
                      color: "var(--text-color)",
                    }}
                  >
                    Limpiar filtros
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={9}>
              <Row>
                <Productos />
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}


export default PageProducts;
