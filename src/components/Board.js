import "./Board.css";
import { useState } from "react";
import { useRef } from "react";

const colors = [
  "var(--tomato10)",
  "var(--indigo10)",
  "var(--purple10)",
  "var(--amber10)",
];
export function Board({ onPointScored, timeLeft }) {
  const [ball, setBall] = useState({
    color: "var(--mint10)",
    size: "15px",
    x: "245px",
    y: "245px",
  });
  const boardRef = useRef(null);

  return (
    <div ref={boardRef} className="board">
      {timeLeft > 0 ? (
        <div
          onClick={() => {
            // if (timeLeft <= 0) return;
            //   if (timeLeft > 0) {

            const { width: boardSize } =
              boardRef.current.getBoundingClientRect();
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = getRandomNumber(15, 80);
            const x = getRandomNumber(0, boardSize - size);
            const y = getRandomNumber(0, boardSize - size);

            setBall({ color, size: `${size}px`, x: `${x}px`, y: `${y}px` });
            onPointScored();
            //   }
          }}
          className="ball"
          style={{
            backgroundColor: ball.color,
            top: ball.x,
            left: ball.y,
            width: ball.size,
            height: ball.size,
          }}
        />
      ) : null}
    </div>
  );
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
