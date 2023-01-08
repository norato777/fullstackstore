import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  filterProductsCategory,
  getProducts,
  filterProductsBrand,
} from "../../Redux/action";

function PageProducts() {
  const Products = useSelector((state) => state.products);
  const AllProducts = useSelector((state) => state.allProducts);
  const [filtrados, setFiltrados] = useState();
  const [category, setCategory] = useState();
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
    if(!Products.length) dispatch(getProducts());
    setFiltrados(Products);
    getCategories();
    getBrand();
  }, [dispatch, Products]);

  const handleChangeCategory = (e) => {
    dispatch(filterProductsCategory(e.target.value));
  };
  const handleChangeBrand = (e) => {
    dispatch(filterProductsBrand(e.target.value));
  };
  const handlePrev =()=>{
    if(next==0 && prev<=20) {
      return next,prev
    }else{
      setNext(next-20)
      setPrev(prev-20)
    }
   }
    const handleNext =()=>{
      const divicion = Math.trunc(filtrados.length/20)
      if(next>= divicion*20) {
        return next,prev
      }else{
        setNext(next+20)
        setPrev(prev+20)
      }
      console.log(next,prev)
   }
  return (
    <>
      {!Products.length ? (
        <h1>Cargando...</h1>
      ) : (
        <div>
          <select name="select" onChange={(e) => handleChangeCategory(e)}>
            <option value="Categoria">Categoria</option>
            {category?.map((e, i) => (
              <option key={i}>{e}</option>
            ))}
          </select>
          <select name="select" onChange={(e) => handleChangeBrand(e)}>
            <option value="Marca">Marca</option>
            {brand?.map((e, i) => (
              <option key={i}>{e}</option>
            ))}
          </select>
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
