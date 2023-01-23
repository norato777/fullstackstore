import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logOut, getUsers } from "../../Redux/action";
import { useNavigate } from "react-router-dom";
import ModalSign from "../ModalSign/ModalSign";
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
  const user = useSelector((state) => state.user);
  const logged = useSelector((state) => state.logged);
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const signOut = () => {
    dispatch(logOut());
    navigate("/");
    window.location.reload();
  };

  const onClickProfile = () => {
    navigate("/profile");
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
          {user.length === 0 && logged === false ? (
            <>
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
      <ModalSign show={show} handleClose={handleClose} />
    </>
  );
}