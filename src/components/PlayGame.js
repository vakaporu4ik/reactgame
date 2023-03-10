import "./PlayGame.css";
import { Board } from "./Board";
import { useState, useEffect } from "react";

export function PlayGame(props) {
  const [timeLeft, setTimeLeft] = useState(props.time);
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  const timeLabel = `${minutes}:${seconds}`;
  const [newPage, setNewPage] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setNewPage(props.onTimeUp);
    }
  }, [timeLeft]);

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
          props.onPointScored();
        }}
      />
      <div className="points">Points: {props.points}</div>
    </div>
  );
}
