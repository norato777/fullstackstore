import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const cart1 = useSelector((state) => state.cart);
  const newCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(JSON.parse(newCart));
  const navigate = useNavigate()
  const [count, setCount]= useState(1)
  const [total, setTotal]= useState(0)


  const addOneProduct = (product) => {
    setCount(count+1)
    let pepe = cart
    pepe?.map(item =>item._id===product._id? {...item,qty:item.qty+=1}:item)
    setCart(pepe)
    console.log(cart)
    localStorage.setItem("cart",JSON.stringify(cart))
  };


  const restOneProduct = (product)=>{   
    setCount(count-1)
    let pepe = cart 
    if(product.qty===1)return
    else {
      pepe?.map(item =>item._id===product._id? {...item,qty:item.qty-=1}:item)
      setCart(pepe)
      localStorage.setItem("cart",JSON.stringify(cart))
    }}


    const deleteProduct =(product)=>{
      let pepe = cart.filter(ele=>ele._id!==product._id)
      setCart(pepe) 
      localStorage.setItem("cart",JSON.stringify(cart))
    }


    const cleanCart = () => {
      localStorage.setItem("cart", JSON.stringify([]));
      setCart([ ]);
      setTotal(0)
    };

    const handlePageProducts=()=>{
      navigate("/products")
    }
    const totalApagar = ()=>{
      let prod = cart.map(ele=>ele.price*ele.qty)
      prod= prod.reduce((acc,curr)=>{
        acc+=curr
        return acc
      })
      setTotal(prod)
    }
      useEffect(() => {
       cart?.length && totalApagar()
      }, [cart,newCart,count,total]);
    
    return (
      <div>
      {cart?.items?.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        <>
          <h3>Your Products</h3>
          {cart?.map((e, i) => (
            <div key={i}>
              <h5>{e.name}</h5>
              <button onClick={()=>restOneProduct(e)}>-</button>
              <span>{e.qty}</span>
              <button onClick={()=>addOneProduct(e)}>+</button>
              <p>{e.price} x {e.qty}</p>
              <button onClick={()=>deleteProduct(e)}>X</button>
            </div>
          ))}
          <div></div>
          <div>Total: ${total}</div>
        </>
      )}
         <button
      onClick={handlePageProducts}
        variant="outline-warning"
        style={{
          border: "var(--border)",
          color: "var(--text-color)",
        }}
      >
       volver a productos
      </button>
      <button
      onClick={cleanCart}
        variant="outline-warning"
        style={{
          border: "var(--border)",
          color: "var(--text-color)",
        }}
      >
        Limpiar carrito
      </button>
    </div>
  );
}
