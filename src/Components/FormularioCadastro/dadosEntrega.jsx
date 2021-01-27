import { TextField, Button} from '@material-ui/core';
import React from 'react';
function DadosEntrega(){
  return(
    <form>
      <TextField
        variant="outlined"
        id="cep"
        type="number"
        label="CEP"
        margin="normal"
      />
      <TextField
        variant="outlined"
        id="endereco"
        type="text"
        label="Endereco"
        margin="normal"
        fullWidth
      />
      <TextField
        variant="outlined"
        id="numero"
        type="number"
        label="Numero"
        margin="normal"
      />
       <TextField
        variant="outlined"
        id="estado"
        type="text"
        label="Estado"
        margin="normal"
      />
       <TextField
        variant="outlined"
        id="cidade"
        type="text"
        label="Cidade"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>FINALIZAR CADASTRO</Button>
    </form>
  );
}

export default DadosEntrega;