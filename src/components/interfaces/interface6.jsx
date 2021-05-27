import React from "react";
import Pergunta6 from "../pergunta6";
import Respostas6 from "../resposta6";

export default function Interface6(props) {
  return (
      <div className="general text-gray-100 default">
        <div className="title">Vestibulados</div>
        <div className="game">
          <Pergunta6></Pergunta6>
          <Respostas6 setI={props.setI}></Respostas6>
        </div>
        <div className="direitos py-10">
          Vestibulados™, Todos os direitos reservados.
        </div>
      </div>
  );
}
