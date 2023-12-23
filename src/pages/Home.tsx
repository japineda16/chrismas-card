import React from "react";
import animationData from "../assets/chrismas.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { useSearchParams } from "react-router-dom";
import Fireworks from "@fireworks-js/react";

function Home() {
  const [searchParams] = useSearchParams();
  const state = React.createRef<Player>();

  return (
    <div className="flex flex-col bg-green-700 py-10 min-h-screen flex items-center justify-center">
      <Fireworks />
      <div className="rounded-md bg-white w-[90%] md:w-1/2 min-h-[50%] p-4">
        <div className="mx-5">
          <Player autoplay loop src={animationData} ref={state}></Player>
          <h1 className="text-3xl my-4 text-center">
            ¡Feliz Navidad
            {searchParams.get("name") && (
              <span className="text-red-500"> {searchParams.get("name")}</span>
            )}
            !
          </h1>
          <h3 className="text-gray-500 text-xl">
            Que esta Navidad esté llena de amor, paz y felicidad para ti. Que la
            magia de la temporada te llene de alegría y te traiga todo lo que
            deseas. Te quiero mucho.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
