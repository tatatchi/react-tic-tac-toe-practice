import { useState } from "react";

function Square () {
  const [value, setValue] = useState("O");

  function handeClick() {
    setValue('X');
    value === "O" ? setValue("X") : setValue("O")
  }
  return (
    <button 
      className="square"
      onClick={handeClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}