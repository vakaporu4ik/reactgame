import "./ScreenThree.css";
import { GiArcher } from "react-icons/gi";
import { Board } from "./Board";
import { useState, useEffect } from "react";

export function ScreenThree(props) {
  const [points, setPoints] = useState(0);
  const [timeLeft, setTimeLeft] = useState(props.time);
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  const timeLabel = `${minutes}:${seconds}`;

  useEffect(() => {
    let id;
    if (timeLeft > 0) {
      id = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(id);
    };
  }, [timeLeft]);

  return (
    <div className="screen-three">
      <h1 className="time-left">
        Time left
        <span className="time-label">{timeLabel}</span>
      </h1>
      <Board
        timeLeft={timeLeft}
        onPointScored={() => {
          /// poroporty onPS
          setPoints(points + 1);
        }}
      />
      <div className="points">Active points: {points}</div>
    </div>
  );
}
