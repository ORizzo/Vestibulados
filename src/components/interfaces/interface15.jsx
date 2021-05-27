import React from "react";
import Pergunta15 from "../pergunta15";
import Respostas15 from "../resposta15";

export default function Interface15(props) {
  return (
      <div className="general text-gray-100 default">
        <div className="title">Vestibulados</div>
        <div className="game">
          <Pergunta15></Pergunta15>
          <Respostas15 setI={props.setI}></Respostas15>
        </div>
        <div className="direitos py-10">
          Vestibulados™, Todos os direitos reservados.
        </div>
      </div>
  );
}
