import "./styles.css";
import React, { useState } from "react";

const colorDictionary = {
  "🟠": "joy & warmth",
  "🟣": "royalty & luxury",
  "⚫": "power & mystery",
  "🟡": "happiness & optimism",
  "🔵": "cool & relaxing",
  "🟢": "tranquility & good luck",
  "⚪": "purity & innocence",
  "🔴": "violence & danger"
};

var colorsWeKnow = Object.keys(colorDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function inputColorHandler(event) {
    var userInput = event.target.value;

    var meaning = colorDictionary[userInput];

    console.log(meaning);

    if (meaning === undefined) {
      meaning = "we don't have in our database";
    }

    setMeaning(meaning);
  }

  function colorClickHandler(color) {
    var meaning = colorDictionary[color];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ textDecoration: "underline" }}>Color Intepreter</h1>
      <div>
        <input
          onChange={inputColorHandler}
          style={{ padding: "1rem", width: "80%", height: "50px" }}
        ></input>
        <h1>{meaning}</h1>
        <h3 style={{ fontSize: "larger" }}>Colors in the database</h3>
        {colorsWeKnow.map(function (color) {
          return (
            <span
              key={color}
              onClick={() => colorClickHandler(color)}
              style={{
                fontSize: "2rem",
                padding: "0.5rem 0.5rem",
                cursor: "pointer"
              }}
            >
              {color}
            </span>
          );
        })}
      </div>
    </div>
  );
}
