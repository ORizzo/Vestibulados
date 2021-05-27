import React from "react";
import Pergunta3 from "../pergunta3";
import Respostas3 from "../resposta3";

export default function Interface3(props) {
  return (
      <div className="general text-gray-100 default">
        <div className="title">Vestibulados</div>
        <div className="game">
          <Pergunta3></Pergunta3>
          <Respostas3 setI={props.setI}></Respostas3>
        </div>
        <div className="direitos py-10">
          Vestibulados™, Todos os direitos reservados.
        </div>
      </div>
  );
}
