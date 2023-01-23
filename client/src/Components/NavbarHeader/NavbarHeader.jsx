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
  Button,
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
            <Button
              className="m-1"
              href="/favorites"
              variant="outline-warning"
              style={{ border: "1px solid #ff3c00", color: "#ff3c00" }}
            >
              <i className="bi bi-star "></i> Favoritos
            </Button>
          </Nav.Item>
          <Nav.Item>
            <Button
              className="m-1"
              variant="outline-warning"
              href="/compare"
              style={{ border: "1px solid #ff3c00", color: "#ff3c00" }}
            >
              <i className="bi bi-back "></i> Comparar
            </Button>
          </Nav.Item>
          {user.length === 0 && logged === false ? (
            <>
              <Nav.Item>
                <Button
                  className="m-1"
                  variant="outline-warning"
                  onClick={handleShow}
                  style={{
                    border: "1px solid #ff3c00",
                    color: "#ff3c00",
                  }}
                >
                  <i className="bi bi-box-arrow-in-right "></i> Ingresar
                </Button>
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
