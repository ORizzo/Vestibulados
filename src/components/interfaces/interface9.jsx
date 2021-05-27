import React from "react";
import Pergunta9 from "../pergunta9";
import Respostas9 from "../resposta9";

export default function Interface9(props) {
  return (
      <div className="general text-gray-100 default">
        <div className="title">Vestibulados</div>
        <div className="game">
          <Pergunta9></Pergunta9>
          <Respostas9 setI={props.setI}></Respostas9>
        </div>
        <div className="direitos py-10">
          Vestibulados™, Todos os direitos reservados.
        </div>
      </div>
  );
}
