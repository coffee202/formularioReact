import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './Components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core/'
import 'fontsource-roboto';
import { validarCPF, validarSenha } from './models.js/cadastro'
import ValidacoesCadastro from './contexts/ValidacoesdeCadastro';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">Formulario cadastro</Typography>
        <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha }}>
          <FormularioCadastro aoEnviar={aoEviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEviarForm(dados) {
  console.log(dados)
}

export default App;
