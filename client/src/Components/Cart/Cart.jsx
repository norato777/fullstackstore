import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { putUser } from "../../Redux/action";
import Paypal from "../Paypal/Papypal";
import s from "./Cart.module.css";

export default function Cart() {
  const cart1 = useSelector((state) => state.cart);
  const newCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(JSON.parse(newCart));
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0);
  const idLocal = localStorage.getItem("id");

  const addOneProduct = (product) => {
    setCount(count + 1);
    let pepe = cart;
    pepe?.map((item) =>
      item._id === product._id ? { ...item, qty: (item.qty += 1) } : item
    );
    setCart(pepe);
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const restOneProduct = (product) => {
    setCount(count - 1);
    let pepe = cart;
    if (product.qty === 1) return;
    else {
      pepe?.map((item) =>
        item._id === product._id ? { ...item, qty: (item.qty -= 1) } : item
      );
      setCart(pepe);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const deleteProduct = (product) => {
    let pepe = cart.filter((ele) => ele._id !== product._id);
    if(pepe.length===0)setTotal(0)
    setCart(pepe);
    localStorage.setItem("cart", JSON.stringify(pepe));
  };

  const cleanCart = () => {
    localStorage.setItem("cart", JSON.stringify([]));
    setCart([]);
    setTotal(0);
  };

  const handlePageProducts = () => {
    navigate("/products");
  };
  const totalApagar = () => {
    let prod = cart.map((ele) => ele.price * ele.qty);
    prod = prod.reduce((acc, curr) => {
      acc += curr;
      return acc;
    });
    setTotal(prod);
  };
  const HandleBack = () => {
    if(!idLocal){
      return alert("Debes loguearte")
    }else{
      dispatch(putUser(id,cart))
    }
  }
  useEffect(() => {
    cart.length<cart1.length && setCart(cart1)
    cart?.length && totalApagar();
  }, [cart, newCart, count, total]);

  return (
    <div>
      {cart?.items?.length === 0 ? (
        <div className={s.divTitle}>
        <h1 className={s.h1}>El carrito esta vacio</h1>
        </div>
      ) : (
        <div>
          <div className={s.divTitle}>
          <h1 className={s.h1}>Tus productos</h1>
          </div>
          <div className={s.divContainer}>
            {cart?.map((e, i) => (
              <div key={i} className={s.divCard}>
                <img src={e.image} className={s.img} />
                <div className={s.title}>
                  <h5>{e.name.split(",",1)}</h5>
                </div>
                <div className={s.price}>
                  <div>
                    <button
                      className={s.buton1}
                      onClick={() => restOneProduct(e)}
                    >
                      -
                    </button>
                    <span>  {e.qty}  </span>
                    <button
                      className={s.buton1}
                      onClick={() => addOneProduct(e)}
                    >
                      +
                    </button>
                  </div>
                  <h5>$ {e.price}</h5>
                </div>
                <button className={s.buton3} onClick={() => deleteProduct(e)}>
                  X
                </button>
              </div>
            ))}
            <h2 className={s.h2}>Total: ${total}</h2>
          </div>
        </div>
      )}
      <div className={s.backbuton}>
      <Button
          onClick={handlePageProducts}
          variant="outline-warning"
          style={{ height:"40px", border: "var(--border)", color: "var(--text-color)",backdropFilter: "blur(5px)" }}
          className="m-1"
        >Volver a productos</Button>
      <Button
          onClick={cleanCart}
          variant="outline-warning"
          style={{ height:"40px", border: "var(--border)", color: "var(--text-color)",backdropFilter: "blur(5px)"}}
          className="m-1"
        >Limpiar carrito</Button>
        {
          !idLocal?
        <Button
        onClick={HandleBack}
         variant="outline-warning"
         style={{ border: "var(--border)", color: "var(--text-color)",backdropFilter: "blur(5px)"}}
         className="m-1">
          COMPRAR
        </Button>:
           <Paypal className={s.paypal} price={total}/>
        }
      </div>
    </div>
  );
}
