import React from "react";
import Pergunta from "../pergunta";
import Respostas from "../resposta";

export default function Interface(props) {
  return (
      <div className="general text-gray-100 default">
        <div className="title">Vestibulados</div>
        <div className="game">
          <Pergunta></Pergunta>
          <Respostas setI={props.setI}></Respostas>
        </div>
        <div className="direitos py-10">
          Vestibulados™, Todos os direitos reservados.
        </div>
      </div>
  );
}
