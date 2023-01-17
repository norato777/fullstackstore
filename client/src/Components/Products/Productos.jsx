//componente de productos que se renderisa en pageProducts solo 20 productos por pagina
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getDetail, getProducts } from "../../Redux/action";
import stl from "./Productos.module.css";

export default function Productos() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(20);
  const [paginas, setPaginas] = useState([]);
  let pages = [];

  useSelector((state) => state.getDetail);

  useEffect(() => {
    setMaxPage(Math.ceil(products.length / 20));
    if (maxPage > 1) {
      for (let i = 1; i < maxPage; i++) {
        pages.push(i);
      }
      setPaginas(pages);
    }else setPaginas(pages);
  }, [products, page, maxPage,num1,num2]);
  function handleNextPage() {
    if(num2>=maxPage*20){
      return num1, num2
    }else {
      setNum1(num1+20)
    setNum2(num2+20)
    }
  }

  function handlePrevPage() {
    if(num1==0){
      return num1, num2
    }else {
      setNum1(num1-20)
    setNum2(num2-20)
    }
  }
  const handleDetail = (e) => {
    dispatch(getDetail(e.target.value));
    navigate(`/product/${e.target.value}`);
  };
  const handleChangePagePerNum = (e)=>{
    console.log(e.target.value)
   let n = e.target.value *20
   if(e.target.value == 1){ return setNum1(0), setNum2(20)}
  else
    setNum1(n)
    setNum2(n+20)
  }
  return (
    <div>
      <div className={stl.butonSet}>
        {/* botones de paginacion bootstrap */}

        <button onClick={handlePrevPage} className={`btn btn ${stl.btn}`}>
          Anterior
        </button>
        {paginas.length > 1 &&
          paginas.map((e, i) => <button key={i} className={`btn ${stl.btn}`} value={e} onClick={handleChangePagePerNum}>{e}</button>)}
        <button onClick={handleNextPage} className={`btn ${stl.btn}`}>
          Siguiente
        </button>
      </div>

      <div className={stl.container}>
        {/* mensaje de carga mientras se renderiza los productos */}

        {products.length === 0 ? (
          <h1>No hay productos con este Filtro</h1>
        ) : null}
        {/* //map para renderizar los productos */}

        {products
          ?.slice(num1,num2)
          ?.map((product) => {
            return (
              <div className={stl.card} key={product._id}>
                <div className={stl.cardbody}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={stl.img}
                  />
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
