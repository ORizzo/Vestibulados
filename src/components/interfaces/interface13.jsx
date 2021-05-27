import React from "react";
import Pergunta13 from "../pergunta13";
import Respostas13 from "../resposta13";

export default function Interface13(props) {
  return (
      <div className="general text-gray-100 default">
        <div className="title">Vestibulados</div>
        <div className="game">
          <Pergunta13></Pergunta13>
          <Respostas13 setI={props.setI}></Respostas13>
        </div>
        <div className="direitos py-10">
          Vestibulados™, Todos os direitos reservados.
        </div>
      </div>
  );
}
