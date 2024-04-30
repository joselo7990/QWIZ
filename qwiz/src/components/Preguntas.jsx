import { useState, useEffect, useContext } from "react";
import Respuestas from "./Respuestas";
import { GameContext } from "../context/game";

function Preguntas() {
  const { questions, currentQuestion, answer, handleAnswer, nextQuestion } =
    useContext(GameContext);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-mi-color">
      <div>
        <h1 className="mb-8 text-white text-3xl text-left">Futbol Quiz</h1>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        viewBox="0 -960 960 960"
        width="48"
      >
        <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm205-493 69-24 18-64q-34-53-84-90.5T575-809l-65 43v70l175 123Zm-409 0 174-123v-70l-64-43q-63 20-113 57.5T189-661l22 64 65 24Zm-54 320 60-7 39-65-62-191-71-24-48 39q0 72 16 131.5T222-253Zm258 113q27 0 54.5-5t57.5-13l33-72-32-55H368l-32 55 33 72q26 8 55 13t56 5ZM374-345h208l61-183-163-117-166 117 60 183Zm365 92q49-57 65-116.5T820-501l-48-33-70 18-62 191 38 65 61 7Z" />
      </svg>

      <div className="bg-white p-8 rounded-lg">
        {questions[currentQuestion] && (
          <h3>{questions[currentQuestion].pregunta}</h3>
        )}
        {questions[currentQuestion] && (
          <div className="flex flex-col my-3">
            {questions[currentQuestion].respuestas.map((respuesta, index) => (
              <Respuestas
                key={index}
                respuesta={respuesta}
                handleClick={handleAnswer}
                isAnswered={answer}
                className={
                  answer === respuesta &&
                  answer === questions[currentQuestion].respuesta_correcta
                    ? "bg-green-500"
                    : answer === respuesta &&
                      answer !== questions[currentQuestion].respuesta_correcta
                    ? "bg-red-500"
                    : ""
                }
              />
            ))}
          </div>
        )}
        {answer && (
          <button
            onClick={nextQuestion}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
}

export default Preguntas;
