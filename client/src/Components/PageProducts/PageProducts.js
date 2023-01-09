import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterProductsCategory,
  getProducts,
  filterProductsBrand,
  cleanFilter,
} from "../../Redux/action";

function PageProducts() {
  const Products = useSelector((state) => state.products);
  const AllProducts = useSelector((state) => state.allProducts);
  const [filtrados, setFiltrados] = useState();
  const [category, setCategory] = useState();
  const [selectedCategory, setSelectedCategory] = useState('Categoria');
  const [selectedBrand, setSelectedBrand] = useState('Marca');
  const [brand, setBrand] = useState();
  const [next, setNext] = useState(0)
   const [prev, setPrev] = useState(20)

  const getBrand = () => {
    const marcas = AllProducts.map((e) => e.brand);
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
    if(!AllProducts.length) dispatch(getProducts());
    setFiltrados(Products);
    getCategories();
    getBrand();
  }, [dispatch, Products]);

  const handleChangeCategory =(value) => {
     setSelectedCategory(value) 
     dispatch(filterProductsCategory(value));
  };
  const handleChangeBrand = (value) => {
    setSelectedBrand(value)
    dispatch(filterProductsBrand(value));
  };
  const handlePrev =()=>{
    if(next===0 && prev<=20) {
      return (next,prev)
    }else{
      setNext(next-20)
      setPrev(prev-20)
    }
   }
    const handleNext =()=>{
      const divicion = Math.trunc(filtrados.length/20)
      if(next>= divicion*20) {
        return (next,prev)
      }else{
        setNext(next+20)
        setPrev(prev+20)
      }
      console.log(next,prev)
   }
   const limpiarFiltro =()=>{
    setSelectedBrand("Marca")
    setSelectedCategory("Categoria")
    dispatch(cleanFilter())
   }
  return (
    <>
      {!AllProducts.length ? (
        <h1>Cargando...</h1>
      ) : (
        <div>
          <select value={selectedCategory} onChange={(e) => handleChangeCategory(e.target.value)}>
            <option >Categoria</option>
            {category?.map((e, i) => (
              <option key={i}>{e}</option>
            ))}
          </select>
          <select value={selectedBrand} onChange={(e) => handleChangeBrand(e.target.value)}>
            <option>Marca</option>
            {brand?.map((e, i) => (
              <option key={i}>{e}</option>
            ))}
          </select>
          <button onClick={limpiarFiltro}>Limpiar filtro</button>
          <button className='btn btn-primary' onClick={handlePrev}> prev</button>
          <button className='btn btn-primary'onClick={handleNext}> next</button>
          {
            filtrados?.slice(next,prev).map((e) => (
              <div key={e._id}>
                <h5>{e.name}</h5>
                <span>{e.brand}</span>
                <span> $ {e.price}</span>
                <p>{e.description}</p>
                <img src={e.image} alt="not found" />
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default PageProducts;
