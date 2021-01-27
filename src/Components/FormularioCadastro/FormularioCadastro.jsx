import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import DadosEntrega from "./dadosEntrega";

import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validarCPF }) {

  const [etapaAtual, setEtapaAtual] = useState(1)

  function formularioAtual(etapa){
    switch(etapa){
      case 0:
        return <DadosUsuario />
      case 1:
        return <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
      case 2:
        return <DadosEntrega/>
        default:
          return <Typography>Erro ao selecionar formulário</Typography>
    }
  }
  return (
    <>
      {formularioAtual(etapaAtual)}
      {/* <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
      <DadosUsuario />
      <DadosEntrega/> */}
    </>
  );
}

export default FormularioCadastro;
