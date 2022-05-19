import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";

export const Wordle = ({ solution }) => {
  const { currentGuess, handleKeyup } = useWordle(solution);
  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  return (
    <div>
      <h1>{solution}</h1>
      <h3>guess word are - {currentGuess}</h3>
    </div>
  );
};
