import React from "react";
import Pergunta5 from "../pergunta5";
import Respostas5 from "../resposta5";

export default function Interface5(props) {
  return (
      <div className="general text-gray-100 default">
        <div className="title">Vestibulados</div>
        <div className="game ajust">
          <Pergunta5></Pergunta5>
          <Respostas5 setI={props.setI}></Respostas5>
        </div>
        <div className="direitos py-10">
          Vestibulados™, Todos os direitos reservados.
        </div>
      </div>
  );
}
