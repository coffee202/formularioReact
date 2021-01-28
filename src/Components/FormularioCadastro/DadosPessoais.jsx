import React, { useState, useContext } from "react";
import {
  TextField,
  Button,
  Switch,
  FormControlLabel,
} from "@material-ui/core/";
import ValidacoesCadastro from "../../contexts/ValidacoesdeCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar }) {
  const [nome, setName] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro)
  const [ erros, validacampos, possoEnviar]= useErros(validacoes);



  
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()){
          aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setName(event.target.value);
        }}
        variant="outlined"
        id="nome"
        name="nome"
        label="Nome"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        variant="outlined"
        id="Sobrenome"
        name="sobrenome"
        label="Sobrenome"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validacampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        variant="outlined"
        id="cpf"
        name="cpf"
        label="CPF"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
          
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="Novidades"
            
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Proximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
