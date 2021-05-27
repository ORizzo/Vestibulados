import React from "react";
import Pergunta14 from "../pergunta14";
import Respostas14 from "../resposta14";

export default function Interface14(props) {
  return (
      <div className="general text-gray-100 default">
        <div className="title">Vestibulados</div>
        <div className="game">
          <Pergunta14></Pergunta14>
          <Respostas14 setI={props.setI}></Respostas14>
        </div>
        <div className="direitos py-10">
          Vestibulados™, Todos os direitos reservados.
        </div>
      </div>
  );
}
