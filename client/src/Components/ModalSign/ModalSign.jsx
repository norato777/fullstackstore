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
        backgroundColor: "rgba(33, 37, 41,0.5)",
        backdropFilter: "blur(5px)",
      }}
    >
      <CardGroup
        style={{
          backgroundColor: "rgba(33, 37, 41,0.5)",
          backdropFilter: "blur(5px)",
          border: "1px solid #fff",
          boxShadow: "0 0 7px #fff 0 0 14px #fff 0 0 21px #fff",
        }}
      >
        <Card>
          <div>
            <ModalLogin />
          </div>
          <div>
            <ModalRegister />
          </div>
          <Google />
        </Card>
      </CardGroup>
    </Modal>
  );
}
