import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { putProduct } from "../../Redux/action";
import Form from "react-bootstrap/Form";
import stl from "./FormProducts.module.css";
import UploadImages from "../UploadImages/UploadImages";
import Container from "react-bootstrap/Container";
import { useNavigate } from 'react-router-dom'

const EditProduct = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
        dispatch(putProduct(id, data));
        alert("Se ha modificado el producto correctamente")
        navigate('/admin')
    };

    return (
        <>
            <Container fluid="xxl">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={stl.title}>
                    </div>
                    <div>
                        <Form.Group className={stl.container} controlId="formBasicEmail">
                            <div className={stl.item}>
                                <Form.Label>
                                    Nombre:
                                    <Form.Control
                                        type="text"
                                        {...register("name", { required: true })}
                                    />
                                    {errors.name?.type === "required" && <p>se requiere el nombre</p>}
                                </Form.Label>
                            </div>
                            <div className={stl.item}>
                                <UploadImages />
                            </div>
                            <div className={stl.item}>
                                <Form.Label>
                                    Marca:
                                    <Form.Control type="text" {...register("brand")} />
                                </Form.Label>
                            </div>
                            <div className={stl.item}>
                                <Form.Label>
                                    Precio:
                                    <Form.Control
                                        type="number"
                                        step="0.01"
                                        {...register("price", { required: true })}
                                    />
                                    {errors.price?.type === "required" && (
                                        <p>se requiere el precio </p>
                                    )}
                                </Form.Label>
                            </div>
                            <div className={stl.item}>
                                <Form.Label>
                                    Cantidad:
                                    <Form.Control
                                        type="number"
                                        {...register("quantity", { required: true })}
                                    />
                                    {errors.quantity?.type === "required" && (
                                        <p>se requiere cantidad </p>
                                    )}
                                </Form.Label>
                            </div>
                            <div className={stl.item}>
                                <Form.Label>
                                    Compatible:
                                    <Form.Control type="text" {...register("compatible")} />
                                </Form.Label>
                            </div>
                            <div className={stl.item}>
                                <Form.Label>
                                    Favoritos:
                                    <Form.Control type="text" {...register("favorites")} />
                                </Form.Label>
                            </div>
                            <div className={stl.item}>
                                <Form.Label>
                                    Calificación:
                                    <Form.Control type="text" {...register("calification")} />
                                </Form.Label>
                            </div>
                            <div className={stl.item}>
                                <Form.Label>
                                    Comentarios:
                                    <Form.Control type="text" {...register("comments")} />
                                </Form.Label>
                            </div>
                            <div className={stl.item}>
                                <Form.Label>
                                    Categorías:
                                    <Form.Control type="text" {...register("categories")} />
                                </Form.Label>
                            </div>
                            <div className={stl.item}>
                                <Form.Label>
                                    Descripción:
                                    <Form.Control type="text" {...register("description")} />
                                </Form.Label>
                            </div>
                            <div>
                                <button className={stl.boton} type="submit">
                                    Editar
                                </button>
                            </div>
                        </Form.Group>
                    </div>
                </form>
            </Container>
        </>
    );
}

export default EditProduct