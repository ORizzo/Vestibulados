import React, { useState } from "react";
import Wait from "./components/wait";
import Interface from "./components/interfaces/interface";
import Interface2 from "./components/interfaces/interface2";

export default function App() {
  useEffect(() => {
    document.title = "Vestibulados";
  }, []);
  const [aInterface, setInterface] = useState(
    <div>
      <Interface setI={setI}></Interface>
    </div>
  );
  function setI() {
    setInterface(<Wait></Wait>);
    setTimeout(() => {
      setInterface(<Interface2 setI={setI}></Interface2>);
    }, 2000);
  }
  return aInterface;
}
