import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [edereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, edereco, numero, estado, cidade });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        variant="outlined"
        id="cep"
        type="number"
        label="CEP"
        margin="normal"
      />
      <TextField
        value={edereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        variant="outlined"
        id="endereco"
        type="text"
        label="Endereco"
        margin="normal"
        fullWidth
      />
      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        variant="outlined"
        id="numero"
        type="number"
        label="Numero"
        margin="normal"
      />
      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        variant="outlined"
        id="estado"
        type="text"
        label="Estado"
        margin="normal"
      />
      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        variant="outlined"
        id="cidade"
        type="text"
        label="Cidade"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        FINALIZAR CADASTRO
      </Button>
    </form>
  );
}

export default DadosEntrega;
