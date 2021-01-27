import React, {useState} from 'react';

import {
  TextField,
  Button,
  Switch,
  FormControlLabel,
} from "@material-ui/core/";

function DadosPessoais({aoEnviar, validarCPF}) {
  const [nome, setName] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({cpf:{valido:true, texto:""}});

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setName(event.target.value);
        }}
        variant="outlined"
        id="nome"
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
        label="Sobrenome"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(e)=>{
          const eValido = validarCPF(e.target.value);
          setErros({cpf:eValido})
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        variant="outlined"
        id="cpf"
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
            defaultChecked={promocoes}
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
            defaultChecked={novidades}
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
