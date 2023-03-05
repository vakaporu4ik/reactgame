import "./Board.css";
import { useState } from "react";
import { GiArcher } from "react-icons/gi";

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
  return (
    <div className="board">
      {timeLeft > 0 ? (
        <div
          onClick={() => {
            // if (timeLeft <= 0) return;
            //   if (timeLeft > 0) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = getRandomNumber(15, 80);
            const x = getRandomNumber(0, 500 - size);
            const y = getRandomNumber(0, 500 - size);

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
      ) : (
        <GiArcher className="board-icon" />
      )}
    </div>
  );
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
