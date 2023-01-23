import React, { useState } from "react";
import Google from "../Google/Google";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { signUp } from "../../Redux/action";
import { Form, Modal, Nav, Button } from "react-bootstrap";

const ModalRegister = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    const sign = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(signUp(sign));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Form
      className="mb-10"
      onSubmit={handleSubmit(onSubmit)}
      style={{
        backgroundColor: "rgba(33, 37, 41,0.5)",
        backdropFilter: "blur(5px)",
        border: "1px solid #fff",
      }}
    >
      <Modal.Header
        style={{
          backgroundColor: "rgb(33, 37, 41)",
          backdropFilter: "blur(5px)",
        }}
      >
        <Modal.Title
          style={{
            color: "#ffc800",
          }}
        >
          Registrate
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: "rgb(33, 37, 41)",
          backdropFilter: "blur(5px)",
        }}
      >
        <Form.Group className="mb-8" controlId="formBasicEmail">
          <div>
            <Form.Label
              style={{
                color: "#ff3c00",
              }}
            >
              Nombre
              <Form.Control
                type="name"
                {...register("name", { required: true })}
                onChange={nameChangeHandler}
                value={name}
                style={{
                  border: "1px solid #ff3c00",
                }}
              />
              {errors.name?.type === "required" && (
                <p>No ingresaste tu nombre</p>
              )}
            </Form.Label>
          </div>
          <div>
            <Form.Label
              style={{
                color: "#ff3c00",
              }}
            >
              Email
              <Form.Control
                type="email"
                {...register("name", { required: true })}
                onChange={emailChangeHandler}
                value={email}
                style={{
                  border: "1px solid #ff3c00",
                }}
              />
              {errors.name?.type === "required" && (
                <p>No ingresaste tu email </p>
              )}
            </Form.Label>
          </div>
          <Form.Label
            style={{
              color: "#ff3c00",
            }}
          >
            Contraseña
            <Form.Control
              type="password"
              {...register("password", { required: true })}
              onChange={passwordChangeHandler}
              value={password}
              style={{
                border: "1px solid #ff3c00",
              }}
            />
            {errors.name?.type === "required" && (
              <p>No ingresaste tu contraseña </p>
            )}
          </Form.Label>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer
        style={{
          backgroundColor: "rgb(33, 37, 41)",
          backdropFilter: "blur(5px)",
        }}
      >
        <Button
          onClick={handleClose}
          variant="outline-warning"
          style={{
            border: "1px solid #198754",
            color: "#198754",
            width: "170px",
          }}
          className="m-1"
        >
          Registrarse
        </Button>
      </Modal.Footer>
    </Form>
  );
};

export default ModalRegister;
