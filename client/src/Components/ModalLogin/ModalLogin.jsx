import React, { useState } from "react";
import { Form, Modal, Nav, Button } from "react-bootstrap";
import Google from "../Google/Google";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { signIn } from "../../Redux/action";

const ModalLogin = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      email: email,
      password: password,
    };
    dispatch(signIn(sign));
    setEmail("");
    setPassword("");
  };

  return (
    <Modal
      size="sm"
      centered
      show={show}
      onHide={handleClose}
      style={{
        backgroundColor: "rgba(33, 37, 41,0.5)",
        backdropFilter: "blur(5px)",
      }}
    >
      <Form
        className="rounded-4 mb-10"
        onSubmit={handleSubmit(onSubmit)}
        style={{
          backgroundColor: "rgba(33, 37, 41,0.5)",
          backdropFilter: "blur(5px)",
          border: "1px solid #fff",
          boxShadow: "0 0 7px #fff, 0 0 14px #fff, 0 0 21px #fff",
        }}
      >
        <Modal.Header
          closeButton
          style={{
            backgroundColor: "rgb(33, 37, 41)",
            backdropFilter: "blur(5px)",
          }}
          className="rounded-top-4"
        >
          <Modal.Title
            style={{
              color: "#ff3c00",
            }}
          >
            Inicia sesión
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
                  <p
                    style={{
                      color: "#ff0000",
                    }}
                  >
                    Email is required{" "}
                  </p>
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
                <p
                  style={{
                    color: "#ff0000",
                  }}
                >
                  Password is required{" "}
                </p>
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
          <Nav.Item>
            <Nav.Link
              href="/home"
              style={{
                color: "#ffc800",
              }}
              className="m-2"
            >
              Olvidé mi contraseña
            </Nav.Link>
          </Nav.Item>
          <Button
            onClick={handleClose}
            type="submit"
            variant="outline-warning"
            style={{ border: "1px solid #ff3c00", color: "#ff3c00" }}
            className="m-1"
          >
            Iniciar sesión
          </Button>
          <Button
            onClick={handleClose}
            variant="outline-warning"
            style={{ border: "1px solid #198754", color: "#198754" }}
            className="m-1"
          >
            Registrarse
          </Button>
        </Modal.Footer>
        <div>
          <Google />
        </div>
      </Form>
    </Modal>
  );
};

export default ModalLogin;
