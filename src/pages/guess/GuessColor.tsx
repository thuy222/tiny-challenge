import React, { useEffect, useState } from "react";

const GuessColor = () => {
  const [color, setColor] = useState<string>("");
  const [choices, setChoices] = useState<string[]>([]);
  const [correct, setCorrect] = useState<boolean>(false);
  const getRandomColor = () =>
    Math.floor(Math.random() * 16777215).toString(16);

  useEffect(() => {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setChoices(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  }, []);

  const handleClick = (choice: string): void => {
    if (color === choice) {
      setCorrect(true);
      getRandomColor();
    } else {
      alert("You are not correct");
    }
  };

  return (
    <div
      style={{ placeItems: "center", display: "flex", flexDirection: "column" }}
    >
      <h1>Guess Color</h1>
      <div
        className="guess-me"
        style={{
          background: `#${color}`,
          width: "200px",
          height: "200px",
          alignSelf: "center",
          display: "inline-block",
        }}
      />
      <div style={{ placeItems: "center", display: "flex" }}>
        {choices.map((choice, index) => {
          return (
            <p
              key={index}
              style={{
                background: "orange",
                margin: "20px",
                padding: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleClick(choice)}
            >
              #{choice}
            </p>
          );
        })}
      </div>
      <div>{correct && <p color="red">Correct</p>}</div>
    </div>
  );
};

export default GuessColor;
