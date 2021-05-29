import React, { useState } from "react";
import Lottie from "react-lottie";
import wrong from "./animation.json";
import correct from "./correct.json";
import struture from "../strutura.json"

export default function Resposta5(props) {
  const [ls, setls] = useState(0);
  async function core(b) {
    if (ls === 1) {
      return "on";
    }
    setls(1);
    if (b === struture["resposta certa5"]) {
      setTimeout(() => props.setI("certo", 5), 1700);
      return "certo";
    } else {
      setTimeout(() => props.setI("errado", 5), 1700);
      return "errado";
    }
  }
  const [Which, setWhich] = useState();
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: Which,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [Animation, setAnimation] = useState({
    isStopped: false,
    isPaused: false,
  });
  const [Gif1, setGif1] = useState(0);
  const [Gif2, setGif2] = useState(0);
  const [Gif3, setGif3] = useState(0);
  const [Gif4, setGif4] = useState(0);

  return (
    <div className="options rounded-xl m-12 mx-40">
      <button
        className="rounded-xl m-12 mx-18 p-3 px-20 shadow-2xl"
        onClick={async function oc() {
          if ((await core("1")) === "on") {
            return;
          }
          if ((await core("1")) === "errado") {
            setWhich(wrong);
          } else {
            setWhich(correct);
          }
          setGif1(150);
        }}>
        {struture.respostas5[1]}
        <div>
          <Lottie
            options={defaultOptions}
            height={Gif1}
            width={Gif1}
            isStopped={setAnimation.isStopped}
            isPaused={setAnimation.isPaused}
          />
        </div>
      </button>
      <button
        className="rounded-xl m-12 mx-18 p-3 px-20 shadow-2xl"
        onClick={async function oc() {
          if ((await core("2")) === "on") {
            return;
          }
          if ((await core("2")) === "errado") {
            setWhich(wrong);
          } else {
            setWhich(correct);
          }
          setGif2(150);
        }}>
        {struture.respostas5[2]}
        <div>
          <Lottie
            options={defaultOptions}
            height={Gif2}
            width={Gif2}
            isStopped={setAnimation.isStopped}
            isPaused={setAnimation.isPaused}
          />
        </div>
      </button>
      <button
        className="rounded-xl m-12 mx-18 p-3 px-20 shadow-2xl"
        onClick={async function oc() {
          if ((await core("3")) === "on") {
            return;
          }
          if ((await core("3")) === "errado") {
            setWhich(wrong);
          } else {
            setWhich(correct);
          }
          setGif3(150);
        }}>
        {struture.respostas5[3]}
        <div>
          <Lottie
            options={defaultOptions}
            height={Gif3}
            width={Gif3}
            isStopped={setAnimation.isStopped}
            isPaused={setAnimation.isPaused}
          />
        </div>
      </button>
      <button
        className="rounded-xl m-12 mx-18 p-3 px-20 shadow-2xl"
        onClick={async function oc() {
          if ((await core("4")) === "on") {
            return;
          }
          if ((await core("4")) === "errado") {
            setWhich(wrong);
          } else {
            setWhich(correct);
          }
          setGif4(150);
        }}>
        {struture.respostas5[4]}
        <div>
          <Lottie
            options={defaultOptions}
            height={Gif4}
            width={Gif4}
            isStopped={setAnimation.isStopped}
            isPaused={setAnimation.isPaused}
          />
        </div>
      </button>
    </div>
  );
}
