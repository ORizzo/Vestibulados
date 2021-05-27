import React from "react";

export default function Interface(props) {
  var message = "";
  if (props.count < 7) {
    message = "Tente novamente.";
  } else {
    message = "Parabéns";
  }
  return (
    <div className="general text-gray-100 default">
      <div className="title">Vestibulados</div>
      <div className="py-32">
        Você acertou {props.count} perguntas! {message}
      </div>
      <div className="game">
        <button onClick={() => {
          props.setI(0, "board")
        }} className="rounded-xl m-12 mx-20 p-3 px-20 shadow-2xl ">Jogar novamente</button>
      </div>
      <div className="direitos py-10">
        Vestibulados™, Todos os direitos reservados.
      </div>
    </div>
  );
}
