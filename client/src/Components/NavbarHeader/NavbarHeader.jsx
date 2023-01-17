import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut, getUsers } from "../../Redux/action";
import ModalLogin from "../ModalLogin/ModalLogin";
import ModalRegister from "../ModalRegister/ModalRegister";
import { Container, Nav } from "react-bootstrap";

export default function NavbarHeader() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const user = useSelector((state) => state.user);
  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const signOut = () => {
    dispatch(logOut());
    window.location.reload();
  };

  return (
    <>
      <Container fluid>
        <Nav className="justify-content-end" activeKey="/">
          <Nav.Item>
            <Nav.Link
              href="/favorites"
              style={{
                color: "#ff3c00",
              }}
            >
              Favoritos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/compare"
              style={{
                color: "#ff3c00",
              }}
            >
              Comparar
            </Nav.Link>
          </Nav.Item>
          {user.length === 0 ? (
            <>
              <Nav.Item>
                <Nav.Link
                  onClick={handleShow2}
                  style={{
                    color: "#ff3c00",
                  }}
                >
                  Registrarse
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  onClick={handleShow}
                  style={{
                    color: "#ff3c00",
                  }}
                >
                  Ingresar
                </Nav.Link>
              </Nav.Item>
            </>
          ) : (
            <>
              <Nav.Item>
                <Nav.Link href="/profile">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Cart</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={signOut}>Log Out</Nav.Link>
              </Nav.Item>
            </>
          )}
        </Nav>
      </Container>
      <ModalLogin show={show} handleClose={handleClose} />
      <ModalRegister show={show2} handleClose={handleClose2} />
    </>
  );
}
