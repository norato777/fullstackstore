//componente de productos que se renderisa en pageProducts solo 20 productos por pagina
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getDetail, getProducts } from "../../Redux/action";
import stl from "./Productos.module.css"

export default function Productos() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products); 
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(20);


  useSelector((state) => state.getDetail);

  useEffect(() => {
    setMaxPage(Math.ceil(products.length / productsPerPage));
    console.log(maxPage)  
    console.log(products.length) 
    console.log(productsPerPage) 
    console.log(Math.ceil(products.length / productsPerPage))

  }, [products, page, productsPerPage]);

  function handleNextPage() {
    if (page < maxPage) {
      setPage(page + 1);
    }
  }

  function handlePrevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
 const handleDetail = (e) => {
    dispatch(getDetail(e.target.value));
    navigate(`/product/${e.target.value}`);
  };

  return (
    <div >
      <div>
        {/* botones de paginacion bootstrap */} 

        <button onClick={handlePrevPage} className="btn btn-primary">
          Anterior
        </button>
        <button onClick={handleNextPage} className="btn btn-primary">
          Siguiente
        </button>   
      <h3>Page {page}</h3>
      </div>

      <div className={stl.container}>
        {/* mensaje de carga mientras se renderiza los productos */}

        {products.length === 0 ? (
          <h1>No hay productos con este Filtro</h1>
        ) : null}
        {/* //map para renderizar los productos */}

        {products
          ?.slice((page - 1) * productsPerPage, page * productsPerPage)
          ?.map((product) => {
            return (
              <div className={stl.card} key={product._id}>
                <div className={stl.cardbody}>
                  <img src={product.image} alt={product.name} className={stl.img}/>
                 <div className={stl.cardbody1}>
                  <h5 className="card-title">{product.name.slice(0, 30)}</h5>
                  {/* //descricion con caracteres limitados a 100 */}
                  <p className="card-text">
                    {product.description.slice(0, 30)}...
                  </p>
                  <p className="card-text">${product.price}</p>
                  {/* usar getDetail para detalles del producto */}
                  <button
                    value={product._id}
                    onClick={handleDetail}
                    className="btn btn-primary"
                  >
                    Ver detalles
                  </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
