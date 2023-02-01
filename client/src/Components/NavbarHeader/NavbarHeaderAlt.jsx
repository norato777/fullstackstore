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
import s from "./NavbarHeaderAlt.module.css";

export default function NavbarHeaderAlt() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.user);
  const idLocalStorge = localStorage.getItem("id");
  const userLocalStorage = localStorage.getItem("admin");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const signOut = () => {
    dispatch(logOut());
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  const onClickAdmin = () => {
    navigate("/admin");
  };

  const onClickProfile = () => {
    navigate("/profile");
  };



  return (
    <>
      {!idLocalStorge ? (
        <>
          <button className={s.user}  onClick={handleShow}>
            <i className="bi bi-person-circle"></i>
          </button>
        </>
      ) : (
        <div className={s.contButon}>
          <button className={s.user}onClick={onClickProfile}>
          <i class="bi bi-person-check"></i>
          </button>
          <button className={s.user}onClick={signOut}>
            <i className="bi bi-box-arrow-left"></i>
          </button>
        </div>
      )}

      <ModalSign show={show} handleClose={handleClose} />
    </>
  );
}
