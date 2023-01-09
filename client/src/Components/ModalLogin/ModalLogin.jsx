import React from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Google from '../Google/Google';
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { signIn } from "../../Redux/action";

const ModalLogin = ({ show, handleClose }) => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        dispatch(signIn(data));
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Form className="mb-10" onSubmit={handleSubmit(onSubmit)}>
                <Modal.Header closeButton>
                    <Modal.Title>Iniciar sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-8" controlId="formBasicEmail">
                        <div>
                            <Form.Label>
                                Email
                                <Form.Control
                                    type="email"
                                    {...register("name", { required: true })}
                                />
                                {errors.name?.type === "required" && <p>Email is required </p>}
                            </Form.Label>
                        </div>
                        <Form.Label>
                            Contraseña
                            <Form.Control
                                type="password"
                                {...register("password", { required: true })}
                            />
                            {errors.name?.type === "required" && <p>Password is required </p>}
                        </Form.Label>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Google />
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleClose} type="submit">
                        Iniciar sesión
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default ModalLogin;