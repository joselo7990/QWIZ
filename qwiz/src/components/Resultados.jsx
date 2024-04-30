import { useContext } from "react";
import { GameContext } from "../context/game";

function Resultados() {
  const { score, maxQuestions, resetGame } = useContext(GameContext);
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-mi-color">
      <div>
        <h1 className="mb-8 text-white text-3xl text-left">Futbol Quiz</h1>
      </div>

      <div className="bg-white p-8 rounded-lg">
        <div>
          <h1 className="text-center text-5xl">Resultados</h1>
        </div>
        <div>
          {" "}
          <h1 className="text-center text-2xl mt-8">
            Tenes {score}/ {maxQuestions} respuestas correctas
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="border-black border-2 rounded-md px-4 py-2 mt-12"
            onClick={() => resetGame()}
          >
            Jugar de nuevo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resultados;
