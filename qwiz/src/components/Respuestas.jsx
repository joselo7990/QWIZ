import { useState } from "react";

function Respuestas({ respuesta, handleClick, isAnswered, className }) {
  return (
    <button
      className={`border-mi-color border-2 rounded-md px-4 py-2 my-3 ${className}`}
      onClick={() => handleClick(respuesta)}
      disabled={isAnswered}
    >
      {respuesta}
    </button>
  );
}

export default Respuestas;
