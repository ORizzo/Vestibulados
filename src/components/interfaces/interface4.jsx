import React from "react";
import Pergunta4 from "../pergunta4";
import Respostas4 from "../resposta4";

export default function Interface4(props) {
  return (
      <div className="general text-gray-100 default">
        <div className="title">Vestibulados</div>
        <div className="game ajust">
          <Pergunta4></Pergunta4>
          <Respostas4 setI={props.setI}></Respostas4>
        </div>
        <div className="direitos py-10">
          Vestibulados™, Todos os direitos reservados.
        </div>
      </div>
  );
}
