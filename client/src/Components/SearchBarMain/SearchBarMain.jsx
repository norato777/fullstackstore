import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import searchBarName from "../../Redux/action"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function SearchBarMain() {

  const Products = useSelector((state)=> state.allProducts)
  const Filtrados = useSelector((state)=> state.products)
  const dispatch = useDispatch()
  const [buscados, setBuscados] = useState()
  const navigate = useNavigate();

  const handleChange = (e)=>{
    e.preventDefault()
    setBuscados(e.target.value)
    // console.log(buscados)
   
    // console.log(Filtrados)
  }
  const handleClick = (e)=>{
    e.preventDefault()
    dispatch(searchBarName(buscados))
    navigate("/products")
  }

  return (
    <>
      <form>
        <InputGroup className="mb-3">
          <Form.Control onChange={handleChange} placeholder="¿Que estas buscando hoy?" />
          <Button onClick={handleClick}>Buscar</Button>
        </InputGroup>
      </form>
    </>
  );
}
