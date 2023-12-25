import React from "react";

function GuessList({guesses}) {
  return (
    <div>
      {
      guesses.map((elem, index) => {
        return (
          <p className="guess" key={index}>
            {elem}
          </p>
        );
      })
      }
    </div>
  );
}

export default GuessList;
