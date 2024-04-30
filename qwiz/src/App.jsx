import { useState, useContext } from "react";
import "./App.css";
import Preguntas from "./components/Preguntas";
import Resultados from "./components/Resultados";
import { GameContext } from "./context/game";

function App() {
  const { gameStatus } = useContext(GameContext);
  return (
    <>
      {gameStatus === "playing" && <Preguntas />}
      {gameStatus === "finished" && <Resultados />}
    </>
  );
}

export default App;
