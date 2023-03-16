import React, { useEffect, useRef, useState } from "react";

interface Coordinate {
  x: number;
  y: number;
}

const CircleClick = () => {
  const [coordination, setCoordination] = useState<Coordinate>({ x: 0, y: 0 });
  const divRef = useRef(null);
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = e;
    const x = e.clientX;
    const y = e.clientY;
    setCoordination({ x, y });
  };

  useEffect(() => {
    divRef.current = coordination as any;
  }, [coordination.x, coordination.y]);

  const handlePreviousClick = () => {
    const refX = divRef.current;
    console.log(refX);
  };

  return (
    <div
      onClick={handleClick}
      style={{ width: "100vw", height: "100vh", position: "relative" }}
    >
      <button onClick={handlePreviousClick}>Reset To Previous Position</button>
      <div
        ref={divRef}
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "red",
          borderRadius: "50%",
          position: "absolute",
          top: `${coordination.y}px`,
          left: `${coordination.x}px`,
          padding: 0,
          margin: 0,
          display: "inline-block",
        }}
      ></div>
    </div>
  );
};

export default CircleClick;
