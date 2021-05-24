import React, { useState } from "react";
import struture from "./strutura.json";
import "./components/interface.css";
import Interface from "./components/interface"

export default function General(props) {
  const [question, setQuestion] = useState(struture.pergunta);
  var fetc = 0
  async function getRes(){
    fetc = await fetch("https://jsonplaceholder.typicode.com/posts");
    props.setRes(fetc)
    console.log(props.res)
  }
  return (
    <div className={props.class}>
      <Interface Gprops={props} Iprops={props.setI} getRes={getRes} setQuestion={setQuestion} question={question}></Interface>
    </div>
  );
}
