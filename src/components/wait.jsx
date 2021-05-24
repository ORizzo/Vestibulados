import React, { useState } from "react";
import loading from "./loading.json";
import "./wait.css";
import Lottie from "react-lottie";

export default function Loading(props) {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [Animation, setAnimation] = useState({
    isStopped: false,
    isPaused: false,
  });
  return (
    <div className={props.class}>
      <div className="general default">
        <Lottie
          options={defaultOptions}
          height={700}
          width={700}
          isStopped={Animation.isStopped}
          isPaused={Animation.isPaused}
        />
      </div>
    </div>
  );
}
