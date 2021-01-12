import React from "react";
import {
  TextField,
  Button,
  Switch,
  FormControlLabel,
} from "@material-ui/core/";

function FormularioCadastro() {
  return (
    <form>
      <TextField
        variant="outlined"
        id="nome"
        label="Nome"
        margin="normal"
        fullWidth
      />
      <TextField
        variant="outlined"
        id="Sobrenome"
        label="Sobrenome"
        margin="normal"
        fullWidth
      />
      <TextField
        variant="outlined"
        id="cpf"
        label="CPF"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" defaultChecked color="primary" />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch name="Novidades" defaultChecked color="primary" />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
