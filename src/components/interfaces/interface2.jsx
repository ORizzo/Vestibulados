import React from "react";
import Pergunta2 from "../pergunta2";
import Respostas2 from "../resposta2";

export default function Interface2(props) {
  return (
      <div className="general text-gray-100 default">
        <div className="title">Vestibulados</div>
        <div className="game">
          <Pergunta2></Pergunta2>
          <Respostas2 setI={props.setI}></Respostas2>
        </div>
        <div className="direitos py-10">
          Vestibulados™, Todos os direitos reservados.
        </div>
      </div>
  );
}
