import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut, getUsers } from "../../Redux/action";
import { useNavigate } from "react-router-dom";
import ModalLogin from "../ModalLogin/ModalLogin";
import ModalRegister from "../ModalRegister/ModalRegister";
import {
  Container,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Nav,
} from "react-bootstrap";

export default function NavbarHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const user = useSelector((state) => state.user);
  const logged = useSelector((state) => state.logged);
  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);
  const id = localStorage.getItem("id");
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const signOut = (e) => {    
    localStorage.clear();
    dispatch(logOut());
    navigate("/");
    // window.location.reload();
  };

  const onClickProfile = () => {
    navigate("/profile/"+id);
  };

  const onClickFavorites = () => {
    navigate("/favorites");
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
          {id.length === undefined || user.length===0 && logged === false ? (
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
              <ButtonGroup>
                <DropdownButton
                  as={ButtonGroup}
                  title="Usuario"
                  id="bg-nested-dropdown"
                >
                  <Dropdown.Item eventKey="1" onClick={onClickFavorites}>
                    Favoritos
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="2" onClick={onClickProfile}>
                    Mi perfil
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="3" onClick={signOut}>
                    Cerrar sesión
                  </Dropdown.Item>
                </DropdownButton>
              </ButtonGroup>
            </>
          )}
        </Nav>
      </Container>
      <ModalLogin show={show} handleClose={handleClose} />
      <ModalRegister show={show2} handleClose={handleClose2} />
    </>
  );
}
