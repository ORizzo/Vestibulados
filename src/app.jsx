import React, { useState, useEffect } from "react";
import Wait from "./components/wait";
import Interface from "./components/interfaces/interface";
import Interface2 from "./components/interfaces/interface2";
import Interface3 from "./components/interfaces/interface3";
import Interface4 from "./components/interfaces/interface4";
import Interface5 from "./components/interfaces/interface5";
import Interface6 from "./components/interfaces/interface6";
import Interface7 from "./components/interfaces/interface7";
import Interface8 from "./components/interfaces/interface8";
import Interface9 from "./components/interfaces/interface9";
import Interface10 from "./components/interfaces/interface10";
import Interface11 from "./components/interfaces/interface11";
import Interface12 from "./components/interfaces/interface12";
import Interface13 from "./components/interfaces/interface13";
import Interface14 from "./components/interfaces/interface14";
import Interface15 from "./components/interfaces/interface15";
import Board from "./board";

export default function App() {
  useEffect(() => {
    document.title = "Vestibulados";
  }, []);
  const [aInterface, setInterface] = useState(
    <Interface setI={setI}></Interface>
  );

  function setI(arg, ident) {
    if (ident === "board") {
      setInterface(<Interface setI={setI}></Interface>);
    }
    if (ident === 1) {
      if (arg === "certo") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Interface2 setI={setI}></Interface2>);
        }, 600);
      } else if (arg === "errado") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Board count={0} setI={setI}></Board>);
        }, 600);
      } else {
        setInterface(<Wait></Wait>);
        console.log("Ocorreu um erro!");
      }
    }
    if (ident === 2) {
      if (arg === "certo") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Interface3 setI={setI}></Interface3>);
        }, 600);
      } else if (arg === "errado") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Board count={1} setI={setI}></Board>);
        }, 600);
      } else {
        setInterface(<Wait></Wait>);
        console.log("Ocorreu um erro!");
      }
    }
    if (ident === 3) {
      if (arg === "certo") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Interface4 setI={setI}></Interface4>);
        }, 600);
      } else if (arg === "errado") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Board count={2} setI={setI}></Board>);
        }, 600);
      } else {
        setInterface(<Wait></Wait>);
        console.log("Ocorreu um erro!");
      }
    }
    if (ident === 4) {
      if (arg === "certo") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Interface5 setI={setI}></Interface5>);
        }, 600);
      } else if (arg === "errado") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Board count={3} setI={setI}></Board>);
        }, 600);
      } else {
        setInterface(<Wait></Wait>);
        console.log("Ocorreu um erro!");
      }
    }
    if (ident === 5) {
      if (arg === "certo") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Interface6 setI={setI}></Interface6>);
        }, 600);
      } else if (arg === "errado") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Board count={4} setI={setI}></Board>);
        }, 600);
      } else {
        setInterface(<Wait></Wait>);
        console.log("Ocorreu um erro!");
      }
    }
    if (ident === 6) {
      if (arg === "certo") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Interface7 setI={setI}></Interface7>);
        }, 600);
      } else if (arg === "errado") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Board count={5} setI={setI}></Board>);
        }, 600);
      } else {
        setInterface(<Wait></Wait>);
        console.log("Ocorreu um erro!");
      }
    }
    if (ident === 7) {
      if (arg === "certo") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Interface8 setI={setI}></Interface8>);
        }, 600);
      } else if (arg === "errado") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Board count={6} setI={setI}></Board>);
        }, 600);
      } else {
        setInterface(<Wait></Wait>);
        console.log("Ocorreu um erro!");
      }
    }
    if (ident === 8) {
      if (arg === "certo") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Interface9 setI={setI}></Interface9>);
        }, 600);
      } else if (arg === "errado") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Board count={7} setI={setI}></Board>);
        }, 600);
      } else {
        setInterface(<Wait></Wait>);
        console.log("Ocorreu um erro!");
      }
    }
    if (ident === 9) {
      if (arg === "certo") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Interface10 setI={setI}></Interface10>);
        }, 600);
      } else if (arg === "errado") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Board count={8} setI={setI}></Board>);
        }, 600);
      } else {
        setInterface(<Wait></Wait>);
        console.log("Ocorreu um erro!");
      }
    }
    if (ident === 10) {
      if (arg === "certo") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Interface11 setI={setI}></Interface11>);
        }, 600);
      } else if (arg === "errado") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Board count={9} setI={setI}></Board>);
        }, 600);
      } else {
        setInterface(<Wait></Wait>);
        console.log("Ocorreu um erro!");
      }
    }
    if (ident === 11) {
      if (arg === "certo") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Interface12 setI={setI}></Interface12>);
        }, 600);
      } else if (arg === "errado") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Board count={10} setI={setI}></Board>);
        }, 600);
      } else {
        setInterface(<Wait></Wait>);
        console.log("Ocorreu um erro!");
      }
    }
    if (ident === 12) {
      if (arg === "certo") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Interface13 setI={setI}></Interface13>);
        }, 600);
      } else if (arg === "errado") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Board count={11} setI={setI}></Board>);
        }, 600);
      } else {
        setInterface(<Wait></Wait>);
        console.log("Ocorreu um erro!");
      }
    }
    if (ident === 13) {
      if (arg === "certo") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Interface14 setI={setI}></Interface14>);
        }, 600);
      } else if (arg === "errado") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Board count={12} setI={setI}></Board>);
        }, 600);
      } else {
        setInterface(<Wait></Wait>);
        console.log("Ocorreu um erro!");
      }
    }
    if (ident === 14) {
      if (arg === "certo") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Interface15 setI={setI}></Interface15>);
        }, 600);
      } else if (arg === "errado") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Board count={13} setI={setI}></Board>);
        }, 600);
      } else {
        setInterface(<Wait></Wait>);
        console.log("Ocorreu um erro!");
      }
    }
    if (ident === 15) {
      if (arg === "certo") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Board count={15} setI={setI}></Board>);
        }, 600);
      } else if (arg === "errado") {
        setInterface(<Wait></Wait>);
        setTimeout(() => {
          setInterface(<Board count={14} setI={setI}></Board>);
        }, 600);
      } else {
        setInterface(<Wait></Wait>);
        console.log("Ocorreu um erro!");
      }
    }
  }
  return aInterface;
}
