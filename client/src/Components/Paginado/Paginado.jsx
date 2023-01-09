import React from "react";


export default function Paginado ({Products,allProducts , paginado, CurrentPage}){
    const pageNummbers = []

    for (let i = 1; i <= Math.ceil(allProducts/Products); i++) {
        pageNummbers.push(i)
    }

    return (
        <nav>
            <ul className="paginado-bar">
                {pageNummbers && pageNummbers.map ( number =>(
                    <li className="number" key={number}>
                        <button onClick={()=> paginado(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
};