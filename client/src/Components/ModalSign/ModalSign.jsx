import React, { useState } from "react";
import Google from "../Google/Google";
import ModalLogin from "../ModalLogin/ModalLogin";
import ModalRegister from "../ModalRegister/ModalRegister";
import { Card, CardGroup, Modal } from "react-bootstrap";

export default function ModalSign({ show, handleClose }) {
  return (
    <Modal
      centered
      show={show}
      onHide={handleClose}
      style={{
        backgroundColor: "var( --clr-0-025)",
        backdropFilter: "blur(5px)",
      }}
    >
      <CardGroup
        style={{
          backgroundColor: "var(--background-color)",
          backdropFilter: "blur(5px)",
          border: "var(--border)",
          boxShadow: "var(--box-shadow)",
        }}
      >
        <Card>
          <div>
            <ModalLogin handleClose={handleClose} />
          </div>
          <div>
            <ModalRegister handleClose={handleClose} />
          </div>
          <div>
            <Google handleClose={handleClose} />
          </div>
        </Card>
      </CardGroup>
    </Modal>
  );
}
