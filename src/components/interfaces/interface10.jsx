import React from "react";
import Pergunta10 from "../pergunta10";
import Respostas10 from "../resposta10";

export default function Interface10(props) {
  return (
      <div className="general text-gray-100 default">
        <div className="title">Vestibulados</div>
        <div className="game">
          <Pergunta10></Pergunta10>
          <Respostas10 setI={props.setI}></Respostas10>
        </div>
        <div className="direitos py-10">
          Vestibulados™, Todos os direitos reservados.
        </div>
      </div>
  );
}
