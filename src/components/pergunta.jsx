import React from "react";
import struture from "../strutura.json"

export default function Pergunta() {
  return (
    <div className="question defaultQ rounded-xl m-12 mx-40 shadow-2xl">
      <div className="p-4">{struture.pergunta}</div>
    </div>
  );
}
