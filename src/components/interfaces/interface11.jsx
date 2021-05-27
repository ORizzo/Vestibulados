import React from "react";
import Pergunta11 from "../pergunta11";
import Respostas11 from "../resposta11";

export default function Interface11(props) {
  return (
      <div className="general text-gray-100 default">
        <div className="title">Vestibulados</div>
        <div className="game">
          <Pergunta11></Pergunta11>
          <Respostas11 setI={props.setI}></Respostas11>
        </div>
        <div className="direitos py-10">
          Vestibulados™, Todos os direitos reservados.
        </div>
      </div>
  );
}
