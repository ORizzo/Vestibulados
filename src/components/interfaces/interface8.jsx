import React from "react";
import Pergunta8 from "../pergunta8";
import Respostas8 from "../resposta8";

export default function Interface8(props) {
  return (
      <div className="general text-gray-100 default">
        <div className="title">Vestibulados</div>
        <div className="game">
          <Pergunta8></Pergunta8>
          <Respostas8 setI={props.setI}></Respostas8>
        </div>
        <div className="direitos py-10">
          Vestibulados™, Todos os direitos reservados.
        </div>
      </div>
  );
}
