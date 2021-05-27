import React from "react";
import Pergunta12 from "../pergunta12";
import Respostas12 from "../resposta12";

export default function Interface12(props) {
  return (
      <div className="general text-gray-100 default">
        <div className="title">Vestibulados</div>
        <div className="game">
          <Pergunta12></Pergunta12>
          <Respostas12 setI={props.setI}></Respostas12>
        </div>
        <div className="direitos py-10">
          Vestibulados™, Todos os direitos reservados.
        </div>
      </div>
  );
}
