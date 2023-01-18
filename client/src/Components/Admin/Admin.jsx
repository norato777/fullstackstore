import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProducts, getDetail, postProduct, putProduct, deleteProduct } from "../../Redux/action";

const Admin = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    useEffect(() => {
        !products.length && dispatch(getProducts());
      }, []);
    
    return (
        <>
            <h1>Soy el Admin</h1>
            {products && products.map((p, key) =>
                <div key={key}>
                    <p>{p.name}</p>
                    <p>{p.image}</p>
                    <p>{p.description}</p>
                    <p>{p.price}</p>
                    <p>{p.quantity}</p>
                </div>
            )}
        </>
    )
}

export default Admin;
