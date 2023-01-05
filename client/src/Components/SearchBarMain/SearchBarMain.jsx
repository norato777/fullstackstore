import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function SearchBarMain() {
  return (
    <>
      <form>
        <TextField
          id="outlined-basic"
          label="¿Que buscas hoy?"
          variant="outlined"
        />
        <Button variant="outlined">Buscar</Button>
      </form>
    </>
  );
}
