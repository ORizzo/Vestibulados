import React from "react";
import Pergunta7 from "../pergunta7";
import Respostas7 from "../resposta7";

export default function Interface7(props) {
  return (
      <div className="general text-gray-100 default">
        <div className="title">Vestibulados</div>
        <div className="game">
          <Pergunta7></Pergunta7>
          <Respostas7 setI={props.setI}></Respostas7>
        </div>
        <div className="direitos py-10">
          Vestibulados™, Todos os direitos reservados.
        </div>
      </div>
  );
}
